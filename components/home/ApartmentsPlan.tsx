"use client";

import { useState } from "react";
import Image from "next/image";

type PlanSpec = { label: string; value: string };

type ApartmentPlan = {
  id: number;
  tabLabel: string;
  title: string;
  description: string;
  specs: PlanSpec[];
  image: string;
};

const plans: ApartmentPlan[] = [
  {
    id: 0,
    tabLabel: "The Studio",
    title: "The Studio",
    description:
      "Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor.Incididunt labore et dolore magna aliqua. sed ayd minim veniam.",
    specs: [
      { label: "Total Area", value: "2800 Sq. Ft" },
      { label: "Bedroom", value: "150 Sq. Ft" },
      { label: "Bathroom", value: "45 Sq. Ft" },
      { label: "Belcony/Pets", value: "Allowed" },
      { label: "Lounge", value: "650 Sq. Ft" },
    ],
    image: "/images/others/10.png",
  },
  {
    id: 1,
    tabLabel: "Deluxe Portion",
    title: "Deluxe Portion",
    description:
      "Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor.Incididunt labore et dolore magna aliqua. sed ayd minim veniam.",
    specs: [
      { label: "Total Area", value: "2800 Sq. Ft" },
      { label: "Bedroom", value: "150 Sq. Ft" },
      { label: "Bathroom", value: "45 Sq. Ft" },
      { label: "Belcony/Pets", value: "Allowed" },
      { label: "Lounge", value: "650 Sq. Ft" },
    ],
    image: "/images/others/10.png",
  },
  {
    id: 2,
    tabLabel: "Penthouse",
    title: "Penthouse",
    description:
      "Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor.Incididunt labore et dolore magna aliqua. sed ayd minim veniam.",
    specs: [
      { label: "Total Area", value: "2800 Sq. Ft" },
      { label: "Bedroom", value: "150 Sq. Ft" },
      { label: "Bathroom", value: "45 Sq. Ft" },
      { label: "Belcony/Pets", value: "Allowed" },
      { label: "Lounge", value: "650 Sq. Ft" },
    ],
    image: "/images/others/10.png",
  },
  {
    id: 3,
    tabLabel: "Top Garden",
    title: "Top Garden",
    description:
      "Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor.Incididunt labore et dolore magna aliqua. sed ayd minim veniam.",
    specs: [
      { label: "Total Area", value: "2800 Sq. Ft" },
      { label: "Bedroom", value: "150 Sq. Ft" },
      { label: "Bathroom", value: "45 Sq. Ft" },
      { label: "Belcony/Pets", value: "Allowed" },
      { label: "Lounge", value: "650 Sq. Ft" },
    ],
    image: "/images/others/10.png",
  },
  {
    id: 4,
    tabLabel: "Double Height",
    title: "Double Height",
    description:
      "Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor.Incididunt labore et dolore magna aliqua. sed ayd minim veniam.",
    specs: [
      { label: "Total Area", value: "2800 Sq. Ft" },
      { label: "Bedroom", value: "150 Sq. Ft" },
      { label: "Bathroom", value: "45 Sq. Ft" },
      { label: "Belcony/Pets", value: "Allowed" },
      { label: "Lounge", value: "650 Sq. Ft" },
    ],
    image: "/images/others/10.png",
  },
];

export default function ApartmentsPlan() {
  // "Deluxe Portion" (index 1) is active by default in the original HTML
 const [activeTab, setActiveTab] = useState(1);
  const [contentVisible, setContentVisible] = useState(true);
  const activePlan = plans[activeTab];

  const handleTabClick = (index: number) => {
    if (index === activeTab) return;
    setActiveTab(index);       // পুরনো content সাথে সাথে সরে যায়, নতুন content মাউন্ট হয়
    setContentVisible(false);  // নতুন content শুরুতে opacity-0
    window.setTimeout(() => {
      setContentVisible(true); // ১৫০ms পর opacity-100 (snap, animate না)
    }, 150);

}

  return (
    <section>
      <div className="container pb-30">
        {/* section heading */}
        <div className="text-center mb-50px">
          <p className="text-sm md:text-15px lg:text-base text-secondary-color bg-secondary-color/10 capitalize mb-15px py-0.5 px-5 rounded-full inline-block font-semibold">
            <span className="leading-1.3">Apartment Sketch</span>
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-26px lg:text-3xl xl:text-44px text-heading-color font-bold">
            <span className="leading-1.3">Apartments Plan</span>
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
                {plan.tabLabel}
              </button>
            ))}
          </div>

          <div className="tab-contents">
            <div className={contentVisible ? "opacity-100" : "opacity-0"}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-30px gap-y-50px">
                <div className="p-30px md:p-70px bg-secondary-color">
                  <h6 className="text-xl md:text-22px lg:text-26px xl:text-3xl font-bold text-white mb-15px leading-1.3">
                    <span className="leading-1.3">{activePlan.title}</span>
                  </h6>
                  <p className="text-sm lg:text-base text-white mb-10">
                    <span className="leading-1.8">{activePlan.description}</span>
                  </p>
                  <ul className="flex flex-col gap-y-10px items-stretch">
                    {activePlan.specs.map((spec) => (
                      <li
                        key={spec.label}
                        className="text-sm md:text-base text-white font-semibold relative z-0 before:content-[''] before:w-full before:h-1 before:border-b before:border-dashed before:border-white before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:-z-1"
                      >
                        <ul className="flex justify-between items-center">
                          <li className="leading-1.8 pr-10px bg-secondary-color">
                            {spec.label}
                          </li>
                          <li className="leading-1.8 pl-10px bg-secondary-color">
                            {spec.value}
                          </li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Image
                    src={activePlan.image}
                    alt={activePlan.title}
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