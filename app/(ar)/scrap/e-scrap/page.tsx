import EScrapPage from "@/components/pages/EScrapPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Scrap - Electronic Waste Recycling | Al Nuraq",
  description: "Al Nuraq buys electronic scrap and e-waste in Dammam and Riyadh. Computers, phones, circuit boards, and electronic equipment recycling services.",
  keywords: "e-scrap, electronic waste, e-waste recycling, computer scrap, electronic recycling, Dammam, Riyadh",
  openGraph: {
    title: "E-Scrap - Electronic Waste Recycling | Al Nuraq",
    description: "Al Nuraq buys electronic scrap and e-waste in Dammam and Riyadh.",
    url: "https://alnuraqscrap.com/scrap/e-scrap",
    siteName: "Al Nuraq",
    locale: "ar_SA",
    type: "website",
  },
};

export default function Page() {
  return <EScrapPage />;
}
