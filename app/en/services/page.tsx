import ServicesPage from "@/components/pages/ServicesPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - Scrap Metal Collection and Recycling | Al Nuraq",
  description: "Discover Al Nuraq's comprehensive scrap metal services including collection, recycling, and pickup for copper, aluminum, iron, steel in Dammam and Riyadh.",
  keywords: "scrap metal services, metal recycling, scrap collection, Dammam, Riyadh, industrial scrap services",
  alternates: {
    canonical: "https://alnuraqscrap.com/en/services",
  },
  openGraph: {
    title: "Our Services - Scrap Metal Collection and Recycling | Al Nuraq",
    description: "Discover Al Nuraq's comprehensive scrap metal services including collection, recycling, and pickup.",
    url: "https://alnuraqscrap.com/en/services",
    siteName: "Al Nuraq",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <ServicesPage />;
}
