// components/service-areas/ServiceAreas.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, type Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/translations";

import LocationArea from "./LocationArea";

export default function ServiceAreas() {
    const pathname = usePathname();
    const locale = getLocaleFromPathname(pathname) as Locale;

    return (
        <section>
            <div className="container pt-115px pb-90px">
                {/* section heading */}
                <div className="text-center mb-50px">
                    <p className="text-sm md:text-15px lg:text-base text-secondary-color bg-secondary-color/10 capitalize mb-15px py-0.5 px-5 rounded-full inline-block font-semibold">
                        <span className="leading-1.3">{getTranslation("serviceAreas.subtitle", locale)}</span>
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-26px lg:text-3xl xl:text-44px text-heading-color font-bold">
                        <span className="leading-1.3">{getTranslation("serviceAreas.title", locale)}</span>
                    </h2>
                    <p className="text-sm lg:text-base text-paragraph-color leading-1.8 w-1/2 text-center mx-auto">
                        {getTranslation("serviceAreas.description", locale)}
                    </p>
                </div>
                <LocationArea />
            </div>
        </section>
    );
}
