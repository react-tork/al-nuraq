import FaqPage from "@/components/faq/FaqPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Scrap Metal Buying Questions | Al Nuraq",
  description: "Find answers to frequently asked questions about scrap metal buying, recycling services, pickup process, and pricing at Al Nuraq in Dammam and Riyadh.",
  keywords: "scrap metal FAQ, recycling questions, scrap buying FAQ, Dammam, Riyadh, metal recycling",
  alternates: {
    canonical: "https://alnuraqscrap.com/en/faq",
  },
  openGraph: {
    title: "FAQ - Scrap Metal Buying Questions | Al Nuraq",
    description: "Find answers to frequently asked questions about scrap metal buying and recycling services.",
    url: "https://alnuraqscrap.com/en/faq",
    siteName: "Al Nuraq",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <FaqPage />;
}
