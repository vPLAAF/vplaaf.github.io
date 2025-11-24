import MainHeader from "@/components/layout/MainHeader";
import MainFooter from "@/components/layout/MainFooter";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="relative min-h-screen bg-blue-400/60 text-slate-100 overflow-hidden">

            {/* 背景图片层 */}
            <div
                className="absolute inset-0 z-0 bg-right bg-top bg-center bg-cover"
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

                <main className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 pb-20 pt-30 sm:px-6 lg:px-8">
                    <section className="flex flex-1">
                        <div className="w-full space-y-8 rounded-2xl bg-slate-950/40 p-6 shadow-[0_0_80px_rgba(15,23,42,0.85)] ring-1 ring-slate-800/70">

                            {/* 标题 */}
                            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                                About vPLAAF · 关于虚拟中国空军
                            </h1>

                            {/* 概况介绍 */}
                            <div className="space-y-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                                <p>
                                    vPLAAF (virtual People&apos;s Liberation Army Air Force) is a fully fictional
                                    virtual military aviation organization operating on the VATSIM network.
                                    We provide a structured, SOP-driven environment for simulated military-style
                                    aviation activities while strictly complying with VATSIM and VSOA policies.
                                </p>
                                <p>
                                    vPLAAF（虚拟中国空军）是一个完全虚构的虚拟军事航空组织，
                                    在 VATSIM 网络上以标准作业程序（SOP）为基础开展飞行训练、
                                    战术巡逻与联合演练等活动，并严格遵守 VATSIM 与 VSOA 的相关规定。
                                </p>

                                <p className="text-xs text-slate-400 sm:text-sm">
                                    All missions, structures, and designations are fictional and do not represent
                                    any real-world military unit or stance.
                                </p>
                                <p className="text-xs text-slate-400 sm:text-sm">
                                    所有编制、任务、称谓均为虚构，不代表任何现实军事单位或立场。
                                </p>
                            </div>

                            {/* 组织架构 */}
                            <div className="pt-4 space-y-6">
                                <h2 className="text-2xl font-semibold sm:text-3xl">
                                    Organization &amp; Staff · 组织架构与职员
                                </h2>

                                {/* 司令部 */}
                                <div className="space-y-3">
                                    <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">
                                        Headquarters / 司令部
                                    </h3>

                                    <div className="space-y-4">

                                        {/* 司令员 */}
                                        <div className="rounded-lg border border-slate-700/70 bg-slate-900/40 p-4">
                                            <h4 className="font-semibold text-sky-300 text-sm uppercase tracking-widest">
                                                Commander / 司令员
                                            </h4>
                                            <p className="mt-1 font-medium">Lihan Bao</p>
                                            <p className="text-xs text-slate-400">
                                                <a className="underline" href="mailto:co@vplaaf.org">
                                                    co@vplaaf.org
                                                </a>
                                            </p>
                                            <p className="text-sm text-slate-400">
                                                Responsible for strategic direction, overall command, and
                                                approval of core SOPs.
                                            </p>
                                            <p className="text-sm text-slate-400">
                                                负责组织发展方向、整体指挥以及核心 SOP 的制定与审批。
                                            </p>
                                        </div>

                                        {/* 副司令员 */}
                                        <div className="rounded-lg border border-slate-700/70 bg-slate-900/40 p-4">
                                            <h4 className="font-semibold text-sky-300 text-sm uppercase tracking-widest">
                                                Deputy Commander / 副司令员
                                            </h4>
                                            <p className="mt-1 font-medium">Xinrui Wan</p>
                                            <p className="text-xs text-slate-400">
                                                <a className="underline" href="mailto:dco@vplaaf.org">
                                                    dco@vplaaf.org
                                                </a>
                                            </p>
                                            <p className="text-sm text-slate-400">
                                                Assists the Commander in daily management and coordination, website design and technical support.
                                            </p>
                                            <p className="text-sm text-slate-400">
                                                协助司令员开展日常管理、统筹部门协调与标准落实、负责网站维护与技术支持。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 参谋部 */}
                                <div className="space-y-3">
                                    <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">
                                        Staff Department / 参谋部
                                    </h3>

                                    <div className="space-y-4">
                                        {/* 参谋长 */}
                                        <div className="rounded-lg border border-slate-700/70 bg-slate-900/40 p-4">
                                            <h4 className="font-semibold text-sky-300 text-sm uppercase tracking-widest">
                                                Chief of Staff / 参谋长
                                            </h4>
                                            <p className="mt-1 font-medium">Jiashu Ye</p>
                                            <p className="text-xs text-slate-400">
                                                <a className="underline" href="mailto:cos@vplaaf.org">
                                                    cos@vplaaf.org
                                                </a>
                                            </p>
                                            <p className="text-sm text-slate-400">
                                                Oversees planning support, documentation, and cross-department coordination.
                                            </p>
                                            <p className="text-sm text-slate-400">
                                                负责任务策划支持、文书管理与跨部门协调。
                                            </p>
                                        </div>

                                    </div>
                                </div>

                                {/* 飞训作战部 */}
                                <div className="space-y-3">
                                    <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">
                                        Flight Training &amp; Operations / 飞训作战部
                                    </h3>

                                    <div className="rounded-lg border border-slate-700/70 bg-slate-900/40 p-4">
                                        <h4 className="font-semibold text-sky-300 text-sm uppercase tracking-widest">
                                            Department Head / 飞训作战部长
                                        </h4>
                                        <p className="mt-1 font-medium">Tony Lin</p>
                                        <p className="text-xs text-slate-400">
                                            <a className="underline" href="mailto:operation@vplaaf.org">
                                                operation@vplaaf.org
                                            </a>
                                        </p>
                                        <p className="text-sm text-slate-400">
                                            Responsible for flight training programs and operational standards.
                                        </p>
                                        <p className="text-sm text-slate-400">
                                            负责飞行训练体系、作战标准与任务规划。
                                        </p>
                                    </div>
                                </div>

                                {/* 军民协调部 */}
                                <div className="space-y-3">
                                    <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">
                                        Military-Civil Coordination / 军民协调部
                                    </h3>

                                    <div className="rounded-lg border border-slate-700/70 bg-slate-900/40 p-4">
                                        <h4 className="font-semibold text-sky-300 text-sm uppercase tracking-widest">
                                            Department Head / 军民协调部长
                                        </h4>
                                        <p className="mt-1 font-medium">Jingyuan Yin</p>
                                        <p className="text-xs text-slate-400">
                                            <a className="underline" href="mailto:coordination@vplaaf.org">
                                                coordination@vplaaf.org
                                            </a>
                                        </p>
                                        <p className="text-sm text-slate-400">
                                            Coordinates with civil aviation and ensures compatibility with VATSIM systems.
                                        </p>
                                        <p className="text-sm text-slate-400">
                                            负责与民航单位协调，确保组织活动与 VATSIM 环境兼容。
                                        </p>
                                    </div>
                                </div>

                                {/* 组织部 */}
                                <div className="space-y-3">
                                    <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">
                                        Organisation Department / 组织部
                                    </h3>

                                    <div className="rounded-lg border border-slate-700/70 bg-slate-900/40 p-4">
                                        <h4 className="font-semibold text-sky-300 text-sm uppercase tracking-widest">
                                            Department Head / 组织部部长
                                        </h4>
                                        <p className="mt-1 font-medium">Steven Zhang</p>
                                        <p className="text-xs text-slate-400">
                                            <a className="underline" href="mailto:public@vplaaf.org">
                                                public@vplaaf.org
                                            </a>
                                        </p>
                                        <p className="text-sm text-slate-400">
                                            Manages public-facing information, media materials, and communication channels.
                                        </p>
                                        <p className="text-sm text-slate-400">
                                            负责对外信息发布、宣传素材制作与公共沟通渠道维护。
                                        </p>
                                    </div>


                                    {/* 人事主管 */}
                                    <div className="rounded-lg border border-slate-700/70 bg-slate-900/40 p-4">
                                        <h4 className="font-semibold text-sky-300 text-sm uppercase tracking-widest">
                                            Personnel Officer / 人事主管
                                        </h4>
                                        <p className="mt-1 font-medium">Haoyu Wu</p>
                                        <p className="text-xs text-slate-400">
                                            <a className="underline" href="mailto:apply@vplaaf.org">
                                                apply@vplaaf.org
                                            </a>
                                        </p>
                                        <p className="text-sm text-slate-400">
                                            Manages member recruitment, records, and assignments.
                                        </p>
                                        <p className="text-sm text-slate-400">
                                            负责成员招募、档案管理与岗位分配。
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <MainFooter />
            </div>
        </div>
    );
}
