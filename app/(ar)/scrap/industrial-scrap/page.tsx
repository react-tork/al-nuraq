import IndustrialScrapPage from "@/components/pages/IndustrialScrapPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Scrap - Business Metal Recycling | Al Nuraq",
  description: "Al Nuraq buys industrial scrap in Dammam and Riyadh. Manufacturing scrap, factory metal waste, and industrial recycling solutions for businesses.",
  keywords: "industrial scrap, business metal recycling, manufacturing scrap, factory waste, industrial recycling, Dammam, Riyadh",
  openGraph: {
    title: "Industrial Scrap - Business Metal Recycling | Al Nuraq",
    description: "Al Nuraq buys industrial scrap in Dammam and Riyadh for businesses.",
    url: "https://alnuraqscrap.com/scrap/industrial-scrap",
    siteName: "Al Nuraq",
    locale: "ar_SA",
    type: "website",
  },
};

export default function Page() {
  return <IndustrialScrapPage />;
}
