"use client";

import DualScroll from "@/components/DualScroll";

import {useEffect, useState} from "react";


export default function PrivacyPage() {

    const [enMarkdown, setEnMarkdown] = useState<string>("");
    const [zhMarkdown, setZhMarkdown] = useState<string>("");

    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        async function fetchMarkdown() {
            try {
                const [enRes, zhRes] = await Promise.all([
                    fetch("docs/privacy/en.md"),
                    fetch("docs/privacy/zh.md"),
                ]);

                if (!enRes.ok || !zhRes.ok) {
                    throw new Error("Failed to fetch markdown files");
                }

                const [enText, zhText] = await Promise.all([
                    enRes.text(),
                    zhRes.text(),
                ]);

                setEnMarkdown(enText);
                setZhMarkdown(zhText);
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
        <div className="max-w-6xl mx-auto px-4 py-10 text-slate-100">
            <h1 className="text-4xl font-bold mb-8 text-center tracking-wide text-sky-300">
                Privacy Policy · 隐私政策
            </h1>

            <DualScroll enMarkdown={enMarkdown} zhMarkdown={zhMarkdown} />
        </div>
    );
}