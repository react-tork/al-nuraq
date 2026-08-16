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
    "home.about2.feature5",
    "home.about2.feature6",
    "home.about2.feature7"
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
            <section className="container pt-20 md:pt-24 pb-16 md:pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 lg:gap-30px items-center">
                    {/* about 2 left */}
                    <div className="mb-5">
                        <div className="mb-30px">
                            <p className="text-sm md:text-15px lg:text-base text-secondary-color bg-secondary-color/10 capitalize mb-15px py-1px px-5 rounded-full inline-block font-semibold">
                                <span className="leading-1.3">{getTranslation("home.about2.subtitle", locale)}</span>
                            </p>
                            <h2 className="text-2xl sm:text-3xl md:text-26px lg:text-3xl xl:text-44px text-heading-color font-bold mb-15px">
                                <span className="leading-1.3">{getTranslation("home.about2.title", locale)}</span>
                            </h2>
                        </div>
                        <ul className="space-y-4 pb-4">
                            {features.map((f, i) => (
                                <li key={i} className="lg:text-lg flex items-center gap-3">
                                    <i className="fas fa-check-circle text-secondary-color text-lg lg:text-xl flex-shrink-0" />
                                    <span className="leading-1.8">{getTranslation(f, locale)}</span>
                                </li>
                            ))}
                        </ul>
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
