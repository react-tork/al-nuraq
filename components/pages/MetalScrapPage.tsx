"use client";

import PageBanner from "@/components/common/PageBanner";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, type Locale } from "@/lib/i18n";
import { getPageBannerProps, pageDefinitions } from "@/lib/pages";

export default function MetalScrapPage() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;

  return (
    <main>
      <PageBanner
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Metal Scrap" },
        ]}
        subtitle="Scrap Buying"
        title="Metal Scrap Buyer in Dammam & Riyadh"
        bgImage="https://images.unsplash.com/photo-1638983851342-63e1aa939a7a?w=600&h=400&fit=crop&auto=format"
        description="Al Nuraq buys all types of metal scrap including ferrous and non-ferrous metals from individuals, businesses and industrial facilities."
        primaryCta={{ label: "Get a Quote", href: "/contact" }}
        secondaryCta={{ label: "WhatsApp Us", href: "https://wa.me/966510679737" }}
      />
      <section className="container py-60px" />
    </main>
  );
}
