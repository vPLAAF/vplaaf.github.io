export type AirspaceCategory = "Prohibit" | "Restricted" | string;

export type AirspaceLimits = {
  lower: string;
  upper: string;
};

export type AirspaceLabel = {
  point: string; // "lat,lng"
  text: string;
} | null;

export type AirspaceCircle = {
  center: string; // "lat,lng"
  radius: string; // numeric string; assumed NM unless stated otherwise
};

export type AirspaceAreaRaw = {
  area_type: string;
  name: string;
  limits: AirspaceLimits;
  category: AirspaceCategory;
  usertext: string | null;
  label: AirspaceLabel;
  vertices: string[];
  circle?: AirspaceCircle;
};

export type AirspaceAreasResponse = {
  areas: AirspaceAreaRaw[];
};

export type LatLng = { lat: number; lng: number };

export type CoordinateSystem = "WGS84" | "GCJ02";

export type AirspaceGeometry =
  | { kind: "polygon"; latlngs: LatLng[] }
  | { kind: "circle"; center: LatLng; radiusMeters: number };

export type AirspaceArea = {
  id: string;
  name: string;
  category: AirspaceCategory;
  limits: AirspaceLimits;
  usertext?: string | null;
  label?: { point: LatLng; text: string } | null;
  geometry: AirspaceGeometry;
};

export function parseLatLng(input: string): LatLng | null {
  // expected: "lat,lng" (as in the provided Areas.json)
  const parts = input.split(",").map((s) => s.trim());
  if (parts.length !== 2) return null;

  const lat = Number(parts[0]);
  const lng = Number(parts[1]);
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;

  // loose validation
  if (lat < -90 || lat > 90) return null;
  if (lng < -180 || lng > 180) return null;

  return { lat, lng };
}

function closeRingIfNeeded(points: LatLng[]): LatLng[] {
  if (points.length < 3) return points;
  const first = points[0];
  const last = points[points.length - 1];
  const same = first.lat === last.lat && first.lng === last.lng;
  return same ? points : [...points, first];
}

// If the source doesn't specify units, we make a reasonable aviation assumption: radius is in NM.
export function nmToMeters(nm: number): number {
  return nm * 1852;
}

export type ParseAreasOptions = {
  /**
   * Input coordinate system for Areas.json. Most aviation datasets are WGS84.
   */
  inputCrs?: CoordinateSystem;
  /**
   * Output coordinate system used by the map overlays.
   * If you use Gaode tiles (GCJ02), set this to "GCJ02".
   */
  outputCrs?: CoordinateSystem;
};

function convertLatLng(p: LatLng, input: CoordinateSystem, output: CoordinateSystem): LatLng {
  if (input === output) return p;

  // gcoord uses [lng, lat]
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const gcoordDefault = require("gcoord").default as typeof import("gcoord").default;

  const inputType = gcoordDefault.CRSTypes[input];
  const outputType = gcoordDefault.CRSTypes[output];

  const [lng, lat] = gcoordDefault.transform([p.lng, p.lat], inputType, outputType) as [
    number,
    number,
  ];
  return { lat, lng };
}

export function parseAreasJson(
  raw: AirspaceAreasResponse,
  options: ParseAreasOptions = {}
): AirspaceArea[] {
  const inputCrs = options.inputCrs ?? "WGS84";
  const outputCrs = options.outputCrs ?? "WGS84";

  const areas = Array.isArray(raw?.areas) ? raw.areas : [];

  return areas
    .map((a, idx): AirspaceArea | null => {
      const id = `${a.name ?? "area"}-${idx}`;

      // Circle areas
      if (a.circle && a.circle.center) {
        const centerWgs = parseLatLng(a.circle.center);
        const radiusNum = Number(a.circle.radius);
        if (!centerWgs || !Number.isFinite(radiusNum)) return null;

        const center = convertLatLng(centerWgs, inputCrs, outputCrs);

        return {
          id,
          name: a.name,
          category: a.category,
          limits: a.limits,
          usertext: a.usertext,
          label: a.label
            ? {
                point: convertLatLng(
                  parseLatLng(a.label.point) ?? centerWgs,
                  inputCrs,
                  outputCrs
                ),
                text: a.label.text,
              }
            : null,
          geometry: {
            kind: "circle",
            center,
            radiusMeters: nmToMeters(radiusNum),
          },
        };
      }

      // Polygon areas
      const latlngsWgs = (Array.isArray(a.vertices) ? a.vertices : [])
        .map(parseLatLng)
        .filter((p): p is LatLng => Boolean(p));

      if (latlngsWgs.length < 3) return null;

      const latlngs = closeRingIfNeeded(latlngsWgs).map((p) =>
        convertLatLng(p, inputCrs, outputCrs)
      );

      return {
        id,
        name: a.name,
        category: a.category,
        limits: a.limits,
        usertext: a.usertext,
        label: a.label
          ? {
              point: convertLatLng(
                parseLatLng(a.label.point) ?? latlngsWgs[0],
                inputCrs,
                outputCrs
              ),
              text: a.label.text,
            }
          : null,
        geometry: {
          kind: "polygon",
          latlngs,
        },
      };
    })
    .filter((x): x is AirspaceArea => Boolean(x));
}

export function categoryColor(category: AirspaceCategory): {
  stroke: string;
  fill: string;
} {
  const c = (category ?? "").toLowerCase();
  if (c.includes("prohibit")) return { stroke: "#ff0000", fill: "#ef444466" }; // red
  if (c.includes("restricted")) return { stroke: "#eab308", fill: "#eab30866" }; // yellow
  if (c.includes("danger")) return { stroke: "#ff6316", fill: "#f9731666" }; // orange
  return { stroke: "#38bdf8", fill: "#38bdf833" }; // sky
}
