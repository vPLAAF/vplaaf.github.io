import { parseAreasJson, parseLatLng, type AirspaceAreasResponse } from "@/lib/airspace";

describe("airspace parsing", () => {
  test("parseLatLng parses 'lat,lng'", () => {
    expect(parseLatLng("31.2,121.4")).toEqual({ lat: 31.2, lng: 121.4 });
  });

  test("parseAreasJson parses polygon and circle", () => {
    const raw: AirspaceAreasResponse = {
      areas: [
        {
          area_type: "T",
          name: "A",
          limits: { lower: "0", upper: "10" },
          category: "Restricted",
          usertext: null,
          label: null,
          vertices: ["31,121", "31,122", "32,122", "31,121"],
        },
        {
          area_type: "T",
          name: "B",
          limits: { lower: "0", upper: "999999" },
          category: "Prohibit",
          usertext: null,
          label: { point: "30,120", text: "B" },
          vertices: [],
          circle: { center: "30,120", radius: "2.7" },
        },
      ],
    };

    const parsed = parseAreasJson(raw);
    expect(parsed).toHaveLength(2);
    expect(parsed[0].geometry.kind).toBe("polygon");
    expect(parsed[1].geometry.kind).toBe("circle");
  });
});
