import MainHeader from "@/components/layout/MainHeader";
import MainFooter from "@/components/layout/MainFooter";
import AirspaceMapClientWrapper from "./AirspaceMapClientWrapper";

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "空域限制区 | Airspace Areas",
    description: "虚拟中国空军官网",
};
export default function AirspacePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <MainHeader />

      <main className="mx-auto px-4 pb-10 pt-24 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4 text-center tracking-wide text-sky-300">
            VATPRC Airspace Areas | VATPRC空域限制区
        </h1>
        <p className="mt-2 text-sm text-center   text-slate-300">
            本页面仅供VATSIM模拟飞行使用，不代表任何现实空域信息，请勿用于现实飞行参考。地图上的边界仅代表模拟飞行中的飞行情报区边界，与任何现实世界中的飞行情报区边界或政治地理分界无关，也不代表任何国家、地区或国际组织对于政治地理分界的观点。由于技术限制，地图上显示的边界可能过时或者被简化。飞行时请遵守本地管制员指令。
            <br/>
            This page is for VATSIM virtual flying purposes only and does not represent any real-world airspace information. Do not use it for real-world flight reference. The boundaries shown on the map represent only the boundaries of FIRs within the flight simulation environment. They bear no relation to any real-world FIR boundaries or political-geographical boundaries, nor do they represent the views of any nation, region, or international organisation regarding political-geographical boundaries. Due to technical limitations, the boundaries displayed on the map may be outdated or simplified. When flying, please comply with the instructions of local ATCs.
        </p>

        <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40">
          <AirspaceMapClientWrapper />
        </div>
      </main>

      <MainFooter />
    </div>
  );
}
