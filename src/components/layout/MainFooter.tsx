import Link from "next/link";

export default function MainFooter() {
    return (
        <footer className="mt-4 border-t border-slate-800/60 py-4 px-4 text-xs text-slate-300">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between sm:flex-row">

                <div className="flex items-center gap-3">
                    <Link href="https://www.vatsim.net">
                        <img
                            src="/imgs/vatsimlogo.png"
                            alt="VATSIM Logo"
                            className="h-20 opacity-80"
                        />
                    </Link>
                </div>

                <div className="text-center leading-relaxed sm:text-center">
                    <p className="text-center">
                        © {new Date().getFullYear()} vPLAAF · 虚拟中国空军
                    </p>

                    <p >
                        vPLAAF is in no way affiliated with any real-world military unit or position
                    </p>
                    <p>
                        本组织为完全虚构，仅用于飞行模拟与网络娱乐，不代表任何现实军事单位或立场。
                    </p>

                    <Link
                        href="/privacy"
                        className="text-slate-400 hover:text-slate-200 underline underline-offset-2"
                    >
                        <p>
                        Privacy Policy
                        </p>
                    </Link>
                </div>

                <div className="flex items-center gap-3">

                    <Link href="https://www.vatsim.net">
                        <img
                            src="/imgs/specopslogo.png"
                            alt="VSOA Logo"
                            className="h-16 opacity-80"
                        />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
