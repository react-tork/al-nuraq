import BlogPage from "@/components/blog/BlogPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Scrap Metal Recycling Tips and Industry News | Al Nuraq",
  description: "Read Al Nuraq's blog for expert tips on scrap metal recycling, industry news, and guides on selling copper, aluminum, iron, and steel scrap in Saudi Arabia.",
  keywords: "scrap metal blog, recycling tips, metal industry news, scrap selling guide, Dammam, Riyadh",
  openGraph: {
    title: "Blog - Scrap Metal Recycling Tips and Industry News | Al Nuraq",
    description: "Read Al Nuraq's blog for expert tips on scrap metal recycling, industry news, and guides.",
    url: "https://alnuraqscrap.com/blog",
    siteName: "Al Nuraq",
    locale: "ar_SA",
    type: "website",
  },
};

export default function Page() {
  return <BlogPage />;
}
