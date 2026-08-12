"use client";

import PageBanner from "@/components/common/PageBanner";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import TeamSection from "@/components/about/TeamSection";
import Testimonials from "@/components/home/Testimonials";
import NewsBlog from "@/components/home/NewsBlog";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, type Locale } from "@/lib/i18n";
import { getPageBannerProps, pageDefinitions } from "@/lib/pages";

export default function AboutPage() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;

  return (
    <main>
      <PageBanner {...getPageBannerProps(pageDefinitions.about, locale)} />
     <About />
      <Services />
      <TeamSection />
      <Testimonials />
      <NewsBlog />
    </main>
  );
}
