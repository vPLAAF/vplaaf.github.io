import MainHeader from "@/components/layout/MainHeader";
import MainFooter from "@/components/layout/MainFooter";

export default function FleetPage() {
    return (
        <div className="relative min-h-screen bg-blue-400/60 text-slate-100 overflow-hidden">
            {/* 背景图片层 */}
            <div
                className="absolute inset-0 z-0 bg-right bg-top bg-center bg-cover"
                style={{ backgroundImage: "url('/imgs/about.png')" }}
            >
                <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-xs pointer-events-none" />
            </div>

            <div className="pointer-events-auto fixed right-3 bottom-3 z-30 rounded-md bg-slate-900/40 px-2 py-1 text-[10px] text-slate-300 backdrop-blur-sm border border-slate-700/50">
                <a href="https://commons.wikimedia.org/wiki/File:Starting_aerial_formation_of_PRC70_Parade_(20191001112401).jpg">N509FZ</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons
            </div>

            <div className="relative z-20">
                <MainHeader />

                <main className="mx-auto flex w-3/4 flex-col px-4 pt-30 pb-10 sm:px-6 lg:px-10 xl:px-16">
                    <div className="w-full text-slate-100">
                        <h1 className="text-4xl font-bold mb-8 text-center tracking-wide text-sky-300">
                            Fleet &amp; Platforms | 机队与平台
                        </h1>

                        {/* 简要说明 */}
                        <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/80 p-4">
                            <div className="space-y-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                                <p>
                                    vPLAAF currently operates a compact but carefully selected virtual fleet.
                                    All aircraft are chosen to balance realism, availability of high-quality
                                    add-ons, and compatibility with VATSIM.
                                </p>
                                <p>
                                    虚拟中国空军目前运营一支精简但精心挑选的虚拟机队，
                                    重点兼顾模拟逼真度、高质量机模可获得性，以及与 VATSIM 的兼容性。
                                </p>
                                <p className="text-xs text-slate-400 sm:text-sm">
                                    The list below shows our recommended aircraft types, supported simulators,
                                    and typical roles within vPLAAF activities.
                                </p>
                                <p className="text-xs text-slate-400 sm:text-sm">
                                    下列表格展示了组织内部推荐的机型、支持的模拟平台及其在
                                    vPLAAF 活动中的典型任务分工。
                                </p>
                            </div>
                        </div>

                        {/* 支持的模拟平台 */}
                        {/*<h2 className="text-3xl mt-8 font-bold mb-4 text-center tracking-wide text-sky-300">
                            Supported Simulators · 支持的模拟平台
                        </h2>
                        <div className="mt-2 rounded-xl border border-slate-800 bg-slate-900/80 p-4">
                            <div className="flex flex-wrap gap-3 justify-center text-xs sm:text-sm">
                                <span className="rounded-full border border-sky-500/60 bg-slate-900/80 px-3 py-1">
                                    Microsoft Flight Simulator 2020 / 2024
                                </span>
                                <span className="rounded-full border border-sky-500/60 bg-slate-900/80 px-3 py-1">
                                    X-Plane 11 / 12
                                </span>
                                <span className="rounded-full border border-sky-500/60 bg-slate-900/80 px-3 py-1">
                                    Prepar3D v5+
                                </span>
                            </div>
                        </div>*/}

                        {/* ========== 歼击机部队 ========== */}
                        <h2 className="text-3xl mt-8 font-bold mb-4 text-center tracking-wide text-sky-300">
                            Fighter Wing | 歼击机部队
                        </h2>
                        <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/80 p-4">
                            {/* 一行两架：网格 + 侧边图片布局 */}
                            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

                                {/*  */}
                                <div className="flex flex-col sm:flex-row rounded-lg border border-slate-700/70 bg-slate-900/70 p-4 gap-4">
                                    <div className="sm:w-60 shrink-0">
                                        <img
                                            src="/imgs/fleet/su27.png"
                                            className="w-full h-full rounded-md border border-slate-700/60 bg-slate-950/80 object-cover aspect-[16/9]"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold tracking-wide text-sky-300">
                                            Su-27
                                        </h3>
                                        <p className="text-xs text-slate-400 mb-1">
                                            Air Superiority Fighter · 空优战斗机
                                        </p>
                                        <dl className="mt-1 space-y-1 text-sm sm:text-sm text-slate-300">
                                            <div className="flex gap-2">
                                                <dt className="w-20 shrink-0 text-slate-400">Platforms</dt>
                                                <dd>MSFS / X-Plane / P3D </dd>
                                            </div>
                                            <div className="flex gap-2">
                                                <dt className="w-20 shrink-0 text-slate-400">VATSIM</dt>
                                                <dd>Type Code: SU27</dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>

                                {/*  */}
                                <div className="flex flex-col sm:flex-row rounded-lg border border-slate-700/70 bg-slate-900/70 p-4 gap-4">
                                    <div className="sm:w-60 shrink-0">
                                        <img
                                            src="/imgs/fleet/su30.jpg"
                                            className="w-full h-full rounded-md border border-slate-700/60 bg-slate-950/80 object-cover aspect-[16/9]"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold tracking-wide text-sky-300">
                                            Su-30
                                        </h3>
                                        <p className="text-xs text-slate-400 mb-1">
                                            Multirole combat aircraft · 多用途战斗机
                                        </p>
                                        <dl className="mt-1 space-y-1 text-sm sm:text-sm text-slate-300">
                                            <div className="flex gap-2">
                                                <dt className="w-20 shrink-0 text-slate-400">Platforms</dt>
                                                <dd>X-Plane / P3D </dd>
                                            </div>
                                            <div className="flex gap-2">
                                                <dt className="w-20 shrink-0 text-slate-400">VATSIM</dt>
                                                <dd>Type Code: SU27</dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>

                                {/*  */}
                                <div className="flex flex-col sm:flex-row rounded-lg border border-slate-700/70 bg-slate-900/70 p-4 gap-4">
                                    <div className="sm:w-60 shrink-0">
                                        <img
                                            src="/imgs/fleet/j10.jpg"
                                            className="w-full h-full rounded-md border border-slate-700/60 bg-slate-950/80 object-cover aspect-[16/9]"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold tracking-wide text-sky-300">
                                            J-10
                                        </h3>
                                        <p className="text-xs text-slate-400 mb-1">
                                            Multirole combat aircraft · 多用途战斗机
                                        </p>
                                        <dl className="mt-1 space-y-1 text-sm sm:text-sm text-slate-300">
                                            <div className="flex gap-2">
                                                <dt className="w-20 shrink-0 text-slate-400">Platforms</dt>
                                                <dd>MSFS / X-Plane / P3D </dd>
                                            </div>
                                            <div className="flex gap-2">
                                                <dt className="w-20 shrink-0 text-slate-400">VATSIM</dt>
                                                <dd>Type Code: J10</dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>

                                {/*  */}
                                <div className="flex flex-col sm:flex-row rounded-lg border border-slate-700/70 bg-slate-900/70 p-4 gap-4">
                                    <div className="sm:w-60 shrink-0">
                                        <img
                                            src="/imgs/fleet/j11.png"
                                            className="w-full h-full rounded-md border border-slate-700/60 bg-slate-950/80 object-cover aspect-[16/9]"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold tracking-wide text-sky-300">
                                            J-11
                                        </h3>
                                        <p className="text-xs text-slate-400 mb-1">
                                            Air Superiority Fighter · 空优战斗机
                                        </p>
                                        <dl className="mt-1 space-y-1 text-sm sm:text-sm text-slate-300">
                                            <div className="flex gap-2">
                                                <dt className="w-20 shrink-0 text-slate-400">Platforms</dt>
                                                <dd>MSFS / X-Plane / P3D </dd>
                                            </div>
                                            <div className="flex gap-2">
                                                <dt className="w-20 shrink-0 text-slate-400">VATSIM</dt>
                                                <dd>Type Code: SU27</dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>



                            </div>
                        </div>

                        {/* ========== 特种机部队 ========== */}
                        <h2 className="text-3xl mt-8 font-bold mb-4 text-center tracking-wide text-sky-300">
                            Special Wing · 特种机部队
                        </h2>
                        <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/80 p-4">
                            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">


                                {/*  */}
                                <div className="flex flex-col sm:flex-row rounded-lg border border-slate-700/70 bg-slate-900/70 p-4 gap-4">
                                    <div className="sm:w-60 shrink-0">
                                        <img
                                            src="/imgs/fleet/tu154.png"
                                            className="w-full h-full rounded-md border border-slate-700/60 bg-slate-950/80 object-cover aspect-[16/9]"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold tracking-wide text-sky-300">
                                            Tu-154
                                        </h3>
                                        <p className="text-xs text-slate-400 mb-1">
                                            Electronic-warfare aircraft · 电子作战平台
                                        </p>
                                        <dl className="mt-1 space-y-1 text-sm sm:text-sm text-slate-300">
                                            <div className="flex gap-2">
                                                <dt className="w-20 shrink-0 text-slate-400">Platforms</dt>
                                                <dd>MSFS / X-Plane / P3D </dd>
                                            </div>
                                            <div className="flex gap-2">
                                                <dt className="w-20 shrink-0 text-slate-400">VATSIM</dt>
                                                <dd>Type Code: T154</dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>


                                {/*  */}
                                <div className="flex flex-col sm:flex-row rounded-lg border border-slate-700/70 bg-slate-900/70 p-4 gap-4">
                                    <div className="sm:w-60 shrink-0">
                                        <img
                                            src="/imgs/fleet/mi171.jpg"
                                            className="w-full h-full rounded-md border border-slate-700/60 bg-slate-950/80 object-cover aspect-[16/9]"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold tracking-wide text-sky-300">
                                            Mi-171
                                        </h3>
                                        <p className="text-xs text-slate-400 mb-1">
                                            Helicopter · 直升机
                                        </p>
                                        <dl className="mt-1 space-y-1 text-sm sm:text-sm text-slate-300">
                                            <div className="flex gap-2">
                                                <dt className="w-20 shrink-0 text-slate-400">Platforms</dt>
                                                <dd>MSFS / X-Plane / P3D </dd>
                                            </div>
                                            <div className="flex gap-2">
                                                <dt className="w-20 shrink-0 text-slate-400">VATSIM</dt>
                                                <dd>Type Code: MI8</dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>


                            </div>
                        </div>

                        {/* ========== 运输机部队 ========== */}
                        <h2 className="text-3xl mt-8 font-bold mb-4 text-center tracking-wide text-sky-300">
                            Transport Wing · 运输机部队
                        </h2>
                        <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/80 p-4">
                            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">



                                {/*  */}
                                <div className="flex flex-col sm:flex-row rounded-lg border border-slate-700/70 bg-slate-900/70 p-4 gap-4">
                                    <div className="sm:w-60 shrink-0">
                                        <img
                                            src="/imgs/fleet/a319.png"
                                            className="w-full h-full rounded-md border border-slate-700/60 bg-slate-950/80 object-cover aspect-[16/9]"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold tracking-wide text-sky-300">
                                            ACJ-319
                                        </h3>
                                        <p className="text-xs text-slate-400 mb-1">
                                            Business Jet · 公务机
                                        </p>
                                        <dl className="mt-1 space-y-1 text-sm sm:text-sm text-slate-300">
                                            <div className="flex gap-2">
                                                <dt className="w-20 shrink-0 text-slate-400">Platforms</dt>
                                                <dd>MSFS / X-Plane / P3D </dd>
                                            </div>
                                            <div className="flex gap-2">
                                                <dt className="w-20 shrink-0 text-slate-400">VATSIM</dt>
                                                <dd>Type Code: A319</dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>

                                {/*  */}
                                <div className="flex flex-col sm:flex-row rounded-lg border border-slate-700/70 bg-slate-900/70 p-4 gap-4">
                                    <div className="sm:w-60 shrink-0">
                                        <img
                                            src="/imgs/fleet/b737.png"
                                            className="w-full h-full rounded-md border border-slate-700/60 bg-slate-950/80 object-cover aspect-[16/9]"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold tracking-wide text-sky-300">
                                            B737-300/BBJ1/BBJ2
                                        </h3>
                                        <p className="text-xs text-slate-400 mb-1">
                                            Business Jet · 公务机 <br />
                                            Transport Aircraft · 运输机
                                        </p>
                                        <dl className="mt-1 space-y-1 text-sm sm:text-sm text-slate-300">
                                            <div className="flex gap-2">
                                                <dt className="w-20 shrink-0 text-slate-400">Platforms</dt>
                                                <dd>MSFS / X-Plane / P3D </dd>
                                            </div>
                                            <div className="flex gap-2">
                                                <dt className="w-20 shrink-0 text-slate-400">VATSIM</dt>
                                                <dd>Type Code: B733 / B737 / B738</dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </main>

                <MainFooter />
            </div>
        </div>
    );
}
