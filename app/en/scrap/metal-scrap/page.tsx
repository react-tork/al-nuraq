import MetalScrapPage from "@/components/pages/MetalScrapPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metal Scrap - All Types of Metal Recycling | Al Nuraq",
  description: "Al Nuraq buys all types of metal scrap in Dammam and Riyadh. Ferrous and non-ferrous metals, mixed scrap, and comprehensive metal recycling services.",
  keywords: "metal scrap, metal recycling, ferrous metals, non-ferrous metals, mixed scrap, Dammam, Riyadh",
  alternates: {
    canonical: "https://alnuraqscrap.com/en/scrap/metal-scrap",
  },
  openGraph: {
    title: "Metal Scrap - All Types of Metal Recycling | Al Nuraq",
    description: "Al Nuraq buys all types of metal scrap in Dammam and Riyadh.",
    url: "https://alnuraqscrap.com/en/scrap/metal-scrap",
    siteName: "Al Nuraq",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <MetalScrapPage />;
}
