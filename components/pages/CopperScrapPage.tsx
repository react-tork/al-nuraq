"use client";

import PageBanner from "@/components/common/PageBanner";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, type Locale } from "@/lib/i18n";
import { getPageBannerProps, pageDefinitions } from "@/lib/pages";

export default function CopperScrapPage() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;

  return (
    <main>
      <PageBanner {...getPageBannerProps(pageDefinitions.copperScrap, locale)} />
      <section className="container py-60px" />
    </main>
  );
}
