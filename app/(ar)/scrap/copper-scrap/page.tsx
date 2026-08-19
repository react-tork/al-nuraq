import CopperScrapPage from "@/components/pages/CopperScrapPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Copper Scrap - Best Prices for Copper Recycling | Al Nuraq",
  description: "Al Nuraq buys copper scrap at competitive prices in Dammam and Riyadh. We accept copper wire, pipes, sheets, and industrial copper scrap.",
  keywords: "copper scrap, copper recycling, copper wire scrap, copper prices, Dammam, Riyadh, copper buyer",
  alternates: {
    canonical: "https://alnuraqscrap.com/scrap/copper-scrap",
  },
  openGraph: {
    title: "Copper Scrap - Best Prices for Copper Recycling | Al Nuraq",
    description: "Al Nuraq buys copper scrap at competitive prices in Dammam and Riyadh.",
    url: "https://alnuraqscrap.com/scrap/copper-scrap",
    siteName: "Al Nuraq",
    locale: "ar_SA",
    type: "website",
  },
};

export default function Page() {
  return <CopperScrapPage />;
}
