"use client";

import "leaflet/dist/leaflet.css";
import "./airspace-map.css";

import { useEffect, useMemo, useRef, useState } from "react";
import { Circle, MapContainer, Polygon, TileLayer, Tooltip } from "react-leaflet";
import type {
  LatLngBoundsExpression,
  LatLngExpression,
  Map as LeafletMap,
} from "leaflet";

import {
  categoryColor,
  parseAreasJson,
  type AirspaceArea,
  type AirspaceAreasResponse,
} from "@/lib/airspace";
import { loadBoundaries, type BoundaryFeature } from "@/lib/boundaries";

const DATA_URL = "https://airspace.vplaaf.org/Areas.json";

const CHINA_BOUNDS: LatLngBoundsExpression = [
  [0, 72],
  [54, 136],
];

export default function AirspaceMapClient() {
  const [areas, setAreas] = useState<AirspaceArea[]>([]);
  const [boundaries, setBoundaries] = useState<BoundaryFeature[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [showProhibit, setShowProhibit] = useState(true);
  const [showRestricted, setShowRestricted] = useState(true);
  const [showDanger, setShowDanger] = useState(true);

  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        // Load airspace areas
        const res = await fetch(DATA_URL, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = (await res.json()) as AirspaceAreasResponse;
        const parsed = parseAreasJson(json, {
          inputCrs: "WGS84",
          outputCrs: "GCJ02", // Gaode use GCJ02
        });
        if (!cancelled) {
          setAreas(parsed);
          setLastUpdated(new Date());
        }

        // Load FIR boundaries
        const boundaryData = await loadBoundaries();
        if (!cancelled) {
          setBoundaries(boundaryData);
        }
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : "Failed to load data");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    const t = setInterval(load, 120_000); // refresh every 1 minute, sync with 张嘚儿

    return () => {
      cancelled = true;
      clearInterval(t);
    };
  }, []);

  const stats = useMemo(() => {
    const prohibit = areas.filter((a) =>
      String(a.category).toLowerCase().includes("prohibit")
    ).length;
    const restricted = areas.filter((a) =>
      String(a.category).toLowerCase().includes("restricted")
    ).length;
    const danger = areas.filter((a) => String(a.category).toLowerCase().includes("danger")).length;
    return { total: areas.length, prohibit, restricted, danger };
  }, [areas]);

  const dataVersion = useMemo(() => {
    // Used to force-remount Leaflet vector layers when data refreshes.
    // Some react-leaflet layers don't reliably apply deep prop updates.
    return lastUpdated ? lastUpdated.getTime() : 0;
  }, [lastUpdated]);

  const visibleAreas = useMemo(() => {
    return areas.filter((a) => {
      const cat = String(a.category).toLowerCase();
      if (cat.includes("prohibit")) return showProhibit;
      if (cat.includes("restricted")) return showRestricted;
      if (cat.includes("danger")) return showDanger;
      return true;
    });
  }, [areas, showProhibit, showRestricted, showDanger]);

  const panToArea = (area: AirspaceArea) => {
    const map = mapRef.current;
    if (!map) return;

    if (area.geometry.kind === "circle") {
      map.setView(
        [area.geometry.center.lat, area.geometry.center.lng],
        Math.max(map.getZoom(), 7),
        { animate: true }
      );
      return;
    }

    const bounds: LatLngBoundsExpression = area.geometry.latlngs.map((p) => [p.lat, p.lng]);
    map.fitBounds(bounds, { padding: [30, 30], animate: true });
  };

  return (
    <div className="airspace-map">
      {/* Top bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 bg-slate-950/40 px-3 py-2 text-xs text-slate-300">
        <div>
          {loading ? "Loading…" : error ? `Error: ${error}` : "Live"}
          <span className="mx-2 text-slate-600">|</span>
          Areas: {stats.total}
          <span className="mx-2 text-slate-600">|</span>
          Showing: {visibleAreas.length}
        </div>

        <div className="flex flex-wrap items-center gap-3 text-[11px]">
          <label className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              checked={showProhibit}
              onChange={(e) => setShowProhibit(e.target.checked)}
            />
            <span className="inline-flex items-center gap-1">
              <span className="h-2 w-2 rounded-sm bg-red-500" /> Prohibit ({stats.prohibit})
            </span>
          </label>

          <label className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              checked={showRestricted}
              onChange={(e) => setShowRestricted(e.target.checked)}
            />
            <span className="inline-flex items-center gap-1">
              <span className="h-2 w-2 rounded-sm bg-yellow-500" /> Restricted ({stats.restricted})
            </span>
          </label>

          <label className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              checked={showDanger}
              onChange={(e) => setShowDanger(e.target.checked)}
            />
            <span className="inline-flex items-center gap-1">
              <span className="h-2 w-2 rounded-sm bg-orange-500" /> Danger ({stats.danger})
            </span>
          </label>

          <div className="text-slate-500">
            {lastUpdated ? `Updated: ${lastUpdated.toLocaleString()}` : null}
          </div>
        </div>
      </div>

      {/* Page-level layout: map left, panel right */}
      <div className="grid w-full grid-cols-1 gap-3 p-3 lg:grid-cols-[minmax(0,1fr)_380px]">
        {/* Map card */}
        <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950/20">
          <div className="h-[70vh] w-full">
            <MapContainer
              bounds={CHINA_BOUNDS}
              maxBounds={CHINA_BOUNDS}
              maxBoundsViscosity={1.0}
              minZoom={5}
              maxZoom={10}
              scrollWheelZoom
              style={{ height: "100%", width: "100%" }}
              ref={(instance) => {
                mapRef.current = (instance as unknown as LeafletMap) ?? null;
              }}
            >
              <TileLayer
                attribution="&copy; 高德地图"
                url="https://webrd04.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}"
                subdomains="1234"
                maxZoom={18}
              />

              {/* FIR boundaries (bottom layer, non-interactive) */}
              {boundaries.map((boundary) => (
                <Polygon
                  key={`fir-${boundary.id}`}
                  positions={boundary.latlngs as unknown as LatLngExpression[]}
                  pathOptions={{
                    color: "rgba(100, 180, 180, 0.8)",
                    fillColor: "rgba(100, 150, 200, 0.08)",
                    fillOpacity: 0.08,
                    weight: 2,
                    opacity: 0.6,
                    dashArray: "5, 5",
                    lineCap: "round",
                    lineJoin: "round",
                  }}
                  eventHandlers={{
                    click: (e) => e.originalEvent.stopPropagation(),
                    mousedown: (e) => e.originalEvent.stopPropagation(),
                  }}
                  interactive={false}
                >
                  <Tooltip
                    permanent
                    direction="center"
                    offset={[0, 0]}
                    className="fir-label"
                    opacity={1}
                  >
                    <div className="fir-label-text">
                      <div className="fir-label-icao">{boundary.id}</div>
                      <div className="fir-label-zh">{boundary.name}</div>
                      <div className="fir-label-en">{boundary.englishName ?? ""}</div>
                    </div>
                  </Tooltip>
                </Polygon>
              ))}

              {visibleAreas.map((a) => {
                const color = categoryColor(a.category);
                const isProhibit = String(a.category).toLowerCase().includes("prohibit");

                const common = {
                  pathOptions: {
                    // Always high contrast
                    color: color.stroke,
                    fillColor: color.fill,
                    fillOpacity: isProhibit ? 0.6 : 0.45,
                    weight: isProhibit ? 3.5 : 3,
                    opacity: 1,
                  },
                  eventHandlers: {
                    click: () => panToArea(a),
                  },
                };

                const tipText = [
                  `Name: ${a.name}`,
                  `Category: ${a.category}`,
                  `Limits: ${a.limits.lower} - ${a.limits.upper}`,
                  `Type: ${a.geometry.kind === "circle" ? "Circle" : "Polygon"}`,
                  a.usertext ? `Notes: ${a.usertext}` : null,
                ]
                  .filter(Boolean)
                  .join("\n");

                if (a.geometry.kind === "polygon") {
                  return (
                    <Polygon
                      key={`${a.id}-${dataVersion}`}
                      positions={a.geometry.latlngs as unknown as LatLngExpression[]}
                      {...common}
                    >
                      <Tooltip sticky direction="top" opacity={1}>
                        <span style={{ whiteSpace: "pre-line" }}>{tipText}</span>
                      </Tooltip>
                    </Polygon>
                  );
                }

                return (
                  <Circle
                    key={`${a.id}-${dataVersion}`}
                    center={a.geometry.center as unknown as LatLngExpression}
                    radius={a.geometry.radiusMeters}
                    {...common}
                  >
                    <Tooltip sticky direction="top" opacity={1}>
                      <span style={{ whiteSpace: "pre-line" }}>{tipText}</span>
                    </Tooltip>
                  </Circle>
                );
              })}
            </MapContainer>
          </div>
        </div>

        {/* Side panel */}
        <aside className="flex h-[70vh] flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-950/30">
          <div className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/60 px-3 py-2 text-xs text-slate-300 backdrop-blur">
            <div className="font-semibold text-sky-300">Airspace Areas</div>
          </div>

          <div className="flex-1 overflow-auto p-2 pr-1">
            <div className="space-y-2">
              {visibleAreas.map((a) => {
                const catLower = String(a.category).toLowerCase();
                const badgeClass = catLower.includes("prohibit")
                  ? "bg-red-500/20 text-red-200 border-red-500/40"
                  : catLower.includes("restricted")
                    ? "bg-yellow-500/20 text-yellow-200 border-yellow-500/40"
                    : catLower.includes("danger")
                      ? "bg-orange-500/20 text-orange-200 border-orange-500/40"
                      : "bg-sky-500/20 text-sky-200 border-sky-500/40";

                return (
                  <button
                    key={a.id}
                    type="button"
                    onClick={() => panToArea(a)}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900/40 p-2 text-left transition hover:bg-slate-900/60"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <div className="truncate text-sm font-semibold text-slate-100">{a.name}</div>
                        <div className="mt-0.5 text-[11px] text-slate-400">
                          {a.limits.lower} • {a.limits.upper}
                        </div>
                      </div>
                      <span
                        className={[
                          "shrink-0 rounded-md border px-2 py-0.5 text-[10px]",
                          badgeClass,
                        ].join(" ")}
                      >
                        {a.category}
                      </span>
                    </div>

                    {a.usertext ? (
                      <div className="mt-2 line-clamp-3 text-[11px] text-slate-300">{a.usertext}</div>
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>
      </div>

      {error ? (
        <div className="mx-3 mb-3 rounded-md border border-amber-500/60 bg-amber-900/30 px-3 py-2 text-xs text-amber-100">
          Data fetch failed. The map may be empty. 请检查 CORS。
        </div>
      ) : null}
    </div>
  );
}
