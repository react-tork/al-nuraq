import MachineryScrapPage from "@/components/pages/MachineryScrapPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Machinery Scrap - Equipment and Tool Recycling | Al Nuraq",
  description: "Al Nuraq buys machinery scrap in Dammam and Riyadh. Industrial equipment, tools, heavy machinery, and mechanical scrap recycling services.",
  keywords: "machinery scrap, equipment recycling, tool scrap, heavy machinery, mechanical scrap, Dammam, Riyadh",
  openGraph: {
    title: "Machinery Scrap - Equipment and Tool Recycling | Al Nuraq",
    description: "Al Nuraq buys machinery scrap in Dammam and Riyadh.",
    url: "https://alnuraqscrap.com/en/scrap/machinery-scrap",
    siteName: "Al Nuraq",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <MachineryScrapPage />;
}
