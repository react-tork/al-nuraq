"use client";

import PageBanner from "@/components/common/PageBanner";
import InfoListSection from "@/components/common/InfoListSection";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, type Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/translations";
import CollectionProcess from "@/components/scrap/CollectionProcess";

export default function ElectricalPanelsScrapPage() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;

  const materialsItems = [1, 2, 3, 4, 5, 6].map((i) =>
    getTranslation(`electricalPanelsScrap.materials.item${i}`, locale),
  );
  const customersItems = [1, 2, 3, 4, 5].map((i) =>
    getTranslation(`electricalPanelsScrap.customers.item${i}`, locale),
  );

  return (
    <main>
      <PageBanner
        breadcrumbs={[
          { label: getTranslation("common.home", locale), href: "/" },
          {
            label: getTranslation(
              "electricalPanelsScrap.banner.breadcrumbServices",
              locale,
            ),
            href: "/services",
          },
          { label: getTranslation("header.electricalPanelsScrap", locale) },
        ]}
        subtitle={getTranslation("electricalPanelsScrap.banner.subtitle", locale)}
        title={getTranslation("electricalPanelsScrap.banner.title", locale)}
        bgImage="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1000&h=600&fit=crop&auto=format"
        description={getTranslation(
          "electricalPanelsScrap.banner.description",
          locale,
        )}
      />
      <InfoListSection
        title={getTranslation("electricalPanelsScrap.materials.title", locale)}
        subtitle={getTranslation("electricalPanelsScrap.materials.subtitle", locale)}
        items={materialsItems}
        image={{
          src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1330&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Materials we buy",
        }}
        imagePosition="start"
      />
      <InfoListSection
        title={getTranslation("electricalPanelsScrap.customers.title", locale)}
        subtitle={getTranslation("electricalPanelsScrap.customers.subtitle", locale)}
        items={customersItems}
        image={{
          src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Customers we serve",
        }}
        imagePosition="end"
        className="bg-section-bg-1"
      />
      {/* <CollectionProcess /> */}
    </main>
  );
}
