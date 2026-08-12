"use client";

import PageBanner from "@/components/common/PageBanner";
import ServicesAreas from "@/components/service-areas/ServiceAreas"
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, type Locale } from "@/lib/i18n";
import { getPageBannerProps, pageDefinitions } from "@/lib/pages";

export default function ServiceAreasPage() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;

  return (
    <main>
      <PageBanner {...getPageBannerProps(pageDefinitions.serviceAreas, locale)} />
      <ServicesAreas/>
    </main>
  );
}
