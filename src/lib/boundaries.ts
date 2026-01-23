export interface BoundaryFeature {
  id: string;
  name: string;
  englishName?: string;
  labelLat: number;
  labelLon: number;
  latlngs: Array<[number, number]>; // GeoJSON uses [lon, lat] but we convert to [lat, lon]
  center?: [number, number]; // Center point for label placement
}

// Mapping of FIR codes to Chinese names
const FIR_NAMES: Record<string, string> = {
  ZBPE: "北京飞行情报区",
  ZGZU: "广州飞行情报区",
  ZHWH: "武汉飞行情报区",
  ZJSA: "三亚飞行情报区",
  ZLHW: "兰州飞行情报区",
  ZPKM: "昆明飞行情报区",
  ZSHA: "上海飞行情报区",
  ZWUQ: "乌鲁木齐飞行情报区",
  ZYSH: "沈阳飞行情报区",
};

// English names for the same FIR codes
const FIR_ENGLISH_NAMES: Record<string, string> = {
  ZBPE: "Beijing FIR",
  ZGZU: "Guangzhou FIR",
  ZHWH: "Wuhan FIR",
  ZJSA: "Sanya FIR",
  ZLHW: "Lanzhou FIR",
  ZPKM: "Kunming FIR",
  ZSHA: "Shanghai FIR",
  ZWUQ: "Urumqi FIR",
  ZYSH: "Shenyang FIR",
};

const TARGET_FIRS = new Set(Object.keys(FIR_NAMES));

/**
 * Calculate the center point of a polygon
 */
function calculateCenter(latlngs: Array<[number, number]>): [number, number] {
  if (latlngs.length === 0) return [35, 105]; // Default to center of China

  let sumLat = 0;
  let sumLng = 0;

  for (const [lat, lng] of latlngs) {
    sumLat += lat;
    sumLng += lng;
  }

  return [sumLat / latlngs.length, sumLng / latlngs.length];
}

/**
 * Parse a GeoJSON FeatureCollection and extract target FIR boundaries
 */
export async function loadBoundaries(): Promise<BoundaryFeature[]> {
  try {
    const response = await fetch("/Boundaries.geojson");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const geojson = await response.json() as any;
    const features: BoundaryFeature[] = [];

    if (!geojson.features || !Array.isArray(geojson.features)) {
      console.warn("Invalid GeoJSON: no features array");
      return features;
    }

    for (const feature of geojson.features) {
      const props = feature.properties || {};
      const id = props.id || props.ICAO || "";

      // Only include target FIRs
      if (!TARGET_FIRS.has(id)) continue;

      // Extract label position (use label_lat/lon from properties, fallback to geometry center)
      let labelLat = parseFloat(props.label_lat || props.labelLat || "0");
      let labelLon = parseFloat(props.label_lon || props.labelLon || "0");

      // Convert GeoJSON coordinates (lon, lat) to (lat, lon)
      const latlngs = extractCoordinates(feature.geometry);
      if (latlngs.length === 0) continue;

      // If no explicit label position, use geometry center
      let center: [number, number] = [labelLat, labelLon];
      if (labelLat === 0 && labelLon === 0) {
        center = calculateCenter(latlngs);
        labelLat = center[0];
        labelLon = center[1];
      }

      features.push({
        id,
        name: FIR_NAMES[id as keyof typeof FIR_NAMES] || id,
        englishName: FIR_ENGLISH_NAMES[id as keyof typeof FIR_ENGLISH_NAMES] || undefined,
        labelLat,
        labelLon,
        latlngs,
        center,
      });
    }

    console.log(`Loaded ${features.length} FIR boundaries:`, features.map(f => f.id).join(", "));
    return features;
  } catch (error) {
    console.error("Failed to load boundaries:", error);
    return [];
  }
}

/**
 * Extract coordinates from GeoJSON geometry, handling Polygon and MultiPolygon
 */
function extractCoordinates(geometry: any): Array<[number, number]> {
  if (!geometry) return [];

  const coords: Array<[number, number]> = [];

  try {
    if (geometry.type === "Polygon") {
      // Polygon: coordinates is array of rings
      const rings = geometry.coordinates || [];
      if (rings.length > 0 && rings[0].length > 0) {
        for (const coord of rings[0]) {
          if (Array.isArray(coord) && coord.length >= 2) {
            // GeoJSON: [lon, lat], convert to [lat, lon]
            coords.push([coord[1], coord[0]]);
          }
        }
      }
    } else if (geometry.type === "MultiPolygon") {
      // MultiPolygon: coordinates is array of Polygons
      const polygons = geometry.coordinates || [];
      if (polygons.length > 0) {
        const rings = polygons[0] || [];
        if (rings.length > 0 && rings[0].length > 0) {
          for (const coord of rings[0]) {
            if (Array.isArray(coord) && coord.length >= 2) {
              coords.push([coord[1], coord[0]]);
            }
          }
        }
      }
    }
  } catch (error) {
    console.error("Error extracting coordinates:", error);
  }

  return coords;
}

/**
 * Get Chinese name for a FIR code
 */
export function getFIRName(id: string): string {
  return FIR_NAMES[id as keyof typeof FIR_NAMES] || id;
}

export function getFIREnglishName(id: string): string {
  return FIR_ENGLISH_NAMES[id as keyof typeof FIR_ENGLISH_NAMES] || id;
}
