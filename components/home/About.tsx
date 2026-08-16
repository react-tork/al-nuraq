"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox, { Slide } from "yet-another-react-lightbox";
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

interface YouTubeSlide {
  type: "youtube";
  src: string;
}

type CustomSlide = Slide | YouTubeSlide;

export default function About() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;
  const [lightboxOpen, setLightboxOpen] = useState(false);

    return (
        <>
            {/* ==================== about section ==================== */}
            <section className="container pt-16 md:pt-20 pb-12 md:pb-18">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-30px items-start">
                    {/* about left */}
                    {/* about left */}
                    <div className="relative mb-10 lg:mb-0 lg:h-full min-h-0">
                        {/* Main image */}
                        <div className="relative w-full aspect-[574/722] lg:aspect-auto lg:h-full overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1777364701676-b70698be404d?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0"
                                alt=""
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>

                    </div>
                    {/* about right */}
                    <div>
                        <div className="mb-2">
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
                        <div className="mt-3 md:mt-6">
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
      {/* <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                slides={[
                    {
                        type: "video" as const,
                        // custom field attach করার জন্য
                        embedUrl: "https://www.youtube.com/embed/A0LCbgtkOfo?autoplay=1&showinfo=0&controls=1",
                        sources: [],
                    } as any,
                ]}
                render={{
                    slide: ({ slide }) => {
                        const s = slide as any;
                        if (s.embedUrl) {
                            return (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={s.embedUrl}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    style={{ maxWidth: "80%", maxHeight: "80%", aspectRatio: "16/9" }}
                                />
                            );
                        }
                        return null;
                    },
                }}
            /> */}
    </>
  );
}
