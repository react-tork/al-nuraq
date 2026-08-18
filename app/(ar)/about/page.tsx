import AboutPage from "@/components/about/AboutPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Professional Scrap Metal Buyers | Al Nuraq",
  description: "Learn about Al Nuraq, the leading professional scrap metal buyers in Dammam and Riyadh. Discover our story, mission, and commitment to sustainable recycling.",
  keywords: "about Al Nuraq, scrap metal company, Dammam, Riyadh, recycling, scrap buyer company",
  openGraph: {
    title: "About Us - Professional Scrap Metal Buyers | Al Nuraq",
    description: "Learn about Al Nuraq, the leading professional scrap metal buyers in Dammam and Riyadh.",
    url: "https://alnuraqscrap.com/about",
    siteName: "Al Nuraq",
    locale: "ar_SA",
    type: "website",
  },
};

export default function Page() {
  return <AboutPage />;
}
