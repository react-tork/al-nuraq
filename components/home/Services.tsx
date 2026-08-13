"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, type Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/translations";

/* ------------------------------------------------------------------ */
/*  Services — homepage "services section"                             */
/*  Reproduced from quarter-rtl/index.html (services section).         */
/*  The original animates an `.active` class on each `.service-card`   */
/*  via `service.js` (mouseenter → remove `active` from all, add to    */
/*  the hovered one). That drives the red bottom bar (`.hover-line`)   */
/*  sliding from w-0 → w-full and the "Find A Home" link turning       */
/*  secondary-color. Reproduced here with React state + Tailwind.      */
/*  Card 2 is `active` by default in the original static HTML.         */
/* ------------------------------------------------------------------ */

interface ServiceCard {
    icon: string;
    titleKey: string;
    descKey: string;
}

const services: ServiceCard[] = [
    {
        icon: "/images/icons/icon-img/21.png",
        titleKey: "home.services.service1Title",
        descKey: "home.services.service1Desc",
    },
    {
        icon: "/images/icons/icon-img/22.png",
        titleKey: "home.services.service2Title",
        descKey: "home.services.service2Desc",
    },
    {
        icon: "/images/icons/icon-img/23.png",
        titleKey: "home.services.service3Title",
        descKey: "home.services.service3Desc",
    },
    {
        icon: "/images/icons/icon-img/24.png",
        titleKey: "home.services.service4Title",
        descKey: "home.services.service4Desc",
    },
];

/* Original: card 2 has `active` by default (its hover-line bar is
   shown full-width + its "Find A Home" link is secondary-color). */
const defaultActiveIndex = 1;

export default function Services() {
    const pathname = usePathname();
    const locale = getLocaleFromPathname(pathname) as Locale;
    const [activeIndex, setActiveIndex] = useState<number>(defaultActiveIndex);

    return (
        <>
            {/* ==================== services section ==================== */}
            <section className="bg-section-bg-1 mb-8 md:mb-12">
                <div className="container pt-24 pb-90px  ">
                    {/* section heading */}
                    <div className="text-center mb-50px">
                        <p className="text-sm md:text-15px lg:text-base text-secondary-color bg-secondary-color/10 capitalize mb-15px py-0.5 px-5 rounded-full inline-block font-semibold">
                            <span className="leading-1.3">{getTranslation('home.services.subtitle', locale)}</span>
                        </p>
                        <h2 className="text-2xl sm:text-3xl md:text-26px lg:text-3xl xl:text-44px text-heading-color font-bold">
                            <span className="leading-1.3">{getTranslation('home.services.title', locale)}</span>
                        </h2>
                    </div>

                    {/* services cards */}
                    <div className="service-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-30px text-center">
                        {services.map((service, i) => {
                            const active = i === activeIndex;
                            return (
                                <div
                                    key={service.titleKey}
                                    className={`service-card ${active ? "active" : ""
                                        }`}
                                    onMouseEnter={() => setActiveIndex(i)}
                                >
                                    <div className="border border-border-color-1 shadow-box-shadow-1 bg-white relative py-10 pb-35px px-30px transition-all duration-300">
                                        <div className="text-center mb-5">
                                            <Image
                                                src={service.icon}
                                                alt=""
                                                className="inline-block"
                                                width={185}
                                                height={140}
                                            />
                                        </div>
                                        <h6 className="text-lg md:text-xl lg:text-22px xl:text-2xl text-heading-color font-bold">
                                            <a
                                                className="hover:text-secondary-color leading-1.3 mb-1 line-clamp-1"
                                                href="service-details.html"
                                            >
                                                {getTranslation(service.titleKey, locale)}
                                            </a>
                                        </h6>
                                        <p className="text-sm mb-25px line-clamp-3">
                                            <span className="leading-1.8 line-clamp-3">{getTranslation(service.descKey, locale)}</span>
                                        </p>
                                        <div className="text-sm text-color-1 font-bold">
                                            <a
                                                className={`find-service hover:text-secondary-color flex items-center justify-center ${active ? "text-secondary-color" : ""
                                                    }`}
                                                href="service-details.html"
                                            >
                                                {getTranslation('home.services.findAHome', locale)}
                                                <i className="flaticon-right-arrow inline-block leading-1"></i>
                                            </a>
                                        </div>
                                        <span
                                            className={`hover-line absolute bottom-0 left-0 ${active ? "w-full" : "w-0"
                                                } h-1 bg-secondary-color transition-all duration-300 block`}
                                        ></span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
