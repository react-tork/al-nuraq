import WhatWeBuyPage from "@/components/pages/WhatWeBuyPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Buy - Scrap Metal Types | Al Nuraq",
  description: "Al Nuraq buys all types of scrap metal including copper, aluminum, iron, steel, brass, and industrial scrap. Best prices in Dammam and Riyadh.",
  keywords: "what we buy, scrap metal types, copper scrap, aluminum scrap, iron scrap, steel scrap, Dammam, Riyadh",
  openGraph: {
    title: "What We Buy - Scrap Metal Types | Al Nuraq",
    description: "Al Nuraq buys all types of scrap metal including copper, aluminum, iron, steel, brass, and industrial scrap.",
    url: "https://alnuraqscrap.com/scrap",
    siteName: "Al Nuraq",
    locale: "ar_SA",
    type: "website",
  },
};

export default function Page() {
  return <WhatWeBuyPage />;
}
