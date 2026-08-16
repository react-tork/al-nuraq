"use client";

import PageBanner from "@/components/common/PageBanner";
// import About from "@/components/home/About";
import Services from "@/components/home/Services";
import About3 from "@/components/about/About3";
import Testimonials from "@/components/home/Testimonials";
import NewsBlog from "@/components/home/NewsBlog";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, type Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/translations";

export default function AboutPage() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;

  return (
    <main>
      <PageBanner
        breadcrumbs={[
          { label: getTranslation("about.banner.breadcrumbHome", locale), href: "/" },
          { label: getTranslation("about.banner.breadcrumbAbout", locale), href: "/about" },
          { label: getTranslation("about.banner.breadcrumbCurrent", locale) },
        ]}
        title={getTranslation("about.banner.title", locale)}
        bgImage="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=1200&h=600&fit=crop&auto=format"
        description={getTranslation("about.banner.description", locale)}
      />
      {/* <About /> */}
      <About3
        sectionLabel={getTranslation("about.story.sectionLabel", locale)}
        heading={getTranslation("about.story.heading", locale)}
        paragraphOne={getTranslation("about.story.paragraphOne", locale)}
        paragraphTwo={getTranslation("about.story.paragraphTwo", locale)}
        paragraphThree={getTranslation("about.story.paragraphThree", locale)}
        buttonLabel={getTranslation("about.story.buttonLabel", locale)}
        buttonHref="/contact"
      />

      <Services />
      <Testimonials />
    </main>
  );
}
