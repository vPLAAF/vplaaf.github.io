"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

type LoaConfig = {
    id: string;
    nameEn: string;
    nameZh: string;
    url: string;        // 单一语言的 Markdown 文件
};

// 在这里维护所有 LOA 的列表
const LOAS: LoaConfig[] = [
    {
        id: "loa-vatprc",
        nameEn: "LOA with VATPRC",
        nameZh: "与 VATPRC 协议书",
        url: "https://www.vplaaf.org/docs/loa/vatprc.md",
    },
    {
        id: "loa-hkvacc",
        nameEn: "LOA with HK vACC, VATSEA",
        nameZh: "与 HK vACC, VATSEA 协议书",
        url: "https://www.vplaaf.org/docs/loa/hkvacc.md",
    },
    // 按需继续添加……
];

export default function LOAsPage() {
    const [markdown, setMarkdown] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // 当前选中的 LOA，默认选第一个
    const [selectedLoaId, setSelectedLoaId] = useState<string>(LOAS[0]?.id);
    const selectedLoa = LOAS.find((loa) => loa.id === selectedLoaId) ?? LOAS[0];

    useEffect(() => {
        if (!selectedLoa) return;

        async function fetchMarkdown() {
            setLoading(true);
            setError(null);

            try {
                const res = await fetch(selectedLoa.url);

                if (!res.ok) {
                    setError("Unable to load file.");
                    setMarkdown("Unable to load file..");
                } else {
                    const text = await res.text();
                    setMarkdown(text);
                }
            } catch (err) {
                console.error("Error fetching markdown file:", err);
                setError("Network error while loading document.");
                setMarkdown("Unable to load file..");
            } finally {
                setLoading(false);
            }
        }

        fetchMarkdown();
    }, [selectedLoa]);

    return (
        <div className="w-full mx-auto px-4 py-10 text-slate-100">
            <h1 className="text-4xl font-bold mb-8 text-center tracking-wide text-sky-300">
                LOAs | 协议书
            </h1>

            <div className="flex flex-col gap-6 lg:flex-row">
                {/* 左侧 LOA 列表 */}
                <aside className="lg:w-72 w-full rounded-xl border border-slate-800 bg-slate-900/80 p-4 h-max">
                    <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-sky-300 mb-3">
                        LOA List · 协议列表
                    </h2>
                    <ul className="space-y-2 text-sm">
                        {LOAS.map((loa) => {
                            const isActive = loa.id === selectedLoaId;
                            return (
                                <li key={loa.id}>
                                    <button
                                        type="button"
                                        onClick={() => setSelectedLoaId(loa.id)}
                                        className={[
                                            "w-full text-left rounded-md px-3 py-2 transition",
                                            "border border-transparent",
                                            isActive
                                                ? "bg-sky-600/20 border-sky-500/70 text-sky-200"
                                                : "bg-slate-800/60 hover:bg-slate-700/70 text-slate-200",
                                        ].join(" ")}
                                    >
                                        <div className="text-xs uppercase tracking-[0.18em] text-slate-400">
                                            {loa.nameEn}
                                        </div>
                                        <div className="text-sm">
                                            {loa.nameZh}
                                        </div>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </aside>

                {/* 右侧内容区：单语言 Markdown */}
                <section className="flex-1 min-w-0">
                    <div className="mb-4 text-sm text-slate-300">
                        <p>
                            Currently viewing:{" "}
                            <span className="font-semibold text-sky-300">
                                {selectedLoa?.nameEn}
                            </span>
                        </p>
                        <p className="text-xs text-slate-400">
                            当前文档：{selectedLoa?.nameZh}
                        </p>
                    </div>

                    {loading ? (
                        <div className="py-20 text-center text-slate-300">
                            Loading...
                        </div>
                    ) : (
                        <>
                            {error && (
                                <div className="mb-3 rounded-md border border-amber-500/60 bg-amber-900/30 px-3 py-2 text-xs text-amber-100">
                                    {error}
                                </div>
                            )}

                            <article className="prose prose-slate prose-invert max-w-none bg-slate-900/80 border border-slate-800 rounded-xl p-4">
                                <ReactMarkdown>{markdown}</ReactMarkdown>
                            </article>
                        </>
                    )}
                </section>
            </div>
        </div>
    );
}
