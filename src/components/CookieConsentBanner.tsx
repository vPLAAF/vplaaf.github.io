"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Cookies from "js-cookie";

const COOKIE_NAME = "vplaaf_policy_consent";

type ConsentValue = "accepted" | "declined";

function getConsent(): ConsentValue | undefined {
    const v = Cookies.get(COOKIE_NAME);
    if (v === "accepted" || v === "declined") return v;
    return undefined;
}

export default function CookieConsentBanner() {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        // Only show if user hasn't made a choice yet.
        setOpen(getConsent() === undefined);
    }, []);

    const setConsent = React.useCallback((value: ConsentValue) => {
        Cookies.set(COOKIE_NAME, value, { expires: 30, sameSite: "Lax" });
        setOpen(false);
    }, []);

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Portal>
                <Dialog.Overlay
                    className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm"
                />

                <Dialog.Content
                    // Prevent closing via ESC/outside click; require explicit Accept/Decline.
                    onEscapeKeyDown={(e) => e.preventDefault()}
                    onPointerDownOutside={(e) => e.preventDefault()}
                    className="fixed left-1/2 top-1/2 z-50 w-[min(92vw,900px)] -translate-x-1/2 -translate-y-1/2 rounded-[14px] border border-sky-400/35 bg-slate-950/95 shadow-[0_10px_30px_rgba(0,0,0,0.6)] outline-none"
                >
                    <div className="border-l-[6px] border-sky-400 p-5 sm:p-6">
                        <Dialog.Title className="text-xl font-semibold text-slate-100">
                            Policy
                        </Dialog.Title>
                        <Dialog.Description className="mt-2 text-xs text-slate-200">
                            Enter this website means that you have read and agreed to the following policy: <br/>
                            vPLAAF is an entirely fictional virtual aviation organization created solely for flight simulation and online entertainment. vPLAAF has no affiliation, subordination, cooperation, or authorization relationship with the real People’s Liberation Army Air Force or with any governmental, military, or commercial entity. All missions, structures, and designations are fictional and do not represent any real-world military unit, organization, or stance. All data and procedures conducted by this website and this organization must not be used for any real-world aviation or military purposes, and do not constitute any form of real-world flight training or operational reference.
                        </Dialog.Description>
                        <p className="mt-1 text-xs text-slate-400">
                            进入本网站即表示您已阅读并同意以下政策：<br/>
                            vPLAAF虚拟中国空军为完全虚构的虚拟飞行组织， 仅以飞行模拟与网络娱乐为目的。vPLAAF 与现实中的中国人民解放军空军、 任何国家机关、军事单位或商业机构不存在任何形式的隶属、从属、合作或授权关系， 所有任务编制与设定均为虚构，不代表任何现实军事单位、组织或立场。 本网站及本组织的全部程序与数据均为虚拟不得用于任何现实航空或军事行为， 不构成任何形式的现实飞行训练或作战参考。
                        </p>
                        <br />
                        <Dialog.Title className="text-xl font-semibold text-slate-100">
                            Privacy
                        </Dialog.Title>
                        <Dialog.Description className="mt-2 text-xs text-slate-200">
                            This website uses cookies to ensure basic functionality and improve user experience.
                        </Dialog.Description>
                        <p className="mt-1 text-xs text-slate-400">
                            本网站使用 Cookie 以确保基本功能并提升使用体验。
                        </p>

                        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-end">
                            {/*<button*/}
                            {/*    type="button"*/}
                            {/*    onClick={() => setConsent("declined")}*/}
                            {/*    className="inline-flex items-center justify-center rounded-full border border-slate-500/80 bg-transparent px-4 py-2 text-xs font-medium text-slate-100 hover:bg-slate-800/40"*/}
                            {/*>*/}
                            {/*    Decline*/}
                            {/*</button>*/}
                            <button
                                type="button"
                                onClick={() => setConsent("accepted")}
                                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-sky-400"
                            >
                                I have read and agree | 我已阅读并同意
                            </button>
                        </div>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
