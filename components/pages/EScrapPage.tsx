"use client";

import PageBanner from "@/components/common/PageBanner";
import InfoListSection from "@/components/common/InfoListSection";
import CollectionProcess from "@/components/scrap/CollectionProcess";

import { usePathname } from "next/navigation";
import { getLocaleFromPathname, type Locale } from "@/lib/i18n";
import { getPageBannerProps, pageDefinitions } from "@/lib/pages";
import { getTranslation } from "@/lib/translations";

export default function EScrapPage() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;

  const materialsItems = [1, 2, 3, 4, 5, 6].map((i) =>
    getTranslation(`eScrap.materials.item${i}`, locale),
  );
  const customersItems = [1, 2, 3, 4, 5].map((i) =>
    getTranslation(`eScrap.customers.item${i}`, locale),
  );

  return (
    <main>
      <PageBanner
        breadcrumbs={[
          { label: getTranslation("common.home", locale), href: "/" },
          {
            label: getTranslation("eScrap.banner.breadcrumbServices", locale),
            href: "/services",
          },
          { label: getTranslation("header.eScrap", locale) },
        ]}
        subtitle={getTranslation("eScrap.banner.subtitle", locale)}
        title={getTranslation("eScrap.banner.title", locale)}
        bgImage="https://images.unsplash.com/photo-1638983851342-63e1aa939a7a?w=1000&h=600&fit=crop&auto=format"
        description={getTranslation("eScrap.banner.description", locale)}
        primaryCta={{
          label: getTranslation("contact.form.title", locale),
          href: "/contact",
        }}
        secondaryCta={{
          label: getTranslation("footer.whatsapp", locale),
          href: "https://wa.me/966559679148",
        }}
      />
      <InfoListSection
        title={getTranslation("eScrap.materials.title", locale)}
        subtitle={getTranslation("eScrap.materials.subtitle", locale)}
        items={materialsItems}
        image={{
          src: "https://images.unsplash.com/photo-1638983851342-63e1aa939a7a?w=1000&h=600&fit=crop&auto=format",
          alt: "Materials we buy",
        }}
        imagePosition="start"
      />
      <InfoListSection
        title={getTranslation("eScrap.customers.title", locale)}
        subtitle={getTranslation("eScrap.customers.subtitle", locale)}
        items={customersItems}
        image={{
          src: "https://images.unsplash.com/photo-1638983851342-63e1aa939a7a?w=1000&h=600&fit=crop&auto=format",
          alt: "Customers we serve",
        }}
        imagePosition="end"
        className="bg-section-bg-1"
      />
      <CollectionProcess />
    </main>
  );
}
