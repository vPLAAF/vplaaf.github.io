"use client";

import DualScroll from "@/components/DualScroll";

import {useEffect, useState} from "react";


export default function SOPPage() {

    const [enMarkdown, setEnMarkdown] = useState<string>("");
    const [zhMarkdown, setZhMarkdown] = useState<string>("");

    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        async function fetchMarkdown() {
            try {
                const [enRes, zhRes] = await Promise.all([
                    fetch("https://www.vplaaf.org/docs/sop/en.md"),
                    fetch("https://www.vplaaf.org/docs/sop/zh.md"),
                ]);

                const [enText, zhText] = await Promise.all([
                    enRes.text(),
                    zhRes.text(),
                ]);

                if (!enRes.ok) {
                    setEnMarkdown("Unable to load file..");
                }else{
                    setEnMarkdown(enText);
                }

                if (!zhRes.ok) {
                    setZhMarkdown("无法加载文件内容...");
                }else{
                    setZhMarkdown(zhText);
                }

            } catch (error) {
                console.error("Error fetching markdown files:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchMarkdown();
    }, []);

    if (loading) {
        return (
            <div className="py-20 text-center text-slate-300">
                Loading...
            </div>
        );
    }

    return (
        <div className="w-full mx-auto px-4 py-10 text-slate-100">
            <h1 className="text-4xl font-bold mb-8 text-center tracking-wide text-sky-300">
                SOP | 标准运行程序
            </h1>

            <DualScroll enMarkdown={enMarkdown} zhMarkdown={zhMarkdown} />
        </div>
    );
}