"use client";

import PageBanner from "@/components/common/PageBanner";
import ServicesSection from "@/components/industrial-solutions/ServicesSection";
import LongTerm from "@/components/industrial-solutions/LongTerm";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, type Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/translations";

export default function IndustrialSolutionsPage() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;

  const services = [1, 2, 3, 4, 5, 6].map((i) => ({
    icon: [
      "flaticon-house",
      "flaticon-mortgage",
      "flaticon-operator",
      "flaticon-house-1",
      "flaticon-house-3",
      "flaticon-official-documents",
    ][i - 1],
    title: getTranslation(`industrialSolutions.services.service${i}Title`, locale),
    description: getTranslation(`industrialSolutions.services.service${i}Desc`, locale),
    href: [
      "/scrap/industrial-scrap",
      "/scrap/machinery-scrap",
      "/scrap/metal-scrap",
      "/scrap/cable-wire-scrap",
      "/scrap/industrial",
      "/scrap/construction",
    ][i - 1],
  }));

  return (
    <main>
      <PageBanner
        breadcrumbs={[
          { label: getTranslation("industrialSolutions.banner.breadcrumbHome", locale), href: "/" },
          { label: getTranslation("industrialSolutions.banner.breadcrumbIndustrialSolutions", locale), href: "/industrial-solutions" },
          { label: getTranslation("industrialSolutions.banner.breadcrumbB2B", locale) },
        ]}
        subtitle={getTranslation("industrialSolutions.banner.subtitle", locale)}
        title={getTranslation("industrialSolutions.banner.title", locale)}
        description={getTranslation("industrialSolutions.banner.description", locale)}
        bgImage="https://images.unsplash.com/photo-1720036236855-9a1a2e4d3f26?w=1200&h=700&fit=crop&auto=format"
      />
      <ServicesSection
        sectionLabel={getTranslation("industrialSolutions.services.sectionLabel", locale)}
        heading={getTranslation("industrialSolutions.services.heading", locale)}
        services={services}
        learnMoreLabel={getTranslation("industrialSolutions.services.learnMore", locale)}
      />
      <LongTerm
        sectionLabel={getTranslation("industrialSolutions.longTerm.sectionLabel", locale)}
        heading={getTranslation("industrialSolutions.longTerm.heading", locale)}
        paragraphOne={getTranslation("industrialSolutions.longTerm.paragraphOne", locale)}
        paragraphTwo={getTranslation("industrialSolutions.longTerm.paragraphTwo", locale)}
        buttonLabel={getTranslation("industrialSolutions.longTerm.buttonLabel", locale)}
      />
    </main>
  );
}
