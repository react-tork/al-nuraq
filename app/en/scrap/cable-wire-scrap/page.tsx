import CableWirePage from "@/components/pages/CableWirePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cable and Wire Scrap - Electrical Wire Recycling | Al Nuraq",
  description: "Al Nuraq buys cable and wire scrap in Dammam and Riyadh. Copper wire, aluminum wire, electrical cables, and industrial wire recycling at best prices.",
  keywords: "cable scrap, wire scrap, copper wire, electrical wire recycling, cable buyer, Dammam, Riyadh",
  alternates: {
    canonical: "https://alnuraqscrap.com/en/scrap/cable-wire-scrap",
  },
  openGraph: {
    title: "Cable and Wire Scrap - Electrical Wire Recycling | Al Nuraq",
    description: "Al Nuraq buys cable and wire scrap in Dammam and Riyadh at best prices.",
    url: "https://alnuraqscrap.com/en/scrap/cable-wire-scrap",
    siteName: "Al Nuraq",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <CableWirePage />;
}
