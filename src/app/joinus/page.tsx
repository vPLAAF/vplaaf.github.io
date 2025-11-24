// src/app/joinus/page.tsx

import MainHeader from "@/components/layout/MainHeader";
import MainFooter from "@/components/layout/MainFooter";
import { Button } from "@/components/ui/button";

export default function JoinUsPage() {
    return (
        <div className="relative min-h-screen bg-black text-slate-100 overflow-hidden">
            {/* 背景图片层 */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/imgs/joinus.png')" }}
            >
                <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-xs pointer-events-none" />
            </div>

            {/* 背景图右下角版权 */}
            <div className="pointer-events-auto fixed right-3 bottom-3 z-30 rounded-md bg-slate-900/40 px-2 py-1 text-[10px] text-slate-300 backdrop-blur-sm border border-slate-700/50">
                <a href="https://commons.wikimedia.org/wiki/File:PeacefulMission2018-20.jpg">Mil.ru</a>, <a href="https://creativecommons.org/licenses/by/4.0">CC BY 4.0</a>, via Wikimedia Commons
            </div>

            <div className="relative z-20">
                <MainHeader />

                <main className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 pb-20 pt-30 sm:px-6 lg:px-8">
                    <section className="flex flex-1">
                        <div className="w-full space-y-8 rounded-2xl bg-slate-950/40 p-6 shadow-[0_0_80px_rgba(15,23,42,0.85)] ring-1 ring-slate-800/70">
                            {/* Title */}
                            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                                Join vPLAAF · 加入虚拟中国空军
                            </h1>

                            {/* Intro EN + ZH */}
                            <div className="space-y-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                                <p>
                                    vPLAAF is currently recruiting motivated members who are passionate
                                    about realistic, disciplined virtual military aviation on the VATSIM
                                    network. We are looking for pilots who are ready to grow within a
                                    structured, SOP-driven environment and contribute to a cooperative
                                    team culture.
                                </p>
                                <p>
                                    vPLAAF 目前正在招募成员。我们欢迎热爱高质量飞行模拟、愿意在
                                    VATSIM 网络上参与纪律化、程序化虚拟军事航空活动的飞友加入，
                                    与我们一起在规范的 SOP 体系下训练、执行任务，并共同建设一个
                                    稳定、互相支持的团队。
                                </p>
                            </div>

                            {/* Requirements */}
                            <div className="space-y-3 pt-4">
                                <h2 className="text-2xl font-semibold sm:text-3xl">
                                    Requirements · 招募要求
                                </h2>

                                <ul className="ml-5 list-disc space-y-2 text-sm text-slate-300 sm:text-base">
                                    <li>
                                        <p>Must be at least 18 years old.</p>
                                        <p>年满 18 周岁。</p>
                                    </li>
                                    <li>
                                        <p>
                                            Able to communicate fluently in both Chinese and English
                                            (text and voice).
                                        </p>
                                        <p>
                                            能够熟练使用中英文进行沟通（包括文字与语音）。
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Solid flight skills with demonstrable experience on VATSIM
                                            (proficient in basic IFR procedures and online flying).
                                        </p>
                                        <p>
                                            具有扎实的飞行技术，并拥有熟练的 VATSIM 连飞经验
                                            （熟悉基本仪表程序与联网上的飞行流程）。
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Willingness to follow vPLAAF SOPs, VATSIM CoC and VSOA
                                            policies, and to maintain professional conduct on all
                                            networks and platforms.
                                        </p>
                                        <p>
                                            承诺遵守 vPLAAF 标准作业程序（SOP）、VATSIM
                                            行为守则及相关 VSOA 政策，在所有平台上保持专业、
                                            自律的行为表现。
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Able to participate in regular training or missions.
                                        </p>
                                        <p>
                                            能够在时间允许的情况下参加一定频率的训练或任务，
                                            保持基本出勤率与可靠性。
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            A cooperative mindset and respect for teamwork, briefings,
                                            and debriefings (AAR).
                                        </p>
                                        <p>
                                            具备合作意识，尊重团队协作及简报 / 事后讲评（AAR）
                                            流程。
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            {/* How to apply */}
                            <div className="space-y-3 pt-6">
                                <h2 className="text-2xl font-semibold sm:text-3xl">
                                    How to Apply · 如何申请
                                </h2>

                                <div className="space-y-2 text-sm leading-relaxed text-slate-300 sm:text-base">
                                    <p>
                                        Please send an application email to{" "}
                                        <a
                                            href="mailto:apply@vplaaf.org?subject=vPLAAF%20Application"
                                            className="underline decoration-sky-400 underline-offset-2"
                                        >
                                            apply@vplaaf.org
                                        </a>{" "}
                                        with a brief self-introduction, your VATSIM ID, your main
                                        aircraft / simulator, and a summary of your online flying
                                        experience.
                                    </p>
                                    <p>
                                        请发送邮件至{" "}
                                        <a
                                            href="mailto:apply@vplaaf.org?subject=vPLAAF%20申请"
                                            className="underline decoration-sky-400 underline-offset-2"
                                        >
                                            apply@vplaaf.org
                                        </a>{" "}
                                        进行申请。邮件中请简要介绍：
                                        个人基本情况、VATSIM ID、主要使用的机型 / 模拟平台、
                                        以往的联飞经验，以及希望在 vPLAAF 收获 / 贡献什么。
                                    </p>
                                    <p className="text-xs text-slate-400 sm:text-sm">
                                        We will invite you to a short screening flight or voice
                                        interview on VATSIM / Discord to confirm basic procedures,
                                        communication ability, and compatibility with our style of
                                        operations.
                                    </p>
                                    <p className="text-xs text-slate-400 sm:text-sm">
                                        我们将会根据情况安排一次简短的 VATSIM 飞行考核或
                                        Discord 面试，以了解你的程序掌握情况、通信能力
                                        以及与组织风格的契合度。
                                    </p>
                                </div>

                                {/* Apply button */}
                                <div className="pt-2">
                                    <a href="mailto:apply@vplaaf.org?subject=vPLAAF%20Application">
                                        <Button
                                            className="
                                                rounded-lg
                                                bg-sky-500/90
                                                hover:bg-sky-400
                                                text-white
                                                px-6
                                                py-2
                                                text-sm
                                                font-medium
                                                transform
                                                transition
                                                duration-200
                                                ease-out
                                                hover:scale-105
                                                hover:-translate-y-[1px]
                                                hover:shadow-[0_0_30px_rgba(56,189,248,0.7)]
                                            "
                                        >
                                            Apply via Email · 邮件申请
                                        </Button>
                                    </a>
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
