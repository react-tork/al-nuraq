"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, type Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/translations";

// yet-another-react-lightbox styles
import "yet-another-react-lightbox/styles.css";

/* ------------------------------------------------------------------ */
/*  About — homepage about section                                     */
/*  Reproduced from quarter-rtl/index.html (about section).            */
/*  The play button was a GLightbox (`.glightbox2`) video trigger;     */
/*  reproduced here with yet-another-react-lightbox + Video plugin,    */
/*  matching the existing Banner migration. The custom `.animate-      */
/*  pulse1` pulsing ring and the circular `rounded-100%` icon badges   */
/*  are preserved via the shared globals.css.                          */
/* ------------------------------------------------------------------ */
export default function About() {
    const pathname = usePathname();
    const locale = getLocaleFromPathname(pathname) as Locale;
    const [lightboxOpen, setLightboxOpen] = useState(false);

    return (
        <>
            {/* ==================== about section ==================== */}
            <section className="container pt-20 md:pt-24 pb-16 md:pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-30px">
                    {/* about left */}
                    <div className="lg:ms-30px relative mb-10 lg:mb-0">
                        <Image
                            src="/images/others/7.png"
                            alt=""
                            className="max-w-full h-auto"
                            width={574}
                            height={722}
                        />
                        <div className="absolute rtl:right-[10px] bottom-[70px] w-150px md:w-300px">
                            <div className="relative">
                                <Image
                                    src="/images/others/8.png"
                                    alt=""
                                    className="w-full h-auto"
                                    width={339}
                                    height={253}
                                />
                                <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
                                    <a
                                        className="glightbox2 w-50px h-50px lg:w-20 lg:h-20 text-center lg:text-lg text-secondary-color shadow-box-shadow-2 rounded-full bg-white flex items-center justify-center animate-pulse1"
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setLightboxOpen(true);
                                        }}
                                    >
                                        <i className="icon-play"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* about right */}
                    <div>
                        <div className="mb-5">
                            <p className="text-sm md:text-15px lg:text-base text-secondary-color bg-secondary-color/10 capitalize mb-15px py-1px px-5 rounded-full inline-block font-semibold">
                                <span className="leading-1.3">{getTranslation('home.about.subtitle', locale)}</span>
                            </p>
                            <h2 className="text-2xl sm:text-3xl md:text-26px lg:text-3xl xl:text-44px text-heading-color font-bold mb-15px">
                                <span className="leading-1.3">
                                    {getTranslation('home.about.title', locale)}
                                </span>
                            </h2>
                            <p className="text-sm lg:text-base max-w-500px">
                                <span className="leading-1.8 lg:leading-1.8">
                                    {getTranslation('home.about.description', locale)}
                                </span>
                            </p>
                        </div>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4 pt-4">
                            <li className="text-sm lg:text-base flex items-center">
                                <i className="flaticon-home-2 text-xl text-secondary-color bg-color-6 w-45px h-45px flex items-center justify-center rtl:ms-25px rounded-100%" />
                                <span className="leading-1.8">{getTranslation('home.about.feature1', locale)}</span>
                            </li>
                            <li className="text-sm lg:text-base flex items-center">
                                <i className="flaticon-mountain text-xl text-secondary-color bg-color-6 w-45px h-45px flex items-center justify-center rtl:ms-25px rounded-100%" />
                                <span className="leading-1.8">{getTranslation('home.about.feature2', locale)}</span>
                            </li>
                            <li className="text-sm lg:text-base flex items-center">
                                <i className="flaticon-heart text-xl text-secondary-color bg-color-6 w-45px h-45px flex items-center justify-center rtl:ms-25px rounded-100%" />
                                <span className="leading-1.8">{getTranslation('home.about.feature3', locale)}</span>
                            </li>
                            <li className="text-sm lg:text-base flex items-center">
                                <i className="flaticon-secure text-xl text-secondary-color bg-color-6 w-45px h-45px flex items-center justify-center rtl:ms-25px rounded-100%" />
                                <span className="leading-1.8">{getTranslation('home.about.feature4', locale)}</span>
                            </li>
                        </ul>

                        <div className="bg-secondary-color/5 mt-30px mb-10">
                            <p className="text-sm lg:text-base p-5 rtl:border-r-4 border-secondary-color">
                                <span className="leading-1.8">
                                    &quot;{getTranslation('home.about.quote', locale)}&quot;
                                </span>
                            </p>
                        </div>
                        <div>
                            <h5 className="uppercase text-sm md:text-base text-white relative group whitespace-nowrap font-normal mb-0 transition-all duration-300 border border-secondary-color hover:border-heading-color inline-block">
                                <span className="inline-block absolute top-0 right-0 w-full h-full bg-secondary-color group-hover:bg-black hover:bg-primary-cogroup-lor z-1 group-hover:w-0 transition-all duration-300" />
                                <a
                                    href={locale === 'en' ? '/en/service.html' : 'service.html'}
                                    className="relative z-10 px-5 md:px-25px lg:px-10 py-10px md:py-3 lg:py-17px group-hover:text-heading-color leading-23px"
                                >
                                    {getTranslation('home.about.ctaButton', locale)}
                                </a>
                            </h5>
                        </div>
                    </div>
                </div>
            </section>

            {/* video lightbox (replaces GLightbox `.glightbox2`) */}
            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                plugins={[Video]}
                slides={[
                    {
                        type: "video",
                        sources: [
                            {
                                src: "https://www.youtube.com/embed/tlThdr3O5Qo?autoplay=1&showinfo=0&controls=1",
                                type: "video/youtube",
                            },
                        ],
                    },
                ]}
            />
        </>
    );
}
