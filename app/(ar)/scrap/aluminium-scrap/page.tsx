import AluminiumScrapPage from "@/components/pages/AluminiumScrapPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aluminium Scrap - Top Prices for Aluminum Recycling | Al Nuraq",
  description: "Al Nuraq buys aluminum scrap at best prices in Dammam and Riyadh. We accept aluminum sheets, cans, extrusions, and industrial aluminum scrap.",
  keywords: "aluminium scrap, aluminum recycling, aluminum prices, aluminum buyer, Dammam, Riyadh, aluminum scrap dealer",
  openGraph: {
    title: "Aluminium Scrap - Top Prices for Aluminum Recycling | Al Nuraq",
    description: "Al Nuraq buys aluminum scrap at best prices in Dammam and Riyadh.",
    url: "https://alnuraqscrap.com/scrap/aluminium-scrap",
    siteName: "Al Nuraq",
    locale: "ar_SA",
    type: "website",
  },
};

export default function Page() {
  return <AluminiumScrapPage />;
}
