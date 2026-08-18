import IndustrialSolutionsPage from "@/components/pages/IndustrialSolutionsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Solutions - Business Scrap Metal Services | Al Nuraq",
  description: "Al Nuraq provides industrial scrap metal solutions for businesses in Dammam and Riyadh. Bulk collection, machinery scrap, and commercial recycling services.",
  keywords: "industrial scrap solutions, business scrap metal, commercial recycling, Dammam, Riyadh, industrial scrap buyer",
  openGraph: {
    title: "Industrial Solutions - Business Scrap Metal Services | Al Nuraq",
    description: "Al Nuraq provides industrial scrap metal solutions for businesses in Dammam and Riyadh.",
    url: "https://alnuraqscrap.com/industrial-solutions",
    siteName: "Al Nuraq",
    locale: "ar_SA",
    type: "website",
  },
};

export default function Page() {
  return <IndustrialSolutionsPage />;
}
