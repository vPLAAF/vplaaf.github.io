// src/app/page.tsx

import MainHeader from "@/components/layout/MainHeader";
import MainFooter from "@/components/layout/MainFooter";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function HomePage() {
    return (
        <div className="relative min-h-screen bg-black text-slate-100 overflow-hidden">
            {/* 背景图片层 */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/imgs/bg.jpg')" }}
            >

                {/* 模糊遮罩 */}
                <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-xs pointer-events-none" />
            </div>

            {/* 背景图右版权 */}
            <div className=" pointer-events-auto fixed right-3 bottom-3 z-30 rounded-md bg-slate-900/40 px-2 py-1 text-[10px] text-slate-300 backdrop-blur-sm border border-slate-700/50">
                <a href="https://commons.wikimedia.org/wiki/File:Two_J-20s_at_CCAS2022_(20220827103238).jpg">Image: N509FZ</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons
            </div>

            <div className="relative z-20">

                <MainHeader />

                <main className="mx-auto flex min-h-[calc(100vh-150px)] max-w-6xl flex-col px-4 pb-20 pt-20 sm:px-6 lg:px-8">
                    <section className="flex flex-1 items-center">
                        <div className="max-w-2xl space-y-6 rounded-2xl bg-slate-950/40 p-6 shadow-[0_0_80px_rgba(15,23,42,0.85)] ring-1 ring-slate-800/70">
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">
                                VATSIM SPECIAL OPERATIONS AFFILIATE (APPLYING)
                            </p>

                            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                                vPLAAF · 虚拟中国空军
                            </h1>


                            <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
                                当前网站处于建造阶段，
                                成员系统、招募页面、标准作业程序等内容正在逐步完善中。
                                <br/>
                                The website is currently under construction
                            </p>

                            {/* 加入我们按钮 */}
                            {/* 按钮组：居中，预留以后加更多按钮 */}
                            <div className="mt-6 flex justify-center gap-4">
                                <Link href="/joinus">
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
                                            animate-pulse-glow
      "
                                    >
                                        Join us | 加入我们
                                    </Button>
                                </Link>
                            </div>


                        </div>
                    </section>

                    {/* Disclaimer 区块 */}
                    <section className="mt-10">
                        <div className="rounded-xl border border-red-500/40 bg-red-950/40 px-4 py-3 text-xs text-red-100 sm:text-sm">
                            <p className="font-semibold">Important Disclaimer / 重要免责声明 </p>
                            <p className="mt-2 text-[11px] leading-relaxed sm:text-[10px]">
                                vPLAAF is an entirely fictional virtual aviation organization created solely for flight simulation and online entertainment.
                                vPLAAF has no affiliation, subordination, cooperation, or authorization relationship with the real People’s Liberation Army Air Force or with any governmental, military, or commercial entity.
                                All missions, structures, and designations are fictional and do not represent any real-world military unit, organization, or stance.
                                All activities conducted by this website and this organization must not be used for any real-world aviation or military purposes, and do not constitute any form of real-world flight training or operational reference.
                            </p>
                            <p className="mt-2 text-[11px] leading-relaxed sm:text-[10px]">
                                vPLAAF虚拟中国空军为完全虚构的虚拟飞行组织，
                                仅以飞行模拟与网络娱乐为目的。vPLAAF 与现实中的中国人民解放军空军、
                                任何国家机关、军事单位或商业机构不存在任何形式的隶属、从属、合作或授权关系，
                                所有任务编制与设定均为虚构，不代表任何现实军事单位、组织或立场。
                                本网站及本组织的全部活动不得用于任何现实航空或军事行为，
                                不构成任何形式的现实飞行训练或作战参考。
                            </p>
                        </div>
                    </section>


                </main>

                <MainFooter />
            </div>
        </div>
    );
}
