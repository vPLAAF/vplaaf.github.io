import PrivacyPageClient from './PrivacyPageClient';

import MainHeader from "@/components/layout/MainHeader";
import MainFooter from "@/components/layout/MainFooter";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">

        {/* 背景图片层 */}
        <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/imgs/doc_bg.jpg')" }}
        >
            <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm pointer-events-none" />
        </div>

        {/* 背景图右下角版权 */}
        <div className="pointer-events-auto fixed right-3 bottom-3 z-30 rounded-md bg-slate-900/40 px-2 py-1 text-[10px] text-slate-300 backdrop-blur-sm border border-slate-700/50">
            <a href="https://commons.wikimedia.org/wiki/File:Eight_Pakistan_Air_Force_JF-17s_escort_Air_China_Boeing_747-400.jpg">Asuspine</a> (<a href="http://www.gnu.org/licenses/old-licenses/fdl-1.2.html">GFDL 1.2</a> or <a href="http://www.gnu.org/licenses/old-licenses/fdl-1.2.html">GFDL 1.2</a>), via Wikimedia Commons
        </div>

        <div className="relative z-20">
            <MainHeader />
            <main className="flex-1 pt-20 -mb-15 w-full overflow-y-auto">
                <PrivacyPageClient />
            </main>
            <MainFooter />
        </div>

    </div>

  );
}