"use client";

import PageBanner from "@/components/common/PageBanner";
import InfoListSection from "@/components/common/InfoListSection";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, type Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/translations";
import CollectionProcess from "@/components/scrap/CollectionProcess";

export default function ConstructionScrapPage() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;

  const materialsItems = [1, 2, 3, 4, 5, 6].map((i) =>
    getTranslation(`constructionScrap.materials.item${i}`, locale),
  );
  const customersItems = [1, 2, 3, 4, 5].map((i) =>
    getTranslation(`constructionScrap.customers.item${i}`, locale),
  );

  return (
    <main>
      <PageBanner
        breadcrumbs={[
          { label: getTranslation("common.home", locale), href: "/" },
          {
            label: getTranslation(
              "constructionScrap.banner.breadcrumbServices",
              locale,
            ),
            href: "/services",
          },
          { label: getTranslation("header.constructionScrap", locale) },
        ]}
        subtitle={getTranslation("constructionScrap.banner.subtitle", locale)}
        title={getTranslation("constructionScrap.banner.title", locale)}
        bgImage="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=1000&h=600&fit=crop&auto=format"
        description={getTranslation(
          "constructionScrap.banner.description",
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
        title={getTranslation("constructionScrap.materials.title", locale)}
        subtitle={getTranslation(
          "constructionScrap.materials.subtitle",
          locale,
        )}
        items={materialsItems}
        image={{
          src: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=1000&h=600&fit=crop&auto=format",
          alt: "Materials we buy",
        }}
        imagePosition="start"
      />
      <InfoListSection
        title={getTranslation("constructionScrap.customers.title", locale)}
        subtitle={getTranslation(
          "constructionScrap.customers.subtitle",
          locale,
        )}
        items={customersItems}
        image={{
          src: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=1000&h=600&fit=crop&auto=format",
          alt: "Customers we serve",
        }}
        imagePosition="end"
        className="bg-section-bg-1"
      />
      <CollectionProcess />
    </main>
  );
}
