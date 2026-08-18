import ConstructionScrapPage from "@/components/pages/ConstructionScrapPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Scrap - Building Material Recycling | Al Nuraq",
  description: "Al Nuraq buys construction scrap in Dammam and Riyadh. Building materials, steel beams, metal pipes, and construction site scrap recycling.",
  keywords: "construction scrap, building material recycling, construction metal, steel beams, scrap from construction, Dammam, Riyadh",
  openGraph: {
    title: "Construction Scrap - Building Material Recycling | Al Nuraq",
    description: "Al Nuraq buys construction scrap in Dammam and Riyadh.",
    url: "https://alnuraqscrap.com/scrap/construction",
    siteName: "Al Nuraq",
    locale: "ar_SA",
    type: "website",
  },
};

export default function Page() {
  return <ConstructionScrapPage />;
}
