import PageBanner from "@/components/common/PageBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop - Al Nuraq Scrap Metal Services",
  description: "Browse Al Nuraq's scrap metal services and products in Dammam and Riyadh. Professional metal recycling and scrap buying solutions.",
  keywords: "shop, scrap metal services, metal recycling, Dammam, Riyadh, scrap buying",
  openGraph: {
    title: "Shop - Al Nuraq Scrap Metal Services",
    description: "Browse Al Nuraq's scrap metal services and products in Dammam and Riyadh.",
    url: "https://alnuraqscrap.com/shop-left-sidebar",
    siteName: "Al Nuraq",
    locale: "en_US",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main>
      <PageBanner title="Property Left sidebar" />
    </main>
  );
}