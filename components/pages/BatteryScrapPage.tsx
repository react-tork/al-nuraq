"use client";

import PageBanner from "@/components/common/PageBanner";
import InfoListSection from "@/components/common/InfoListSection";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, type Locale } from "@/lib/i18n";
import { getPageBannerProps, pageDefinitions } from "@/lib/pages";
import { getTranslation } from "@/lib/translations";

export default function BatteryScrapPage() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;

  const materialsItems = [1, 2, 3, 4, 5, 6].map((i) =>
    getTranslation(`batteryScrap.materials.item${i}`, locale)
  );
  const customersItems = [1, 2, 3, 4, 5].map((i) =>
    getTranslation(`batteryScrap.customers.item${i}`, locale)
  );

  return (
    <main>
      <PageBanner
        breadcrumbs={[
          { label: getTranslation("common.home", locale), href: "/" },
          { label: getTranslation("batteryScrap.banner.breadcrumbServices", locale), href: "/services" },
          { label: getTranslation("header.batteryScrap", locale) },
        ]}
        subtitle={getTranslation("batteryScrap.banner.subtitle", locale)}
        title={getTranslation("batteryScrap.banner.title", locale)}
        bgImage="https://images.unsplash.com/photo-1638983851342-63e1aa939a7a?w=1000&h=600&fit=crop&auto=format"
        description={getTranslation("batteryScrap.banner.description", locale)}
        primaryCta={{ label: getTranslation("contact.form.title", locale), href: "/contact" }}
        secondaryCta={{ label: getTranslation("footer.whatsapp", locale), href: "https://wa.me/966510679737" }}
      />
      <InfoListSection
        title={getTranslation("batteryScrap.materials.title", locale)}
        subtitle={getTranslation("batteryScrap.materials.subtitle", locale)}
        items={materialsItems}
        image={{ src: "https://images.unsplash.com/photo-1638983851342-63e1aa939a7a?w=1000&h=600&fit=crop&auto=format", alt: "Materials we buy" }}
        imagePosition="start"
      />
      <InfoListSection
        title={getTranslation("batteryScrap.customers.title", locale)}
        subtitle={getTranslation("batteryScrap.customers.subtitle", locale)}
        items={customersItems}
        image={{ src: "https://images.unsplash.com/photo-1638983851342-63e1aa939a7a?w=1000&h=600&fit=crop&auto=format", alt: "Customers we serve" }}
        imagePosition="end"
        className="bg-section-bg-1"
      />
    </main>
  );
}
