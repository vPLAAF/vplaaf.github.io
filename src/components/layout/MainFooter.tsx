export default function MainFooter() {
    return (
        <footer className="mt-16 border-t border-slate-800/60 py-6 text-center text-xs text-slate-300">
            <p>
                © {new Date().getFullYear()} vPLAAF · 虚拟中国空军
                · Non-official VATSIM Virtual Organization.
            </p>
            <p className="mt-1">
                本组织为完全虚构，仅用于飞行模拟与网络娱乐，不代表任何现实军事单位或立场。
            </p>
        </footer>
    );
}
