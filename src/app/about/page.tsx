import MainHeader from "@/components/layout/MainHeader";
import MainFooter from "@/components/layout/MainFooter";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="relative min-h-screen bg-black text-slate-100 overflow-hidden">

            {/* 背景图片层 */}
            <div
                className="absolute inset-0 z-0 bg-center"
                style={{ backgroundImage: "url('/imgs/about.png')" }}
            >
                <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-xs pointer-events-none" />
            </div>

            {/* 背景图右下角版权 */}
            <div className="pointer-events-auto fixed right-3 bottom-3 z-30 rounded-md bg-slate-900/40 px-2 py-1 text-[10px] text-slate-300 backdrop-blur-sm border border-slate-700/50">
                <a href="https://commons.wikimedia.org/wiki/File:Starting_aerial_formation_of_PRC70_Parade_(20191001112401).jpg">N509FZ</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons
            </div>

            <div className="relative z-20">

                <MainHeader />

                <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-20 pt-30 sm:px-6 lg:px-8">

                    <section className="flex flex-1">
                        <div className="w-full space-y-8 rounded-2xl bg-slate-950/40 p-6 shadow-[0_0_80px_rgba(15,23,42,0.85)] ring-1 ring-slate-800/70">

                            {/* Title */}
                            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                                About vPLAAF · 关于我们
                            </h1>

                            {/* Overview */}
                            <div className="space-y-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                                <p>
                                    这里写简介...
                                </p>
                            </div>

                            {/* Staff */}
                            <div className="pt-6">
                                <h2 className="text-2xl font-semibold sm:text-3xl">Staff Team · 职员团队</h2>

                                <div className="mt-4 space-y-4 text-slate-300 text-sm sm:text-base">

                                    <div className="rounded-lg border border-slate-700/70 bg-slate-900/40 p-4">
                                        <h3 className="font-semibold text-sky-300 text-sm uppercase tracking-widest">
                                            Commanding Officer (CO) / 指挥官
                                        </h3>
                                        <p className="mt-1 font-medium">Lihan Bao / 1435267</p>
                                        <p className="text-sm text-slate-400">Responsible for overall organization management, SOP development, and strategic planning.</p>
                                        <p className="text-sm text-slate-400">负责组织总体管理、SOP 制定、整体运营规划。</p>
                                    </div>

                                    <div className="rounded-lg border border-slate-700/70 bg-slate-900/40 p-4">
                                        <h3 className="font-semibold text-sky-300 text-sm uppercase tracking-widest">
                                            Deputy CO (DCO) / 副指挥官
                                        </h3>
                                        <p className="mt-1 font-medium">Xinrui Wan / 1897662</p>
                                        <p className="text-sm text-slate-400">Assists in organizational management and policy maintenance.</p>
                                        <p className="text-sm text-slate-400">协助管理组织与细则维护。</p>
                                    </div>

                                    <div className="rounded-lg border border-slate-700/70 bg-slate-900/40 p-4">
                                        <h3 className="font-semibold text-sky-300 text-sm uppercase tracking-widest">
                                            Director of Administrative Affairs / 行政督导
                                        </h3>
                                        <p className="mt-1 font-medium">Hongye Rudi Zhang / 1326158</p>
                                        <p className="text-sm text-slate-400">Responsible for coordination with civil aviation units, administrative affairs, and external relations.</p>
                                        <p className="text-sm text-slate-400">负责与民航空域的协调、组织行政事务、对外关系管理。</p>
                                    </div>

                                    <div className="rounded-lg border border-slate-700/70 bg-slate-900/40 p-4">
                                        <h3 className="font-semibold text-sky-300 text-sm uppercase tracking-widest">
                                            Training Officer / 训练主管
                                        </h3>
                                        <p className="mt-1 font-medium">[待任命]</p>
                                        <p className="text-sm text-slate-400">Responsible for member training, skill evaluation, and flight standards development.</p>
                                        <p className="text-sm text-slate-400">负责成员训练、任务技能评估、飞行标准制定。</p>
                                    </div>

                                    <div className="rounded-lg border border-slate-700/70 bg-slate-900/40 p-4">
                                        <h3 className="font-semibold text-sky-300 text-sm uppercase tracking-widest">
                                            Operations Officer / 行动主管
                                        </h3>
                                        <p className="mt-1 font-medium">[待任命]</p>
                                        <p className="text-sm text-slate-400">Responsible for mission planning, operational organization, and after-action review (AAR).</p>
                                        <p className="text-sm text-slate-400">负责任务策划、行动编成、行动后评（AAR）。</p>
                                    </div>

                                    <div className="rounded-lg border border-slate-700/70 bg-slate-900/40 p-4">
                                        <h3 className="font-semibold text-sky-300 text-sm uppercase tracking-widest">
                                            Technical & Website / 技术与网站
                                        </h3>
                                        <p className="mt-1 font-medium">Xinrui Wan / 1897662</p>
                                        <p className="text-sm text-slate-400">Responsible for website development, member system, and technical support.</p>
                                        <p className="text-sm text-slate-400">网站开发、成员系统等技术支持。</p>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </section>

                    <MainFooter />

                </main>
            </div>
        </div>
    );
}
