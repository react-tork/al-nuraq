import ContactPage from "@/components/pages/ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Scrap Metal Buyers in Dammam and Riyadh | Al Nuraq",
  description: "Contact Al Nuraq for professional scrap metal buying services in Dammam and Riyadh. Get in touch for copper, aluminum, iron, steel scrap pickup and industrial scrap collection.",
  keywords: "contact Al Nuraq, scrap metal contact, Dammam, Riyadh, scrap pickup contact, industrial scrap buyer",
  openGraph: {
    title: "Contact Us - Scrap Metal Buyers in Dammam and Riyadh | Al Nuraq",
    description: "Contact Al Nuraq for professional scrap metal buying services in Dammam and Riyadh.",
    url: "https://alnuraqscrap.com/contact",
    siteName: "Al Nuraq",
    locale: "ar_SA",
    type: "website",
  },
};

export default function Page() {
  return <ContactPage />;
}
