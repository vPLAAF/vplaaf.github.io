import PrivacyPageClient from './PrivacyPageClient';

import MainHeader from "@/components/layout/MainHeader";
import MainFooter from "@/components/layout/MainFooter";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">

        <MainHeader />
        <main className="flex-1 pt-20 -mb-20 w-full overflow-y-auto">
            <PrivacyPageClient />
        </main>
        <MainFooter />

    </div>

  );
}