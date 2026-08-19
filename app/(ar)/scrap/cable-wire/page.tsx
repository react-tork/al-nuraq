import CableWirePage from "@/components/pages/CableWirePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cable and Wire - Electrical Cable Recycling | Al Nuraq",
  description: "Al Nuraq buys cable and wire scrap in Dammam and Riyadh. Copper cables, aluminum wires, electrical wiring, and industrial cable recycling.",
  keywords: "cable and wire, electrical cable recycling, copper cable, aluminum wire, wire scrap, Dammam, Riyadh",
  alternates: {
    canonical: "https://alnuraqscrap.com/scrap/cable-wire",
  },
  openGraph: {
    title: "Cable and Wire - Electrical Cable Recycling | Al Nuraq",
    description: "Al Nuraq buys cable and wire scrap in Dammam and Riyadh.",
    url: "https://alnuraqscrap.com/scrap/cable-wire",
    siteName: "Al Nuraq",
    locale: "ar_SA",
    type: "website",
  },
};

export default function Page() {
  return <CableWirePage />;
}
