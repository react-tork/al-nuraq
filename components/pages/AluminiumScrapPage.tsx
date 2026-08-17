"use client";

import PageBanner from "@/components/common/PageBanner";
import InfoListSection from "@/components/common/InfoListSection";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, type Locale } from "@/lib/i18n";
import { getPageBannerProps, pageDefinitions } from "@/lib/pages";
import { getTranslation } from "@/lib/translations";
import CollectionProcess from "@/components/scrap/CollectionProcess";

export default function AluminiumScrapPage() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;

  const materialsItems = [1, 2, 3, 4, 5, 6].map((i) =>
    getTranslation(`aluminiumScrap.materials.item${i}`, locale),
  );
  const customersItems = [1, 2, 3, 4, 5].map((i) =>
    getTranslation(`aluminiumScrap.customers.item${i}`, locale),
  );

  return (
    <main>
      <PageBanner
        breadcrumbs={[
          { label: getTranslation("common.home", locale), href: "/" },
          {
            label: getTranslation(
              "aluminiumScrap.banner.breadcrumbServices",
              locale,
            ),
            href: "/services",
          },
          { label: getTranslation("header.aluminiumScrap", locale) },
        ]}
        subtitle={getTranslation("aluminiumScrap.banner.subtitle", locale)}
        title={getTranslation("aluminiumScrap.banner.title", locale)}
        bgImage="https://images.unsplash.com/photo-1561503412-852800622772?w=1000&h=600&fit=crop&auto=format"
        description={getTranslation(
          "aluminiumScrap.banner.description",
          locale,
        )}
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
        title={getTranslation("aluminiumScrap.materials.title", locale)}
        subtitle={getTranslation("aluminiumScrap.materials.subtitle", locale)}
        items={materialsItems}
        image={{
          src: "https://images.unsplash.com/photo-1657742239061-64b6de9e0c4a?q=80&w=1330&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Materials we buy",
        }}
        imagePosition="start"
      />
      <InfoListSection
        title={getTranslation("aluminiumScrap.customers.title", locale)}
        subtitle={getTranslation("aluminiumScrap.customers.subtitle", locale)}
        items={customersItems}
        image={{
          src: "https://images.unsplash.com/photo-1727372416969-6cb1f1696f83?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Customers we serve",
        }}
        imagePosition="end"
        className="bg-section-bg-1"
      />
      <CollectionProcess />
    </main>
  );
}
