import CarsScrapPage from "@/components/pages/CarsScrapPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Scrap - Vehicle and Auto Scrap Recycling | Al Nuraq",
  description: "Al Nuraq buys car scrap and vehicles in Dammam and Riyadh. End-of-life vehicles, auto parts, and car metal recycling at competitive prices.",
  keywords: "car scrap, vehicle recycling, auto scrap, car metal, junk cars, Dammam, Riyadh, car buyer",
  alternates: {
    canonical: "https://alnuraqscrap.com/en/scrap/cars",
  },
  openGraph: {
    title: "Car Scrap - Vehicle and Auto Scrap Recycling | Al Nuraq",
    description: "Al Nuraq buys car scrap and vehicles in Dammam and Riyadh at competitive prices.",
    url: "https://alnuraqscrap.com/en/scrap/cars",
    siteName: "Al Nuraq",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <CarsScrapPage />;
}
