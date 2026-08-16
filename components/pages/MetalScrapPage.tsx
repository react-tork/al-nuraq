"use client";

import PageBanner from "@/components/common/PageBanner";
import InfoListSection from "@/components/common/InfoListSection";
import CollectionProcess from "@/components/scrap/CollectionProcess"

import { usePathname } from "next/navigation";
import { getLocaleFromPathname, type Locale } from "@/lib/i18n";
import { getPageBannerProps, pageDefinitions } from "@/lib/pages";
import { getTranslation } from "@/lib/translations";

export default function MetalScrapPage() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;

  const materialsItems = [1, 2, 3, 4, 5, 6].map((i) =>
    getTranslation(`metalScrap.materials.item${i}`, locale)
  );
  const customersItems = [1, 2, 3, 4, 5].map((i) =>
    getTranslation(`metalScrap.customers.item${i}`, locale)
  );

  return (
    <main>
      <PageBanner
        breadcrumbs={[
          { label: getTranslation("common.home", locale), href: "/" },
          { label: getTranslation("metalScrap.banner.breadcrumbServices", locale), href: "/services" },
          { label: getTranslation("header.metalScrap", locale) },
        ]}
        subtitle={getTranslation("metalScrap.banner.subtitle", locale)}
        title={getTranslation("metalScrap.banner.title", locale)}
        bgImage="https://images.unsplash.com/photo-1638983851342-63e1aa939a7a?w=600&h=400&fit=crop&auto=format"
        description={getTranslation("metalScrap.banner.description", locale)}
        primaryCta={{ label: getTranslation("contact.form.title", locale), href: "/contact" }}
        secondaryCta={{ label: getTranslation("footer.whatsapp", locale), href: "https://wa.me/966510679737" }}
      />
      <InfoListSection
        title={getTranslation("metalScrap.materials.title", locale)}
        subtitle={getTranslation("metalScrap.materials.subtitle", locale)}
        items={materialsItems}
        image={{ src: "https://images.unsplash.com/photo-1707879447469-60e84418d027?q=80&w=1129&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Materials we buy" }}
        imagePosition="start"
      />
      <InfoListSection
        title={getTranslation("metalScrap.customers.title", locale)}
        subtitle={getTranslation("metalScrap.customers.subtitle", locale)}
        items={customersItems}
        image={{ src: "https://images.unsplash.com/photo-1763926025420-adf538deaee4?q=80&w=1143&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Customers we serve" }}
        imagePosition="end"
        className="bg-section-bg-1"
      />
      <CollectionProcess />
    </main>
  );
}
