export type LatLng = { lat: number; lng: number };

function almostEqual(a: number, b: number, eps = 1e-12) {
  return Math.abs(a - b) <= eps;
}

function normalizeRing(ring: LatLng[]): LatLng[] {
  const pts = ring.filter((p) => Number.isFinite(p.lat) && Number.isFinite(p.lng));
  if (pts.length < 3) return pts;
  const first = pts[0];
  const last = pts[pts.length - 1];
  const closed = almostEqual(first.lat, last.lat) && almostEqual(first.lng, last.lng);
  return closed ? pts.slice(0, -1) : pts;
}

export function polygonCentroid(ring: LatLng[]): LatLng | null {
  const pts = normalizeRing(ring);
  if (pts.length < 3) return null;

  // Use planar centroid formula with x=lng, y=lat.
  let a = 0;
  let cx = 0;
  let cy = 0;

  for (let i = 0; i < pts.length; i++) {
    const p0 = pts[i];
    const p1 = pts[(i + 1) % pts.length];
    const x0 = p0.lng;
    const y0 = p0.lat;
    const x1 = p1.lng;
    const y1 = p1.lat;

    const cross = x0 * y1 - x1 * y0;
    a += cross;
    cx += (x0 + x1) * cross;
    cy += (y0 + y1) * cross;
  }

  if (almostEqual(a, 0)) return null;
  a *= 0.5;
  cx /= 6 * a;
  cy /= 6 * a;

  if (!Number.isFinite(cx) || !Number.isFinite(cy)) return null;
  return { lat: cy, lng: cx };
}

export function pointInPolygon(point: LatLng, ring: LatLng[]): boolean {
  const pts = normalizeRing(ring);
  if (pts.length < 3) return false;

  // Ray casting. Treat points on edge as inside.
  const x = point.lng;
  const y = point.lat;

  let inside = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const xi = pts[i].lng;
    const yi = pts[i].lat;
    const xj = pts[j].lng;
    const yj = pts[j].lat;

    // Check on-segment (with small tolerance)
    const minX = Math.min(xi, xj);
    const maxX = Math.max(xi, xj);
    const minY = Math.min(yi, yj);
    const maxY = Math.max(yi, yj);
    const dx = xj - xi;
    const dy = yj - yi;
    const cross = (x - xi) * dy - (y - yi) * dx;
    if (Math.abs(cross) < 1e-12 && x >= minX - 1e-12 && x <= maxX + 1e-12 && y >= minY - 1e-12 && y <= maxY + 1e-12) {
      return true;
    }

    const intersect = (yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

function dist2(a: LatLng, b: LatLng) {
  const dx = a.lng - b.lng;
  const dy = a.lat - b.lat;
  return dx * dx + dy * dy;
}

function distancePointToSegment(point: LatLng, a: LatLng, b: LatLng): number {
  const x = point.lng;
  const y = point.lat;
  const x1 = a.lng;
  const y1 = a.lat;
  const x2 = b.lng;
  const y2 = b.lat;

  const dx = x2 - x1;
  const dy = y2 - y1;
  if (almostEqual(dx, 0) && almostEqual(dy, 0)) {
    return Math.sqrt(dist2(point, a));
  }

  const t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);
  const tt = Math.max(0, Math.min(1, t));
  const proj = { lng: x1 + tt * dx, lat: y1 + tt * dy };
  return Math.sqrt(dist2(point, proj));
}

function pointToPolygonDistance(point: LatLng, ring: LatLng[]): number {
  const pts = normalizeRing(ring);
  if (pts.length < 3) return 0;

  let min = Infinity;
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i];
    const b = pts[(i + 1) % pts.length];
    const d = distancePointToSegment(point, a, b);
    if (d < min) min = d;
  }
  return min;
}

function bbox(ring: LatLng[]) {
  const pts = normalizeRing(ring);
  let minLat = Infinity;
  let minLng = Infinity;
  let maxLat = -Infinity;
  let maxLng = -Infinity;
  for (const p of pts) {
    minLat = Math.min(minLat, p.lat);
    minLng = Math.min(minLng, p.lng);
    maxLat = Math.max(maxLat, p.lat);
    maxLng = Math.max(maxLng, p.lng);
  }
  return { minLat, minLng, maxLat, maxLng };
}

export type InteriorPointOptions = {
  /**
   * Target precision in degrees; smaller = more accurate but slower.
   * Default balances performance for client-side maps.
   */
  precision?: number;
  /**
   * Initial grid step as a fraction of the bbox size.
   * Default 0.25 means 4x4 samples per box dimension.
   */
  initialStepFraction?: number;
  /** max refinement iterations */
  maxIterations?: number;
};

/**
 * Returns a point intended to be inside the polygon.
 * Strategy:
 *  - Use area-weighted centroid if it falls inside.
 *  - Otherwise do a coarse-to-fine grid search, maximizing distance to edges (polylabel-like).
 */
export function bestInteriorPoint(ring: LatLng[], opts: InteriorPointOptions = {}): LatLng | null {
  const pts = normalizeRing(ring);
  if (pts.length < 3) return null;

  const c = polygonCentroid(pts);
  if (c && pointInPolygon(c, pts)) return c;

  const { minLat, minLng, maxLat, maxLng } = bbox(pts);
  if (!Number.isFinite(minLat) || !Number.isFinite(minLng) || !Number.isFinite(maxLat) || !Number.isFinite(maxLng)) {
    return c ?? pts[0] ?? null;
  }

  const w = maxLng - minLng;
  const h = maxLat - minLat;
  const span = Math.max(w, h);
  if (span <= 0) return c ?? pts[0] ?? null;

  const precision = opts.precision ?? Math.max(1e-5, span / 500); // adaptive
  const stepFrac = opts.initialStepFraction ?? 0.25;
  const maxIterations = opts.maxIterations ?? 12;

  let step = Math.max(span * stepFrac, precision * 2);

  // Seed best as any inside vertex (if available)
  let best: LatLng | null = null;
  let bestScore = -Infinity;
  for (const p of pts) {
    if (pointInPolygon(p, pts)) {
      best = p;
      bestScore = pointToPolygonDistance(p, pts);
      break;
    }
  }

  // Fallback seed = bbox center (even if outside)
  if (!best) {
    const mid = { lat: (minLat + maxLat) / 2, lng: (minLng + maxLng) / 2 };
    best = mid;
    bestScore = (pointInPolygon(mid, pts) ? 1 : -1) * pointToPolygonDistance(mid, pts);
  }

  let center = { lat: best.lat, lng: best.lng };

  for (let iter = 0; iter < maxIterations && step > precision; iter++) {
    // sample around current center on a 5x5 grid
    for (let iy = -2; iy <= 2; iy++) {
      for (let ix = -2; ix <= 2; ix++) {
        const p = { lat: center.lat + iy * step, lng: center.lng + ix * step };
        if (p.lat < minLat - step || p.lat > maxLat + step || p.lng < minLng - step || p.lng > maxLng + step) {
          continue;
        }

        const d = pointToPolygonDistance(p, pts);
        const score = (pointInPolygon(p, pts) ? 1 : -1) * d;
        if (score > bestScore) {
          bestScore = score;
          best = p;
        }
      }
    }

    if (best) center = { lat: best.lat, lng: best.lng };
    step *= 0.5;
  }

  if (best && pointInPolygon(best, pts)) return best;

  // If we somehow didn't find an interior point (degenerate rings), fall back.
  return c ?? pts[0] ?? null;
}

