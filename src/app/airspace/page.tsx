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
            本页面仅供VATSIM模拟飞行使用，不代表任何现实空域信息，请勿用于现实飞行参考。
            <br/>
            This page is for VATSIM virtual flying purposes only and does not represent any real-world airspace information. Do not use it for real-world flight reference.
        </p>

        <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40">
          <AirspaceMapClientWrapper />
        </div>
      </main>

      <MainFooter />
    </div>
  );
}
