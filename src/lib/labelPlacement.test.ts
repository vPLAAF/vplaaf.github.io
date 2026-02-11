import { bestInteriorPoint, pointInPolygon, polygonCentroid } from "@/lib/labelPlacement";

describe("labelPlacement", () => {
  test("polygonCentroid returns a point inside for convex polygon", () => {
    const ring = [
      { lat: 0, lng: 0 },
      { lat: 0, lng: 10 },
      { lat: 10, lng: 10 },
      { lat: 10, lng: 0 },
      { lat: 0, lng: 0 },
    ];

    const c = polygonCentroid(ring);
    expect(c).not.toBeNull();
    expect(pointInPolygon(c!, ring)).toBe(true);
  });

  test("bestInteriorPoint finds a point inside for concave polygon", () => {
    // U-shape. The centroid is likely outside the polygon.
    const ring = [
      { lat: 0, lng: 0 },
      { lat: 0, lng: 6 },
      { lat: 2, lng: 6 },
      { lat: 2, lng: 2 },
      { lat: 4, lng: 2 },
      { lat: 4, lng: 6 },
      { lat: 6, lng: 6 },
      { lat: 6, lng: 0 },
      { lat: 0, lng: 0 },
    ];

    const p = bestInteriorPoint(ring, { precision: 1e-4, maxIterations: 10 });
    expect(p).not.toBeNull();
    expect(pointInPolygon(p!, ring)).toBe(true);
  });
});

