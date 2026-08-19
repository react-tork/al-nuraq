import ElectricalPanelsScrapPage from "@/components/pages/ElectricalPanelsScrapPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electrical Panels Scrap - Switchgear Recycling | Al Nuraq",
  description: "Al Nuraq buys electrical panels and switchgear scrap in Dammam and Riyadh. Industrial electrical equipment, circuit breakers, and panel recycling.",
  keywords: "electrical panels scrap, switchgear recycling, circuit breakers, electrical equipment, panel scrap, Dammam, Riyadh",
  alternates: {
    canonical: "https://alnuraqscrap.com/en/scrap/electrical-panels",
  },
  openGraph: {
    title: "Electrical Panels Scrap - Switchgear Recycling | Al Nuraq",
    description: "Al Nuraq buys electrical panels and switchgear scrap in Dammam and Riyadh.",
    url: "https://alnuraqscrap.com/en/scrap/electrical-panels",
    siteName: "Al Nuraq",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <ElectricalPanelsScrapPage />;
}
