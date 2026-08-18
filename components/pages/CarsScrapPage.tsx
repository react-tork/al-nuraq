"use client";

import PageBanner from "@/components/common/PageBanner";
import InfoListSection from "@/components/common/InfoListSection";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, type Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/translations";
import CollectionProcess from "@/components/scrap/CollectionProcess";

export default function CarsScrapPage() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;

  const materialsItems = [1, 2, 3, 4, 5, 6].map((i) =>
    getTranslation(`carsScrap.materials.item${i}`, locale),
  );
  const customersItems = [1, 2, 3, 4, 5].map((i) =>
    getTranslation(`carsScrap.customers.item${i}`, locale),
  );

  return (
    <main>
      <PageBanner
        breadcrumbs={[
          { label: getTranslation("common.home", locale), href: "/" },
          {
            label: getTranslation(
              "carsScrap.banner.breadcrumbServices",
              locale,
            ),
            href: "/services",
          },
          { label: getTranslation("header.carsScrap", locale) },
        ]}
        subtitle={getTranslation("carsScrap.banner.subtitle", locale)}
        title={getTranslation("carsScrap.banner.title", locale)}
        bgImage="https://images.unsplash.com/photo-1565689666646-2596ef8d8b8e?w=1000&h=600&fit=crop&auto=format"
        description={getTranslation(
          "carsScrap.banner.description",
          locale,
        )}
      />
      <InfoListSection
        title={getTranslation("carsScrap.materials.title", locale)}
        subtitle={getTranslation("carsScrap.materials.subtitle", locale)}
        items={materialsItems}
        image={{
          src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1330&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Materials we buy",
        }}
        imagePosition="start"
      />
      <InfoListSection
        title={getTranslation("carsScrap.customers.title", locale)}
        subtitle={getTranslation("carsScrap.customers.subtitle", locale)}
        items={customersItems}
        image={{
          src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Customers we serve",
        }}
        imagePosition="end"
        className="bg-section-bg-1"
      />
      {/* <CollectionProcess /> */}
    </main>
  );
}
