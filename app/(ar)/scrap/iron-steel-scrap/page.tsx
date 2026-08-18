import IronSteelPage from "@/components/pages/IronSteelPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iron and Steel Scrap - Heavy Metal Recycling | Al Nuraq",
  description: "Al Nuraq buys iron and steel scrap at competitive rates in Dammam and Riyadh. Industrial steel, construction iron, and heavy metal recycling services.",
  keywords: "iron scrap, steel scrap, iron steel recycling, heavy metal, construction scrap, Dammam, Riyadh",
  openGraph: {
    title: "Iron and Steel Scrap - Heavy Metal Recycling | Al Nuraq",
    description: "Al Nuraq buys iron and steel scrap at competitive rates in Dammam and Riyadh.",
    url: "https://alnuraqscrap.com/scrap/iron-steel-scrap",
    siteName: "Al Nuraq",
    locale: "ar_SA",
    type: "website",
  },
};

export default function Page() {
  return <IronSteelPage />;
}
