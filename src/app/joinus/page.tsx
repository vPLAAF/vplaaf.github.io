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
                <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm pointer-events-none" />
            </div>

            {/* 背景图右下角版权 */}
            <div className="pointer-events-auto fixed right-3 bottom-3 z-30 rounded-md bg-slate-900/40 px-2 py-1 text-[10px] text-slate-300 backdrop-blur-sm border border-slate-700/50">
                <a href="https://commons.wikimedia.org/wiki/File:PeacefulMission2018-20.jpg">Mil.ru</a>, <a href="https://creativecommons.org/licenses/by/4.0">CC BY 4.0</a>, via Wikimedia Commons
            </div>

            <div className="relative z-20">
                <MainHeader />

                <main className="mx-auto flex max-w-6xl flex-col px-4 pt-30 sm:px-6 lg:px-8">
                    <div className="w-full mx-auto px-4  text-slate-100">
                        <h1 className="text-4xl font-bold mb-8 text-center tracking-wide text-sky-300">
                            Join vPLAAF | 加入虚拟中国空军
                        </h1>

                        <div className="w-full space-y-8 rounded-2xl bg-slate-950/80 p-6 shadow-[0_0_80px_rgba(15,23,42,0.85)] ring-1 ring-slate-800/70">
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
                        </div>

                        <h2 className="text-3xl font-bold mb-5 mt-5 text-center tracking-wide text-sky-300">
                            Requirements | 招募要求
                        </h2>
                        <div className="w-full space-y-8 rounded-2xl bg-slate-950/80 p-6 shadow-[0_0_80px_rgba(15,23,42,0.85)] ring-1 ring-slate-800/70">

                                <ul className="ml-5 list-disc space-y-2 text-sm text-slate-300 sm:text-base">
                                    <li>
                                        <p>Must be at least 21 years old, having a valid VATSIM account and no record of serious violations</p>
                                        <p>年满 21 周岁, 拥有有效 VATSIM 账号，且无严重违规记录</p>
                                    </li>
                                    <li>
                                        <p>
                                            Be fluent in English and Mandarin for communications,
                                            capable of comprehending and accurately executing ATC instructions.
                                        </p>
                                        <p>
                                            具备流利的英语和普通话陆空对话能力，能够理解并准确执行 ATC 指令。
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Experienced in flight simulation on VATSIM and willing to undergo relevant specialised flight training and assessment.
                                        </p>
                                        <p>
                                            在VATSIM具备熟练的飞行模拟经验，并且愿意接受相应特殊飞行培训和考核
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Follow the objectives, principles and regulations of the vPLAAF,
                                            comply with the SOP and other internal regulations.
                                        </p>
                                        <p>
                                            认同 vPLAAF 的定位、宗旨与规则，愿意遵守本 SOP 及其他内部规定
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Clearly understand and accept: Joining the vPLAAF does not confer any actual military status or associated rights.
                                        </p>
                                        <p>
                                            明确理解并接受：加入 vPLAAF 不赋予任何现实军人身份或相关权利。
                                        </p>
                                    </li>
                                </ul>
                        </div>

                        <h2 className="text-3xl font-bold mb-5 mt-5 text-center tracking-wide text-sky-300">
                            How to Apply | 如何申请
                        </h2>
                        <div className="w-full space-y-8 rounded-2xl bg-slate-950/80 p-6 shadow-[0_0_80px_rgba(15,23,42,0.85)] ring-1 ring-slate-800/70">

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
                                <div className="pt-2 flex justify-center">
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
                                            Apply via Email | 邮件申请
                                        </Button>
                                    </a>
                                </div>
                        </div>
                    </div>

                </main>

                <MainFooter />
            </div>
        </div>
    );
}
