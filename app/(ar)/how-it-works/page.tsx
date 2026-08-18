import HowItWorksPage from "@/components/pages/HowItWorksPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works - Scrap Metal Pickup Process | Al Nuraq",
  description: "Learn how Al Nuraq's scrap metal pickup process works in Dammam and Riyadh. Simple steps to sell your copper, aluminum, iron, and steel scrap efficiently.",
  keywords: "how scrap pickup works, scrap metal process, scrap selling steps, Dammam, Riyadh, metal recycling",
  openGraph: {
    title: "How It Works - Scrap Metal Pickup Process | Al Nuraq",
    description: "Learn how Al Nuraq's scrap metal pickup process works in Dammam and Riyadh.",
    url: "https://alnuraqscrap.com/how-it-works",
    siteName: "Al Nuraq",
    locale: "ar_SA",
    type: "website",
  },
};

export default function Page() {
  return <HowItWorksPage />;
}
