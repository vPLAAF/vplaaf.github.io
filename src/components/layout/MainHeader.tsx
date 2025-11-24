"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";

export default function MainHeader() {
    const [mobileAboutOpen, setMobileAboutOpen] = useState(false); // 移动端

    return (
        <header className="fixed inset-x-0 top-0 z-30 border-b border-slate-800/70 bg-slate-950/70 backdrop-blur-md">
            <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* 左侧 Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-60 w-80 items-center text-[9px] justify-center">
                        <Image
                            src="https://www.vplaaf.org/docs/logo-pack/logo_standard_500px.png"
                            alt="vPLAAF logo"
                            width={2000}
                            height={200}
                            className="object-contain"
                            priority
                        />
                    </div>
                    {/*<div className="leading-tight">
                        <div className="text-[14px] font-semibold tracking-[0.25em] text-sky-300">
                            vPLAAF
                        </div>
                        <div className="text-[12px] text-slate-400">虚拟中国空军</div>
                    </div>*/}
                </Link>

                {/* 桌面导航 */}
                <nav className="hidden h-full items-stretch gap-1 text-sm font-medium text-slate-200 md:flex">

                    <Link href="/">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-full rounded-md px-4 text-sm text-slate-200 hover:bg-slate-800/80 hover:text-sky-300"
                        >
                            Home | 主页
                        </Button>
                    </Link>

                    <Link href="/members">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-full rounded-md px-4 text-sm text-slate-200 hover:bg-slate-800/80 hover:text-sky-300"
                        >
                            Members | 成员
                        </Button>
                    </Link>

                    <Link href="/joinus">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-full rounded-md px-4 text-sm text-slate-200 hover:bg-slate-800/80 hover:text-sky-300"
                        >
                            Join us | 加入
                        </Button>
                    </Link>

                    {/* shadcn DropdownMenu */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="h-full rounded-md px-4 text-sm text-slate-200 hover:bg-slate-800/80 hover:text-sky-300 inline-flex items-center gap-1"
                            >
                                Rules | 规则
                                <span className="text-[10px]">▾</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            align="end"
                            className="min-w-[180px] border-slate-800 bg-slate-950 text-sm text-slate-200"
                        >
                            <DropdownMenuItem className="text-slate-200 hover:bg-slate-800/80">
                                SOPs | 标准程序
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-slate-200 hover:bg-slate-800/80">
                                LOAs | 协议
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className="bg-slate-800" />

                            <Link href = "/privacy">
                                <DropdownMenuItem className="text-slate-300 hover:bg-slate-800/80">
                                    Privacy Policy | 隐私政策
                                </DropdownMenuItem>
                            </Link>

                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Link href="/about">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-full rounded-md px-4 text-sm text-slate-200 hover:bg-slate-800/80 hover:text-sky-300"
                        >
                            About us | 关于我们
                        </Button>
                    </Link>
                </nav>

                {/* 移动端 */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-9 w-9 border-slate-700 bg-slate-900/80 text-slate-200 hover:bg-slate-800 md:hidden"
                        >
                            <Menu className="h-4 w-4" />
                        </Button>
                    </SheetTrigger>

                    <SheetContent
                        side="right"
                        className="w-64 border-l border-slate-800 bg-slate-950 text-slate-200"
                    >
                        <SheetHeader className="mb-4">
                            <SheetTitle className="text-sm font-semibold text-slate-100">
                                vPLAAF
                            </SheetTitle>
                        </SheetHeader>

                        <div className="space-y-2 text-xs">
                            <Button
                                variant="ghost"
                                className="flex w-full justify-start rounded-md px-3 py-2 text-slate-200 hover:bg-slate-800/80"
                            >
                                Home | 主页
                            </Button>
                            <Button
                                variant="ghost"
                                className="flex w-full justify-start rounded-md px-3 py-2 text-slate-200 hover:bg-slate-800/80"
                            >
                                Members | 成员
                            </Button>
                            <Button
                                variant="ghost"
                                className="flex w-full justify-start rounded-md px-3 py-2 text-slate-200 hover:bg-slate-800/80"
                            >
                                Join us | 加入
                            </Button>

                            {/* 移动端里的“关于”组，点击展开子项 */}
                            <div className="pt-2">
                                <button
                                    type="button"
                                    onClick={() => setMobileAboutOpen((v) => !v)}
                                    className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-slate-200 hover:bg-slate-800/80"
                                >
                                    <span className="text-xs">Rules | 规则</span>
                                    <span className="text-[10px]">
                    {mobileAboutOpen ? "▴" : "▾"}
                  </span>
                                </button>

                                {mobileAboutOpen && (
                                    <div className="mt-1 space-y-1 pl-3">
                                        <Button
                                            variant="ghost"
                                            className="flex w-full justify-start rounded-md px-3 py-1.5 text-xs text-slate-200 hover:bg-slate-800/80"
                                        >
                                            Staffs | 职员
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            className="flex w-full justify-start rounded-md px-3 py-1.5 text-xs text-slate-200 hover:bg-slate-800/80"
                                        >
                                            SOPs | 标准程序
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            className="flex w-full justify-start rounded-md px-3 py-1.5 text-xs text-slate-200 hover:bg-slate-800/80"
                                        >
                                            LOAs | 协议
                                        </Button>

                                        <Link href = "/privacy">
                                            <Button
                                                variant="ghost"
                                                className="flex w-full justify-start rounded-md px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800/80"
                                            >
                                                Privacy Policy | 隐私政策
                                            </Button>
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <Button
                                variant="ghost"
                                className="flex w-full justify-start rounded-md px-3 py-2 text-slate-200 hover:bg-slate-800/80"
                            >
                                About us | 关于我们
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
