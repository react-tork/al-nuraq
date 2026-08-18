"use client";

import PageBanner from "@/components/common/PageBanner";
import InfoListSection from "@/components/common/InfoListSection";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, type Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/translations";
import CollectionProcess from "@/components/scrap/CollectionProcess";

export default function HouseholdScrapPage() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;

  const materialsItems = [1, 2, 3, 4, 5, 6].map((i) =>
    getTranslation(`householdScrap.materials.item${i}`, locale),
  );
  const customersItems = [1, 2, 3, 4, 5].map((i) =>
    getTranslation(`householdScrap.customers.item${i}`, locale),
  );

  return (
    <main>
      <PageBanner
        breadcrumbs={[
          { label: getTranslation("common.home", locale), href: "/" },
          {
            label: getTranslation(
              "householdScrap.banner.breadcrumbServices",
              locale,
            ),
            href: "/services",
          },
          { label: getTranslation("header.householdScrap", locale) },
        ]}
        subtitle={getTranslation("householdScrap.banner.subtitle", locale)}
        title={getTranslation("householdScrap.banner.title", locale)}
        bgImage="https://images.unsplash.com/photo-1556912173-3db9963f2db6?w=1000&h=600&fit=crop&auto=format"
        description={getTranslation(
          "householdScrap.banner.description",
          locale,
        )}
      />
      <InfoListSection
        title={getTranslation("householdScrap.materials.title", locale)}
        subtitle={getTranslation("householdScrap.materials.subtitle", locale)}
        items={materialsItems}
        image={{
          src: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1330&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Materials we buy",
        }}
        imagePosition="start"
      />
      <InfoListSection
        title={getTranslation("householdScrap.customers.title", locale)}
        subtitle={getTranslation("householdScrap.customers.subtitle", locale)}
        items={customersItems}
        image={{
          src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Customers we serve",
        }}
        imagePosition="end"
        className="bg-section-bg-1"
      />
      {/* <CollectionProcess /> */}
    </main>
  );
}
