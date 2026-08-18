"use client";

import PageBanner from "@/components/common/PageBanner";
import WhatWeBuy from "@/components/home/WhatWeBuy";
import CollectionProcess from "@/components/scrap/CollectionProcess";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, type Locale } from "@/lib/i18n";
import { getPageBannerProps, pageDefinitions } from "@/lib/pages";
import { getTranslation } from "@/lib/translations";

export default function MetalScrapPage() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;

  const materialsItems = [1, 2, 3, 4, 5, 6].map((i) =>
    getTranslation(`metalScrap.materials.item${i}`, locale),
  );
  const customersItems = [1, 2, 3, 4, 5].map((i) =>
    getTranslation(`metalScrap.customers.item${i}`, locale),
  );

  return (
    <main>
      <PageBanner
        breadcrumbs={[
          { label: getTranslation("common.home", locale), href: "/" },
          {
            label: getTranslation("header.services", locale),
            href: "/services",
          },
        ]}
        subtitle={getTranslation("services.banner.subtitle", locale)}
        title={getTranslation("services.banner.title", locale)}
        bgImage="https://images.unsplash.com/photo-1638983851342-63e1aa939a7a?w=600&h=400&fit=crop&auto=format"
        description={getTranslation("services.banner.description", locale)}
      />
      <WhatWeBuy />
      {/* <CollectionProcess /> */}
    </main>
  );
}
