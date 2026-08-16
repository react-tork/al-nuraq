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
      <ServicesSection />
      <LongTerm />
    </main>
  );
}
