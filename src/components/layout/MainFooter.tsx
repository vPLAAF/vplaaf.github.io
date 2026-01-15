import Link from "next/link";

const LEFT_LOGOS = [
    {
        href: "https://www.vatsim.net",
        src: "/imgs/vatsimlogo.png",
        alt: "VATSIM Logo",
        height: "h-20",
    },
    {
        href: "https://www.vatsim.net",
        src: "/imgs/specopslogo.png",
        alt: "VSOA Logo",
        height: "h-16",
    },
];

const RIGHT_LOGOS = [
    {
        href: "https://www.vatprc.net/",
        src: "/imgs/vatprclogo.png",
        alt: "VATPRC Logo",
        height: "h-16",
    },
];

export default function MainFooter() {
    return (
        <footer className="mt-4 border-t border-slate-800/60 py-4 px-4 text-xs text-slate-300">
            <div className="mx-auto grid grid-cols-1 items-center gap-4 sm:grid-cols-3">

                {/* Left */}
                <div className="flex justify-center sm:justify-start">
                    <div className="flex items-center gap-16">
                        {LEFT_LOGOS.map((logo) => (
                            <Link key={logo.src} href={logo.href}>
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className={`${logo.height} w-auto object-contain opacity-80`}
                                />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="text-center leading-relaxed">
                    <p>© {new Date().getFullYear()} vPLAAF · 虚拟中国空军</p>
                    <p>vPLAAF is in no way affiliated with any real-world military unit or position</p>
                    <p>本组织为完全虚构，仅用于飞行模拟与网络娱乐，不代表任何现实军事单位或立场。</p>

                    <Link
                        href="/privacy"
                        className="inline-block text-slate-400 hover:text-slate-200 underline underline-offset-2"
                    >
                        Privacy Policy
                    </Link>
                </div>

                {/* Right */}
                <div className="flex justify-center sm:justify-end">
                    <div className="flex items-center gap-16">
                        {RIGHT_LOGOS.map((logo) => (
                            <Link key={logo.src} href={logo.href}>
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className={`${logo.height} opacity-80`}
                                />
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
}
