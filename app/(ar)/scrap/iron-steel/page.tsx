import IronSteelPage from "@/components/pages/IronSteelPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iron and Steel - Heavy Metal Scrap Buying | Al Nuraq",
  description: "Al Nuraq buys iron and steel scrap in Dammam and Riyadh. Heavy metals, construction steel, and industrial iron recycling at competitive prices.",
  keywords: "iron and steel, heavy metal scrap, construction steel, industrial iron, metal recycling, Dammam, Riyadh",
  alternates: {
    canonical: "https://alnuraqscrap.com/scrap/iron-steel",
  },
  openGraph: {
    title: "Iron and Steel - Heavy Metal Scrap Buying | Al Nuraq",
    description: "Al Nuraq buys iron and steel scrap in Dammam and Riyadh at competitive prices.",
    url: "https://alnuraqscrap.com/scrap/iron-steel",
    siteName: "Al Nuraq",
    locale: "ar_SA",
    type: "website",
  },
};

export default function Page() {
  return <IronSteelPage />;
}
