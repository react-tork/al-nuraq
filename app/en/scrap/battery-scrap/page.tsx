import BatteryScrapPage from "@/components/pages/BatteryScrapPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Battery Scrap - Lead Acid Battery Recycling | Al Nuraq",
  description: "Al Nuraq buys battery scrap including lead acid batteries, car batteries, and industrial batteries in Dammam and Riyadh. Safe and eco-friendly recycling.",
  keywords: "battery scrap, lead acid battery, car battery recycling, battery buyer, Dammam, Riyadh, battery disposal",
  alternates: {
    canonical: "https://alnuraqscrap.com/en/scrap/battery-scrap",
  },
  openGraph: {
    title: "Battery Scrap - Lead Acid Battery Recycling | Al Nuraq",
    description: "Al Nuraq buys battery scrap including lead acid batteries and car batteries in Dammam and Riyadh.",
    url: "https://alnuraqscrap.com/en/scrap/battery-scrap",
    siteName: "Al Nuraq",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <BatteryScrapPage />;
}
