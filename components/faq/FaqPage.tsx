"use client";

import PageBanner from "@/components/common/PageBanner";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, type Locale } from "@/lib/i18n";
import { getPageBannerProps, pageDefinitions } from "@/lib/pages";
import FaqAccordion from "@/components/faq/FaqAccordion";
import BlogSidebar from "@/components/faq/BlogSidebar";
import Counter from "@/components/home/Counter";
import NewsBlog from "@/components/home/NewsBlog";

export default function FaqPage() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;

  return (
    <main>
      <PageBanner {...getPageBannerProps(pageDefinitions.faq, locale)} />
      <section className="container pt-30 pb-100px">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-30px">
            <FaqAccordion />
            <BlogSidebar />
        </div>
      </section>
      <Counter />
      <div className="mt-10 md:mt-20">
      <NewsBlog />
      </div>
    </main>
  );
}
