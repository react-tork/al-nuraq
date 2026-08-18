"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, type Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/translations";

interface ServiceArea {
    id: string;
    provinceKey: string;
    cityKey: string;
    isPrimary: boolean;
    descriptionKey: string;
    materialKeys: string[];
    slug: string;
}

const serviceAreas: ServiceArea[] = [
    {
        id: "dammam",
        provinceKey: "serviceAreas.easternProvince",
        cityKey: "serviceAreas.dammam.city",
        isPrimary: true,
        descriptionKey: "serviceAreas.dammam.description",
        materialKeys: [
            "serviceAreas.materials.metalScrap",
            "serviceAreas.materials.industrialScrap",
            "serviceAreas.materials.copperCables",
            "serviceAreas.materials.machinery",
            "serviceAreas.materials.eScrap",
            "serviceAreas.materials.constructionScrap",
        ],
        slug: "/service-areas/dammam",
    },
    {
        id: "riyadh",
        provinceKey: "serviceAreas.centralProvince",
        cityKey: "serviceAreas.riyadh.city",
        isPrimary: true,
        descriptionKey: "serviceAreas.riyadh.description",
        materialKeys: [
            "serviceAreas.materials.metalScrap",
            "serviceAreas.materials.industrialScrap",
            "serviceAreas.materials.copperCables",
            "serviceAreas.materials.machinery",
            "serviceAreas.materials.eScrap",
            "serviceAreas.materials.constructionScrap",
        ],
        slug: "/service-areas/riyadh",
    },
    {
        id: "khobar",
        provinceKey: "serviceAreas.easternProvince",
        cityKey: "serviceAreas.khobar.city",
        isPrimary: false,
        descriptionKey: "serviceAreas.khobar.description",
        materialKeys: [
            "serviceAreas.materials.metalScrap",
            "serviceAreas.materials.copperCables",
            "serviceAreas.materials.eScrap",
        ],
        slug: "/service-areas/khobar",
    },
    {
        id: "qatif",
        provinceKey: "serviceAreas.easternProvince",
        cityKey: "serviceAreas.qatif.city",
        isPrimary: false,
        descriptionKey: "serviceAreas.qatif.description",
        materialKeys: [
            "serviceAreas.materials.metalScrap",
            "serviceAreas.materials.copperCables",
        ],
        slug: "/service-areas/qatif",
    },
];

export default function LocationArea() {
    const pathname = usePathname();
    const locale = getLocaleFromPathname(pathname) as Locale;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-30px">
            {serviceAreas.map((area) => {
                const city = getTranslation(area.cityKey, locale);
                return (
                    <div
                        key={area.id}
                        className="group border border-white-6 hover:border-secondary-color bg-white relative transition-all duration-300 hover:-translate-y-1 hover:shadow-box-shadow-4 p-30px overflow-hidden"
                    >
                        {/* accent corner icon */}
                        <div className="absolute -right-10px -top-10px w-70px h-70px bg-section-bg-1 rounded-full flex items-end justify-start pb-15px pl-15px -z-1 group-hover:bg-secondary-color/10 transition-all duration-300" />

                        <div className="flex items-center gap-10px mb-15px">
                            <div className="w-45px h-45px rounded-full bg-secondary-color/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary-color transition-all duration-300">
                                <i className="fas fa-map-marker-alt text-secondary-color group-hover:text-white transition-all duration-300" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-20px">
                                    <span className="text-xs md:text-sm text-paragraph-color uppercase tracking-wide font-semibold">
                                        {getTranslation(area.provinceKey, locale)}
                                    </span>
                                    {area.isPrimary && (
                                        <span className="text-xs md:text-sm text-white bg-secondary-color px-15px py-1 rounded-full font-semibold">
                                            {getTranslation("serviceAreas.primary", locale)}
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-xl md:text-22px lg:text-2xl text-heading-color font-bold">
                                    {city}
                                </h3>
                            </div>
                        </div>

                        <p className="text-sm lg:text-base text-paragraph-color leading-1.8 mb-25px">
                            {getTranslation(area.descriptionKey, locale)}
                        </p>

                        <ul className="flex flex-wrap gap-10px mb-30px">
                            {area.materialKeys.map((materialKey) => (
                                <li
                                    key={materialKey}
                                    className="text-xs md:text-sm text-heading-color bg-section-bg-1 px-15px py-1 rounded-full inline-flex items-center gap-1.5"
                                >
                                    <i className="fas fa-check text-secondary-color text-[10px]" />
                                    {getTranslation(materialKey, locale)}
                                </li>
                            ))}
                        </ul>
{/* 
                        <Link
                            href={area.slug}
                            className="text-sm md:text-base text-secondary-color hover:text-heading-color font-semibold inline-flex items-center gap-2 group/link"
                        >
                            {getTranslation("serviceAreas.viewPage", locale).replace("{city}", city)}
                            <i className="fas fa-arrow-right text-xs transition-transform duration-300 group-hover/link:translate-x-1" />
                        </Link> */}
                    </div>
                );
            })}
        </div>
    );
}
