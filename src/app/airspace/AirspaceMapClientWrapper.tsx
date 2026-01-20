"use client";

import dynamic from "next/dynamic";

const AirspaceMapClient = dynamic(() => import("./AirspaceMapClient"), {
  ssr: false,
});

export default function AirspaceMapClientWrapper() {
  return <AirspaceMapClient />;
}

