import ScrapPickupPage from "@/components/pages/ScrapPickupPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scrap Pickup Service - Door to Door Collection | Al Nuraq",
  description: "Al Nuraq offers convenient scrap metal pickup services in Dammam and Riyadh. Door-to-door collection for copper, aluminum, iron, steel, and industrial scrap.",
  keywords: "scrap pickup, door to door collection, scrap metal removal, Dammam, Riyadh, scrap collection service",
  openGraph: {
    title: "Scrap Pickup Service - Door to Door Collection | Al Nuraq",
    description: "Al Nuraq offers convenient scrap metal pickup services in Dammam and Riyadh.",
    url: "https://alnuraqscrap.com/scrap-pickup",
    siteName: "Al Nuraq",
    locale: "ar_SA",
    type: "website",
  },
};

export default function Page() {
  return <ScrapPickupPage />;
}
