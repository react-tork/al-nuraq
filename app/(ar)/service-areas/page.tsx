import ServiceAreasPage from "@/components/service-areas/ServiceAreasPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Areas - Dammam and Riyadh Coverage | Al Nuraq",
  description: "Al Nuraq provides scrap metal buying services across Dammam, Riyadh, and surrounding areas in Saudi Arabia. Professional pickup and recycling services.",
  keywords: "service areas, Dammam, Riyadh, Saudi Arabia, scrap metal coverage, pickup locations",
  alternates: {
    canonical: "https://alnuraqscrap.com/service-areas",
  },
  openGraph: {
    title: "Service Areas - Dammam and Riyadh Coverage | Al Nuraq",
    description: "Al Nuraq provides scrap metal buying services across Dammam, Riyadh, and surrounding areas.",
    url: "https://alnuraqscrap.com/service-areas",
    siteName: "Al Nuraq",
    locale: "ar_SA",
    type: "website",
  },
};

export default function Page() {
  return <ServiceAreasPage />;
}
