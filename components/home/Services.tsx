"use client";

import { useState } from "react";
import Image from "next/image";

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
    title: string;
    desc: string;
}

const services: ServiceCard[] = [
    {
        icon: "/images/icons/icon-img/21.png",
        title: "Buy a home",
        desc: "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
    },
    {
        icon: "/images/icons/icon-img/22.png",
        title: "Rent a home",
        desc: "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
    },
    {
        icon: "/images/icons/icon-img/23.png",
        title: "Sell a home",
        desc: "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
    },
];

/* Original: card 2 has `active` by default (its hover-line bar is
   shown full-width + its "Find A Home" link is secondary-color). */
const defaultActiveIndex = 1;

export default function Services() {
    const [activeIndex, setActiveIndex] = useState<number>(defaultActiveIndex);

    return (
        <>
            {/* ==================== services section ==================== */}
            <section className="bg-section-bg-1">
                <div className="container pt-30 pb-90px">
                    {/* section heading */}
                    <div className="text-center mb-50px">
                        <p className="text-sm md:text-15px lg:text-base text-secondary-color bg-secondary-color/10 capitalize mb-15px py-0.5 px-5 rounded-full inline-block font-semibold">
                            <span className="leading-1.3">Our Services</span>
                        </p>
                        <h2 className="text-2xl sm:text-3xl md:text-26px lg:text-3xl xl:text-44px text-heading-color font-bold">
                            <span className="leading-1.3"> Our Main Focus </span>
                        </h2>
                    </div>

                    {/* services cards */}
                    <div className="service-cards flex flex-wrap justify-center items-center text-center -mx-15px">
                        {services.map((service, i) => {
                            const active = i === activeIndex;
                            return (
                                <div
                                    key={service.title}
                                    className={`service-card basis-full sm:basis-1/2 lg:basis-1/3 px-15px mb-30px ${
                                        active ? "active" : ""
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
                                                className="hover:text-secondary-color leading-1.3 mb-1"
                                                href="service-details.html"
                                            >
                                                {service.title}
                                            </a>
                                        </h6>
                                        <p className="text-sm mb-25px">
                                            <span className="leading-1.8">{service.desc}</span>
                                        </p>
                                        <div className="text-sm text-color-1 font-bold">
                                            <a
                                                className={`find-service hover:text-secondary-color flex items-center justify-center ${
                                                    active ? "text-secondary-color" : ""
                                                }`}
                                                href="service-details.html"
                                            >
                                                Find A Home
                                                <i className="flaticon-right-arrow inline-block leading-1"></i>
                                            </a>
                                        </div>
                                        <span
                                            className={`hover-line absolute bottom-0 left-0 ${
                                                active ? "w-full" : "w-0"
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
