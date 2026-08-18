import HouseholdScrapPage from "@/components/pages/HouseholdScrapPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Household Scrap - Domestic Metal Recycling | Al Nuraq",
  description: "Al Nuraq buys household scrap in Dammam and Riyadh. Kitchen appliances, household metal items, and domestic scrap recycling services.",
  keywords: "household scrap, domestic metal recycling, kitchen appliances, household metal, home scrap, Dammam, Riyadh",
  openGraph: {
    title: "Household Scrap - Domestic Metal Recycling | Al Nuraq",
    description: "Al Nuraq buys household scrap in Dammam and Riyadh.",
    url: "https://alnuraqscrap.com/en/scrap/household",
    siteName: "Al Nuraq",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <HouseholdScrapPage />;
}
