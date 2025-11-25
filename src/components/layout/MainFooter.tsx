export default function MainFooter() {
    return (
        <footer className="mt-4 border-t border-slate-800/60 py-2 text-center text-xs text-slate-300">
            <p>
                © {new Date().getFullYear()} vPLAAF · 虚拟中国空军
                · Non-official VATSIM Virtual Organization.
            </p>
            <p>
                vPLAAF is in no way
                affiliated with any real-world military unit or position
            </p>
            <p>
                本组织为完全虚构，仅用于飞行模拟与网络娱乐，不代表任何现实军事单位或立场。
            </p>
        </footer>
    );
}
