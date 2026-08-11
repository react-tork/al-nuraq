"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, type Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/translations";

// yet-another-react-lightbox styles
import "yet-another-react-lightbox/styles.css";

const galleryImages = [
    { src: "/images/img-slide/11.jpg", width: 800, height: 570 },
    { src: "/images/img-slide/12.jpg", width: 800, height: 570 },
    { src: "/images/img-slide/13.jpg", width: 800, height: 570 },
];

/* Feature list (dashed bullet items) */
const features = [
    "home.about2.feature1",
    "home.about2.feature2",
    "home.about2.feature3",
    "home.about2.feature4",
];

/* Business stats (flaticon icons + count + label) */
const stats = [
    { count: "10+", icon: "flaticon-home-2", key: "home.about2.stat1Label" },
    { count: "500+", icon: "flaticon-heart", key: "home.about2.stat2Label" },
    { count: "1000+", icon: "flaticon-mountain", key: "home.about2.stat3Label" },
    { count: "5+", icon: "flaticon-secure", key: "home.about2.stat4Label" },
];

/* ------------------------------------------------------------------ */
/*  About2 — homepage "about 2 section"                                */
/*  Reproduced from quarter-rtl/index.html (about 2 section).          */
/*  The gallery thumbnails were GLightbox (`.glightbox2`) image        */
/*  triggers; reproduced here with yet-another-react-lightbox,         */
/*  matching the existing About/Banner migration.                      */
/* ------------------------------------------------------------------ */
export default function About2() {
    const pathname = usePathname();
    const locale = getLocaleFromPathname(pathname) as Locale;
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    return (
        <>
            {/* ==================== about 2 section ==================== */}
            <section>
                <div className="container pt-30 pb-90px">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 lg:gap-30px items-center">
                        {/* about 2 left */}
                        <div className="mb-5">
                            <div className="mb-30px">
                                <p className="text-sm md:text-15px lg:text-base text-secondary-color bg-secondary-color/10 capitalize mb-15px py-1px px-5 rounded-full inline-block font-semibold">
                                    <span className="leading-1.3">{getTranslation('home.about2.subtitle', locale)}</span>
                                </p>
                                <h2 className="text-2xl sm:text-3xl md:text-26px lg:text-3xl xl:text-44px text-heading-color font-bold mb-15px">
                                    <span className="leading-1.3"> {getTranslation('home.about2.title', locale)} </span>
                                </h2>
                                <p className="text-sm lg:text-base max-w-500px">
                                    {getTranslation('home.about2.description', locale)}
                                </p>
                            </div>
                            <ul className="space-y-4 pb-4">
                                {features.map((f, i) => (
                                    <li key={i} className="text-sm lg:text-base flex items-center">
                                        <span className="w-15px h-0.5 bg-secondary-color opacity-50 inline-block ms-15px" />
                                        <span className="leading-1.8">{getTranslation(f, locale)}</span>
                                    </li>
                                ))}
                            </ul>

                            <ul className="flex gap-x-15px py-4">
                                {stats.map((s, i) => (
                                    <li
                                        key={i}
                                        className={
                                            i < stats.length - 1
                                                ? "text-sm pr-4 border-r border-primary-color/20"
                                                : "text-sm"
                                        }
                                    >
                                        <p className="leading-1.8 font-bold">
                                            {s.count}
                                            <i className={`${s.icon} ms-1`} />
                                        </p>
                                        <p className="leading-1.8">{getTranslation(s.key, locale)}</p>
                                    </li>
                                ))}
                            </ul>

                            <div>
                                <ul className="flex gap-15px pt-4">
                                    {galleryImages.map((img, i) => (
                                        <li key={img.src}>
                                            <a
                                                className="glightbox2"
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setLightboxIndex(i);
                                                }}
                                            >
                                                <Image
                                                    src={img.src}
                                                    alt=""
                                                    width={img.width}
                                                    height={img.height}
                                                />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* about 2 right */}
                        <div className="lg:ml-30px relative mb-10 lg:mb-0">
                            <Image
                                src="/images/others/9.png"
                                alt=""
                                className="max-w-full h-auto"
                                width={1140}
                                height={1210}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* image lightbox (replaces GLightbox `.glightbox2`) */}
            <Lightbox
                open={lightboxIndex !== null}
                close={() => setLightboxIndex(null)}
                index={lightboxIndex ?? 0}
                slides={galleryImages.map((img) => ({ src: img.src }))}
            />
        </>
    );
}
