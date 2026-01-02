// components/CookieConsentBanner.tsx
"use client";

import CookieConsent from "react-cookie-consent";

export default function CookieConsentBanner() {
    return (
        <CookieConsent
            location="bottom"
            cookieName="vplaaf_cookie_consent"
            enableDeclineButton
            buttonText="Accept"
            declineButtonText="Decline"
            expires={365}
            overlay={false}
            containerClasses="!fixed !bottom-6 !left-1/2 !z-50 !-translate-x-1/2"
            style={{
                background: "rgba(2,6,23,0.96)", // slate-950
                border: "1px solid rgba(56,189,248,0.35)", // sky-400
                borderLeft: "6px solid #38bdf8", // sky-400 强调条
                boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
                borderRadius: "14px",
                maxWidth: "900px",
                width: "94%",
                backdropFilter: "blur(10px)",
            }}
            buttonStyle={{
                background: "#0ea5e9", // sky-500
                color: "#020617",
                fontSize: "13px",
                fontWeight: 600,
                borderRadius: "9999px",
                padding: "8px 18px",
            }}
            declineButtonStyle={{
                background: "transparent",
                color: "#e5e7eb",
                border: "1px solid #64748b",
                fontSize: "12px",
                borderRadius: "9999px",
                padding: "8px 16px",
            }}
        >
            <div className="flex flex-col gap-1">
                <p className="text-sm text-slate-200">
                    This website uses cookies to ensure basic functionality and improve user experience.
                </p>
                <p className="text-xs text-slate-400">
                    本网站使用 Cookie 以确保基本功能并提升使用体验。
                </p>
            </div>
        </CookieConsent>
    );
}
