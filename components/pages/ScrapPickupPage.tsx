"use client";

import PageBanner from "@/components/common/PageBanner";
import PickupProcessSection from "@/components/pickup/PickupProcessSection";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, type Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/translations";

export default function ScrapPickupPage() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;

  const processSteps = [1, 2, 3, 4, 5, 6].map((i) => ({
    number: getTranslation(`scrapPickup.process.step${i}Number`, locale),
    title: getTranslation(`scrapPickup.process.step${i}Title`, locale),
    description: getTranslation(`scrapPickup.process.step${i}Desc`, locale),
  }));

  return (
    <main>
      <PageBanner
        breadcrumbs={[
          {
            label: getTranslation("scrapPickup.banner.breadcrumbHome", locale),
            href: "/",
          },
          {
            label: getTranslation(
              "scrapPickup.banner.breadcrumbScrapPickup",
              locale,
            ),
          },
        ]}
        subtitle={getTranslation("scrapPickup.banner.subtitle", locale)}
        title={getTranslation("scrapPickup.banner.title", locale)}
        description={getTranslation("scrapPickup.banner.description", locale)}
        bgImage="https://images.unsplash.com/photo-1722695694560-f452b0919d3a?w=1200&h=700&fit=crop&auto=format"
        primaryCta={{
          label: getTranslation("scrapPickup.banner.primaryCta", locale),
          href: "/contact",
        }}
        secondaryCta={{
          label: getTranslation("footer.whatsapp", locale),
          href: "https://wa.me/966559679148?text=Hello%20Al%20Nuraq%2C%20I%20would%20like%20to%20request%20a%20scrap%20pickup.",
        }}
      />
      <PickupProcessSection
        sectionLabel={getTranslation(
          "scrapPickup.process.sectionLabel",
          locale,
        )}
        heading={getTranslation("scrapPickup.process.heading", locale)}
        steps={processSteps}
      />

      {/* Important Note on Same-Day Collection */}
      <section className="bg-white mt-8 md:mt-16">
        <div className="container pb-[70px]">
          <div className="max-w-4xl mx-auto">
            <div className="relative border border-secondary-color/30 bg-secondary-color/5 rounded-lg p-8 md:p-10 overflow-hidden">
              {/* decorative accent — soft gold circle */}
              <div className="absolute -right-30px -top-30px w-[140px] h-[140px] rounded-full bg-secondary-color/10 blur-2xl" />

              <div className="relative flex items-start gap-5">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-[60px] h-[60px] rounded-full bg-secondary-color/10 border-2 border-secondary-color text-xl text-secondary-color">
                    <i className="fas fa-exclamation-triangle" />
                  </span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl lg:text-2xl text-heading-color font-bold mb-3">
                    {getTranslation("scrapPickup.note.title", locale)}
                  </h3>
                  <p className="text-sm md:text-base text-body-color leading-[1.8]">
                    {getTranslation("scrapPickup.note.description", locale)}
                  </p>
                </div>
              </div>

              <span className="absolute bottom-0 left-0 rtl:left-auto rtl:right-0 w-full h-1 bg-gradient-to-r from-secondary-color via-secondary-color/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
