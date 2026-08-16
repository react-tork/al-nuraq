"use client";

import PageBanner from "@/components/common/PageBanner";
import InfoListSection from "@/components/common/InfoListSection";
import CollectionProcess from "@/components/scrap/CollectionProcess"
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, type Locale } from "@/lib/i18n";
import { getPageBannerProps, pageDefinitions } from "@/lib/pages";
import { getTranslation } from "@/lib/translations";

export default function CopperScrapPage() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;

  const materialsItems = [1, 2, 3, 4, 5, 6].map((i) =>
    getTranslation(`copperScrap.materials.item${i}`, locale)
  );
  const customersItems = [1, 2, 3, 4, 5].map((i) =>
    getTranslation(`copperScrap.customers.item${i}`, locale)
  );

  return (
    <main>
      <PageBanner
        breadcrumbs={[
          { label: getTranslation("common.home", locale), href: "/" },
          { label: getTranslation("copperScrap.banner.breadcrumbServices", locale), href: "/services" },
          { label: getTranslation("header.copperScrap", locale) },
        ]}
        subtitle={getTranslation("copperScrap.banner.subtitle", locale)}
        title={getTranslation("copperScrap.banner.title", locale)}
        bgImage="https://images.unsplash.com/photo-1717667745852-a5bd6876c1de?w=1000&h=600&fit=crop&auto=format"
        description={getTranslation("copperScrap.banner.description", locale)}
        primaryCta={{ label: getTranslation("contact.form.title", locale), href: "/contact" }}
        secondaryCta={{ label: getTranslation("footer.whatsapp", locale), href: "https://wa.me/966510679737" }}
      />
      <InfoListSection
        title={getTranslation("copperScrap.materials.title", locale)}
        subtitle={getTranslation("copperScrap.materials.subtitle", locale)}
        items={materialsItems}
        image={{ src: "https://plus.unsplash.com/premium_photo-1754650790891-554d82b1a95e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Materials we buy" }}
        imagePosition="start"
      />
      <InfoListSection
        title={getTranslation("copperScrap.customers.title", locale)}
        subtitle={getTranslation("copperScrap.customers.subtitle", locale)}
        items={customersItems}
        image={{ src: "https://images.unsplash.com/photo-1642910537288-60b161d5cac3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Customers we serve" }}
        imagePosition="end"
        className="bg-section-bg-1"
      />
      <CollectionProcess />
    </main>
  );
}
