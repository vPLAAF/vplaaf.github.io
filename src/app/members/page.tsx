import MainHeader from "@/components/layout/MainHeader";
import MainFooter from "@/components/layout/MainFooter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const MEMBERS_MD_URL =
    "https://www.vplaaf.org/docs/members/roster.md";

export default async function MembersPage() {
    const res = await fetch(MEMBERS_MD_URL, {
        // 根据需要调整缓存策略
        next: { revalidate: 3600 },
    });

    if (!res.ok) {
        throw new Error("Failed to load members markdown");
    }

    const markdown = await res.text();

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

            <div className="relative z-20 ">
                    <MainHeader />

                    <main className="mx-auto min-h-[calc(100vh-150px)] flex max-w-6xl flex-col px-4 pt-30 sm:px-6 lg:px-8">
                        <div className="w-full mx-auto px-4  text-slate-100">
                            <h1 className="text-4xl font-bold mb-8 text-center tracking-wide text-sky-300">
                                Roster of Members | 成员列表
                            </h1>

                            <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/80 p-4">
                                <article className="markdown-body prose prose-invert max-w-none text-sm">
                                    <ReactMarkdown
                                        remarkPlugins={[remarkGfm]}
                                        rehypePlugins={[rehypeRaw]}
                                    >
                                        {markdown}
                                    </ReactMarkdown>
                                </article>
                            </div>
                        </div>

                    </main>

                <MainFooter />


            </div>
        </div>
    );
}
