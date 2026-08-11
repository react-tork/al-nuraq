"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, type Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/translations";

type PlanSpec = { labelKey: string; valueKey: string };

type ScrapPlan = {
  id: number;
  tabLabelKey: string;
  titleKey: string;
  descriptionKey: string;
  specs: PlanSpec[];
  image: string;
};

const plans: ScrapPlan[] = [
  {
    id: 1,
    tabLabelKey: "home.apartmentsPlan.tab1",
    titleKey: "home.apartmentsPlan.tab1Title",
    descriptionKey: "home.apartmentsPlan.tab1Desc",
    specs: [
      { labelKey: "home.apartmentsPlan.specLabel1", valueKey: "home.apartmentsPlan.specValue1" },
      { labelKey: "home.apartmentsPlan.specLabel2", valueKey: "home.apartmentsPlan.specValue2" },
      { labelKey: "home.apartmentsPlan.specLabel3", valueKey: "home.apartmentsPlan.specValue2" },
    ],
    image: "/images/others/10.png",
  },
  {
    id: 2,
    tabLabelKey: "home.apartmentsPlan.tab2",
    titleKey: "home.apartmentsPlan.tab2Title",
    descriptionKey: "home.apartmentsPlan.tab2Desc",
    specs: [
      { labelKey: "home.apartmentsPlan.specLabel1", valueKey: "home.apartmentsPlan.specValue1" },
      { labelKey: "home.apartmentsPlan.specLabel2", valueKey: "home.apartmentsPlan.specValue2" },
      { labelKey: "home.apartmentsPlan.specLabel3", valueKey: "home.apartmentsPlan.specValue3" },
    ],
    image: "/images/others/10.png",
  },
  {
    id: 3,
    tabLabelKey: "home.apartmentsPlan.tab3",
    titleKey: "home.apartmentsPlan.tab3Title",
    descriptionKey: "home.apartmentsPlan.tab3Desc",
    specs: [
      { labelKey: "home.apartmentsPlan.specLabel1", valueKey: "home.apartmentsPlan.specValue1" },
      { labelKey: "home.apartmentsPlan.specLabel2", valueKey: "home.apartmentsPlan.specValue2" },
      { labelKey: "home.apartmentsPlan.specLabel3", valueKey: "home.apartmentsPlan.specValue2" },
    ],
    image: "/images/others/10.png",
  },
  {
    id: 4,
    tabLabelKey: "home.apartmentsPlan.tab4",
    titleKey: "home.apartmentsPlan.tab4Title",
    descriptionKey: "home.apartmentsPlan.tab4Desc",
    specs: [
      { labelKey: "home.apartmentsPlan.specLabel1", valueKey: "home.apartmentsPlan.specValue1" },
      { labelKey: "home.apartmentsPlan.specLabel2", valueKey: "home.apartmentsPlan.specValue2" },
      { labelKey: "home.apartmentsPlan.specLabel3", valueKey: "home.apartmentsPlan.specValue2" },
    ],
    image: "/images/others/10.png",
  },
  {
    id: 5,
    tabLabelKey: "home.apartmentsPlan.tab5",
    titleKey: "home.apartmentsPlan.tab5Title",
    descriptionKey: "home.apartmentsPlan.tab5Desc",
    specs: [
      { labelKey: "home.apartmentsPlan.specLabel1", valueKey: "home.apartmentsPlan.specValue1" },
      { labelKey: "home.apartmentsPlan.specLabel2", valueKey: "home.apartmentsPlan.specValue2" },
      { labelKey: "home.apartmentsPlan.specLabel3", valueKey: "home.apartmentsPlan.specValue4" },
    ],
    image: "/images/others/10.png",
  },
];

export default function ApartmentsPlan() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;
  // "Deluxe Portion" (index 1) is active by default in the original HTML
 const [activeTab, setActiveTab] = useState(1);
  const [contentVisible, setContentVisible] = useState(true);
  const activePlan = plans[activeTab];

  const handleTabClick = (index: number) => {
    if (index === activeTab) return;
    setActiveTab(index);
    setContentVisible(false);
    window.setTimeout(() => {
      setContentVisible(true);
    }, 150);
  }

  return (
    <section>
      <div className="container pb-30">
        {/* section heading */}
        <div className="text-center mb-50px">
          <p className="text-sm md:text-15px lg:text-base text-secondary-color bg-secondary-color/10 capitalize mb-15px py-0.5 px-5 rounded-full inline-block font-semibold">
            <span className="leading-1.3">{getTranslation('home.apartmentsPlan.subtitle', locale)}</span>
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-26px lg:text-3xl xl:text-44px text-heading-color font-bold">
            <span className="leading-1.3">{getTranslation('home.apartmentsPlan.title', locale)}</span>
          </h2>
        </div>

        {/* plan tab */}
        <div className="tab plan-tab">
          <div className="tab-links flex flex-wrap items-center justify-center gap-x-5 lg:gap-x-30px xl:gap-x-50px gap-y-10px text-sm lg:text-lg xl:text-xl text-heading-color mb-50px">
            {plans.map((plan, index) => (
              <button
                key={plan.id}
                onClick={() => handleTabClick(index)}
                className={`${
                  activeTab === index ? "active" : ""
                } p-1px border-b-2 border-transparent font-semibold relative leading-1.2 after:content-[''] after:w-10px after:h-10px after:border-3px after:border-white after:bg-transparent after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:translate-y-1/2 after:z-10 after:rounded-100%`}
              >
                {getTranslation(plan.tabLabelKey, locale)}
              </button>
            ))}
          </div>

          <div className="tab-contents">
            <div className={contentVisible ? "opacity-100" : "opacity-0"}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-30px gap-y-50px">
                <div className="p-30px md:p-70px bg-secondary-color">
                  <h6 className="text-xl md:text-22px lg:text-26px xl:text-3xl font-bold text-white mb-15px leading-1.3">
                    <span className="leading-1.3">{getTranslation(activePlan.titleKey, locale)}</span>
                  </h6>
                  <p className="text-sm lg:text-base text-white mb-10">
                    <span className="leading-1.8">{getTranslation(activePlan.descriptionKey, locale)}</span>
                  </p>
                  <ul className="flex flex-col gap-y-10px items-stretch">
                    {activePlan.specs.map((spec) => (
                      <li
                        key={spec.labelKey}
                        className="text-sm md:text-base text-white font-semibold relative z-0 before:content-[''] before:w-full before:h-1 before:border-b before:border-dashed before:border-white before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:-z-1"
                      >
                        <ul className="flex justify-between items-center">
                          <li className="leading-1.8 ps-10px bg-secondary-color">
                            {getTranslation(spec.labelKey, locale)}
                          </li>
                          <li className="leading-1.8 pe-10px bg-secondary-color">
                            {getTranslation(spec.valueKey, locale)}
                          </li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Image
                    src={activePlan.image}
                    alt={getTranslation(activePlan.titleKey, locale)}
                    width={640}
                    height={640}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}