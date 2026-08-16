"use client";

import { usePathname } from "next/navigation";
import { getLocaleFromPathname, type Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/translations";

type TimelineStep = {
  numberKey: string; // "home.collectionProcess.step1Number"...
  titleKey: string;
};

type HowItWorksProps = {
  sectionLabel?: string;
  heading?: string;
  intro?: string;
  steps?: TimelineStep[];
};

const defaultSteps: TimelineStep[] = [
  {
    numberKey: "home.collectionProcess.step1Number",
    titleKey: "home.collectionProcess.step1Title",
  },
  {
    numberKey: "home.collectionProcess.step2Number",
    titleKey: "home.collectionProcess.step2Title",
  },
  {
    numberKey: "home.collectionProcess.step3Number",
    titleKey: "home.collectionProcess.step3Title",
  },
  {
    numberKey: "home.collectionProcess.step4Number",
    titleKey: "home.collectionProcess.step4Title",
  },
];

export default function HowItWorks({
  sectionLabel,
  heading,
  intro,
  steps = defaultSteps,
}: HowItWorksProps) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;

  const resolvedSectionLabel = sectionLabel ?? getTranslation("home.collectionProcess.subtitle", locale);
  const resolvedHeading = heading ?? getTranslation("home.collectionProcess.title", locale);

  return (
    <section className="container pt-16 md:pt-20 pb-12 md:pb-18">
      {/* section heading */}
      <div className="text-center mb-[50px]">
        <p className="animate__animated animate__fadeInUp text-sm md:text-[15px] lg:text-base text-secondary-color bg-secondary-color/10 uppercase mb-[15px] py-0.5 px-5 rounded-full inline-block font-semibold tracking-wide">
          {resolvedSectionLabel}
        </p>
        <h2 className="animate__animated animate__fadeInUp text-2xl sm:text-3xl md:text-[26px] lg:text-3xl xl:text-[44px] text-heading-color font-bold">
          <span className="leading-[1.3]">{resolvedHeading}</span>
        </h2>
      </div>

      {/* timeline row — horizontal on all breakpoints; scrolls on mobile */}
      <div className="scrollbar-hide overflow-x-auto snap-x snap-mandatory md:overflow-visible w-full md:w-3/4 mx-auto">
        <div className="flex items-start gap-[30px] md:gap-0 md:justify-between min-w-max md:min-w-0 w-full">
          {steps.map((step, index) => (
            <div
              key={step.numberKey}
              className="animate__animated animate__fadeInUp snap-center md:snap-none flex-1 md:flex-none md:w-1/5 min-w-[220px] md:min-w-0 text-center px-[15px]"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* circle + connecting line */}
              <div className="relative flex items-center justify-center mb-[25px]">
                {/* connecting line + arrowhead behind the circle */}
                {index < steps.length - 1 && (
                  <span className="absolute top-1/2 left-2/7 w-full -translate-y-1/2 rtl:-translate-x-full -z-1 hidden md:flex items-center">
                    <span className="flex-1 h-[3px] bg-gradient-to-r rtl:bg-gradient-to-l from-secondary-color via-secondary-color/40 to-secondary-color/40" />
                    <svg
                      className="w-[14px] h-[14px] text-secondary-color/50 flex-shrink-0 rtl:rotate-180"
                      viewBox="0 0 14 14"
                      fill="currentColor"
                    >
                      <path d="M0 0 L14 7 L0 14 Z" />
                    </svg>
                  </span>
                )}
                <span className="relative z-10 w-[70px] h-[70px] rounded-full bg-white flex items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-secondary-color/10 border-2 border-secondary-color" />
                  <span className="relative text-xl md:text-[22px] text-secondary-color font-bold">
                    {getTranslation(step.numberKey, locale)}
                  </span>
                </span>
              </div>

              {/* title + description */}
              <h3 className="text-lg md:text-xl text-heading-color font-bold mb-[10px] min-h-[56px] md:min-h-[64px] flex items-center justify-center">
                {getTranslation(step.titleKey, locale)}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
