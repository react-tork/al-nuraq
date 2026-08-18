"use client";

import PageBanner from "@/components/common/PageBanner";
import InfoListSection from "@/components/common/InfoListSection";
import CollectionProcess from "@/components/scrap/CollectionProcess";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, type Locale } from "@/lib/i18n";
import { getPageBannerProps, pageDefinitions } from "@/lib/pages";
import { getTranslation } from "@/lib/translations";

export default function BatteryScrapPage() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;

  const materialsItems = [1, 2, 3, 4, 5, 6].map((i) =>
    getTranslation(`batteryScrap.materials.item${i}`, locale),
  );
  const customersItems = [1, 2, 3, 4, 5].map((i) =>
    getTranslation(`batteryScrap.customers.item${i}`, locale),
  );

  return (
    <main>
      <PageBanner
        breadcrumbs={[
          { label: getTranslation("common.home", locale), href: "/" },
          {
            label: getTranslation(
              "batteryScrap.banner.breadcrumbServices",
              locale,
            ),
            href: "/services",
          },
          { label: getTranslation("header.batteryScrap", locale) },
        ]}
        subtitle={getTranslation("batteryScrap.banner.subtitle", locale)}
        title={getTranslation("batteryScrap.banner.title", locale)}
        bgImage="https://images.unsplash.com/photo-1642801069630-bbb4d78061be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmF0dGVyeSUyMHNjcmFwfGVufDB8fDB8fHww"
        description={getTranslation("batteryScrap.banner.description", locale)}
      />
      <InfoListSection
        title={getTranslation("batteryScrap.materials.title", locale)}
        subtitle={getTranslation("batteryScrap.materials.subtitle", locale)}
        items={materialsItems}
        image={{
          src: "/images/own/battery-scrap.jpg",
          alt: "Materials we buy",
        }}
        imagePosition="start"
      />
      <InfoListSection
        title={getTranslation("batteryScrap.customers.title", locale)}
        subtitle={getTranslation("batteryScrap.customers.subtitle", locale)}
        items={customersItems}
        image={{
          src: "https://images.unsplash.com/photo-1642801069630-bbb4d78061be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmF0dGVyeSUyMHNjcmFwfGVufDB8fDB8fHww",
          alt: "Customers we serve",
        }}
        imagePosition="end"
        className="bg-section-bg-1"
      />
      {/* <CollectionProcess /> */}
    </main>
  );
}
