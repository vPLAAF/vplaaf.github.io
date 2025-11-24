"use client";

import React, { useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';

interface DualScrollProps {
    enMarkdown: string;
    zhMarkdown: string;
}

export default function DualScroll(
    {
        enMarkdown,
        zhMarkdown
    }: DualScrollProps
) {
    const enRef = useRef<HTMLDivElement | null>(null);
    const zhRef = useRef<HTMLDivElement | null>(null);

    const syncingFrom = useRef<"en" | "zh" | null>(null);

    const handleScroll =
        (side: "en" | "zh") =>
        (e: React.UIEvent<HTMLDivElement>):void => {
        const sourceRef = side === "en" ? enRef : zhRef;
        const targetRef = side === "en" ? zhRef : enRef;

        if (!sourceRef.current || !targetRef.current) return;

        if (syncingFrom.current && syncingFrom.current !== side) {
            return;
        }

        const source = sourceRef.current;
        const target = targetRef.current;

        const sourceScrollable = source.scrollHeight - source.clientHeight || 1;
        const ratio = source.scrollTop / sourceScrollable;

        syncingFrom.current = side;

        const targetScrollable = target.scrollHeight - target.clientHeight;
        target.scrollTop = ratio * targetScrollable;

        window.requestAnimationFrame(() => {

            syncingFrom.current = null;

        });

    };
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[75vh] rounded-xl p-4
                    bg-slate-900/40 border border-slate-700/40 backdrop-blur-md">

            {/* 左：英文 */}
            <section
                ref={enRef}
                onScroll={handleScroll("en")}
                className="max-h-full overflow-y-auto px-4 py-3
                   border-r border-slate-800/40
                   text-slate-200
                   shadow-inner"
            >
                <article className="markdown-body">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{enMarkdown}</ReactMarkdown>
                </article>
            </section>

            {/* 右：中文 */}
            <section
                ref={zhRef}
                onScroll={handleScroll("zh")}
                className="max-h-full overflow-y-auto px-4 py-3
                   text-slate-200
                   shadow-inner"
            >
                <article className="markdown-body">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{zhMarkdown}</ReactMarkdown>
                </article>
            </section>

        </div>
    );

}