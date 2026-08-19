import HouseholdScrapPage from "@/components/pages/HouseholdScrapPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Household Scrap - Domestic Metal Recycling | Al Nuraq",
  description: "Al Nuraq buys household scrap in Dammam and Riyadh. Kitchen appliances, household metal items, and domestic scrap recycling services.",
  keywords: "household scrap, domestic metal recycling, kitchen appliances, household metal, home scrap, Dammam, Riyadh",
  alternates: {
    canonical: "https://alnuraqscrap.com/scrap/household",
  },
  openGraph: {
    title: "Household Scrap - Domestic Metal Recycling | Al Nuraq",
    description: "Al Nuraq buys household scrap in Dammam and Riyadh.",
    url: "https://alnuraqscrap.com/scrap/household",
    siteName: "Al Nuraq",
    locale: "ar_SA",
    type: "website",
  },
};

export default function Page() {
  return <HouseholdScrapPage />;
}
