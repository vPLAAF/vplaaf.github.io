import MainHeader from "@/components/layout/MainHeader";
import MainFooter from "@/components/layout/MainFooter";
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "关于我们 | About us",
    description: "虚拟中国空军官网",
};
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

                <main className="mx-auto flex max-w-6xl flex-col px-4 pt-30 sm:px-6 lg:px-8">
                    <div className="w-full mx-auto px-4 text-slate-100">
                        <h1 className="text-4xl font-bold mb-8 text-center tracking-wide text-sky-300">
                            About us | 关于我们
                        </h1>

                        <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/80 p-4">
                            {/* 概况介绍 */}
                            <div className="space-y-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                                <p>
                                    vPLAAF is a fully fictional
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
                        </div>

                        <h2 className="text-3xl mt-5 font-bold mb-5 text-center tracking-wide text-sky-300">
                            Organization &amp; Staff | 组织架构与职员
                        </h2>

                        {/* 组织架构容器 */}
                        <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/80 p-4">
                            <div className="pt-4 space-y-6">

                                {/* 司令部 */}
                                <div className="space-y-3">
                                    <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">
                                        Headquarters | 司令部
                                    </h3>

                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                                        {/* 司令员 */}
                                        <div className="rounded-lg border border-slate-700/70 bg-slate-900/40 p-4">
                                            <h4 className="font-semibold text-sky-300 text-sm uppercase tracking-widest">
                                                Commander | 司令员
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
                                                Deputy Commander | 副司令员
                                            </h4>
                                            <p className="mt-1 font-medium">Xinrui Wan</p>
                                            <p className="text-xs text-slate-400">
                                                <a className="underline" href="mailto:dco@vplaaf.org">
                                                    dco@vplaaf.org
                                                </a>
                                            </p>
                                            <p className="text-sm text-slate-400">
                                                Assists the Commander in daily management and coordination.
                                            </p>
                                            <p className="text-sm text-slate-400">
                                                协助司令员开展日常管理、统筹部门协调与标准落实。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 参谋部 */}
                                <div className="space-y-3">
                                    <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">
                                        General Staff Department | 总参谋部
                                    </h3>

                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                        {/* 参谋长 */}
                                        <div className="rounded-lg border border-slate-700/70 bg-slate-900/40 p-4">
                                            <h4 className="font-semibold text-sky-300 text-sm uppercase tracking-widest">
                                                Chief of Staff | 参谋长
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

                                        {/* 军民协调员 */}
                                        <div className="rounded-lg border border-slate-700/70 bg-slate-900/40 p-4">
                                            <h4 className="font-semibold text-sky-300 text-sm uppercase tracking-widest">
                                                Coordination Officer | 军民协调员
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
                                </div>


                                {/* 飞训作战部 */}
                                <div className="space-y-3">
                                    <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">
                                        Air Operations and Training | 飞训作战部
                                    </h3>

                                    <div className="rounded-lg border border-slate-700/70 bg-slate-900/40 p-4">
                                        <h4 className="font-semibold text-sky-300 text-sm uppercase tracking-widest">
                                            Director of Operations | 飞训作战部部长
                                        </h4>
                                        <p className="mt-1 font-medium">Tony Lin</p>
                                        <p className="text-xs text-slate-400">
                                            <a className="underline" href="mailto:twinact4099@gmail.com">
                                                twinact4099@gmail.com
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


                                {/* 组织部 */}
                                <div className="space-y-3">
                                    <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">
                                        Organization Department | 组织部
                                    </h3>

                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                        <div className="rounded-lg border border-slate-700/70 bg-slate-900/40 p-4">
                                            <h4 className="font-semibold text-sky-300 text-sm uppercase tracking-widest">
                                                Director of Organization | 组织部部长
                                            </h4>
                                            <p className="mt-1 font-medium">Steven Zhang</p>
                                            <p className="text-xs text-slate-400">
                                                <a className="underline" href="">

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
                                                Personnel Officer | 人事主管
                                            </h4>
                                            <p className="mt-1 font-medium">Haoyu Wu</p>
                                            <p className="text-xs text-slate-400">
                                                <a className="underline" href="mailto:apply@vplaaf.org">
                                                    apply@vplaaf.org
                                                </a>
                                            </p>
                                            <p className="text-sm text-slate-400">
                                                Manages member recruitment and records.
                                            </p>
                                            <p className="text-sm text-slate-400">
                                                负责成员招募、档案管理。
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                {/* 后勤部 */}
                                <div className="space-y-3">
                                    <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">
                                        Tech Department | 技术部
                                    </h3>

                                    <div className="rounded-lg border border-slate-700/70 bg-slate-900/40 p-4">
                                        <h4 className="font-semibold text-sky-300 text-sm uppercase tracking-widest">
                                            Webmaster | 技术主管
                                        </h4>
                                        <p className="mt-1 font-medium">Xinrui Wan</p>
                                        <p className="text-xs text-slate-400">
                                            <a className="underline" href="mailto:web@vplaaf.org">
                                                web@vplaaf.org
                                            </a>
                                        </p>
                                        <p className="text-sm text-slate-400">
                                            In charge of website maintenance and technical support.
                                        </p>
                                        <p className="text-sm text-slate-400">
                                            负责网站维护和技术支持
                                        </p>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <h2 className="text-3xl mt-8 font-bold mb-5 text-center tracking-wide text-sky-300">
                            Partners | 合作伙伴
                        </h2>
                        <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/80 p-4">
                            <div className="pt-4">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 items-center">
                                    <div className="">
                                        <a href="https://www.vatprc.net/zh-cn/" target="_blank" rel="noreferrer" className="flex items-center justify-center p-3 bg-slate-900/0 rounded w-full flex-col text-center">
                                            <img src="/imgs/partners/vatprc.png" alt="VATPRC" className="h-16 sm:h-20 md:h-24 object-contain" />
                                            <span className="mt-2 text-xs sm:text-sm text-slate-300">VATSIM 中国分部<br/><span className="text-[11px] text-slate-400">VATPRC</span></span>
                                        </a>
                                    </div>

                                    <div className="flex flex-col items-center text-center p-2">
                                        <a href="https://airchinavirtual.org/" target="_blank" rel="noreferrer" className="flex items-center justify-center p-3 bg-slate-900/0 rounded w-full flex-col text-center">
                                            <img src="/imgs/partners/airchinavirtual.png" alt="Zhongtai Virtual" className="h-32 sm:h-20 md:h-24 object-contain" />
                                            <span className="mt-2 text-xs sm:text-sm text-slate-300">虚拟中国国际航空公司<br/> <span className="text-[11px] text-slate-400">Air China Virtual</span></span>
                                        </a>
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
