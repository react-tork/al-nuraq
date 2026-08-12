// components/faq/FaqAccordion.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, type Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/translations";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";

interface FaqItem {
  id: string;
  questionKey: string;
  answerKey: string;
  videoUrl?: string;
  videoThumb?: string;
}

const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    questionKey: "faq.items.faq1.question",
    answerKey: "faq.items.faq1.answer",
  },
  {
    id: "faq-2",
    questionKey: "faq.items.faq2.question",
    answerKey: "faq.items.faq2.answer",
    videoUrl: "https://www.youtube.com/embed/LjCzPp-MK48?autoplay=1&showinfo=0",
    videoThumb: "/img/bg/17.jpg",
  },
  {
    id: "faq-3",
    questionKey: "faq.items.faq3.question",
    answerKey: "faq.items.faq3.answer",
  },
  {
    id: "faq-4",
    questionKey: "faq.items.faq4.question",
    answerKey: "faq.items.faq4.answer",
  },
  {
    id: "faq-5",
    questionKey: "faq.items.faq5.question",
    answerKey: "faq.items.faq5.answer",
  },
  {
    id: "faq-6",
    questionKey: "faq.items.faq6.question",
    answerKey: "faq.items.faq6.answer",
  },
  {
    id: "faq-7",
    questionKey: "faq.items.faq7.question",
    answerKey: "faq.items.faq7.answer",
  },
];

function AccordionItem({
  item,
  isOpen,
  onToggle,
  onVideoClick,
  locale,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
  onVideoClick: (videoUrl: string) => void;
  locale: Locale;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (!contentRef.current) return;
    setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isOpen]);

  return (
    <li className="accordion border-b-2 border-border-color-10">
      {/* accordion header */}
      <div
        className="accordion-controller flex items-center justify-between cursor-pointer text-sm lg:text-base p-5 pr-18px md:pl-10"
        onClick={onToggle}
      >
        <div className="font-semibold font-poppins">
          <p className="text-primary-color md:text-lg">
            {getTranslation(item.questionKey, locale)}
          </p>
        </div>
        <button
          className="h-10 w-10 leading-10 flex flex-col justify-center items-center bg-section-bg-1"
          aria-label={isOpen ? "Collapse answer" : "Expand answer"}
        >
          <span className="w-4 h-0.5 bg-primary-color block" />
          <span
            className="w-4 h-0.5 bg-primary-color block -mt-0.5 transition-transform duration-300"
            style={{ transform: isOpen ? "rotate(0deg)" : "rotate(90deg)" }}
          />
        </button>
      </div>

      {/* accordion content */}
      <div
        ref={contentRef}
        className="accordion-content overflow-hidden transition-all duration-500"
        style={{ maxHeight }}
      >
        <div className="content-wrapper px-5 md:px-10 pt-15px pb-25px text-sm lg:text-base">
          {item.videoUrl && item.videoThumb && (
            <div className="float-right clear-both inline-block ml-5 relative z-0 after:w-full after:h-full after:absolute after:left-0 after:top-0 after:bg-primary-color after:opacity-30 after:z-1">
              <Image
                src={item.videoThumb}
                alt=""
                width={280}
                height={200}
                className="inline-block"
              />
              <div className="absolute left-0 top-0 flex justify-center items-center h-full w-full z-10">
                <a
                  href={item.videoUrl}
                  className="w-60px h-60px text-center text-sm lg:text-base text-secondary-color shadow-box-shadow-2 rounded-full bg-white flex items-center justify-center"
                  onClick={(e) => {
                    e.preventDefault();
                    onVideoClick(item.videoUrl!);
                  }}
                >
                  <i className="icon-play" />
                </a>
              </div>
            </div>
          )}
          <p className="leading-1.8 lg:leading-1.8 mb-5">
            {getTranslation(item.answerKey, locale)}
          </p>
        </div>
      </div>
    </li>
  );
}

export default function FaqAccordion() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;
  const [activeId, setActiveId] = useState<string | null>("faq-2");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  const handleVideoClick = (videoUrl: string) => {
    setActiveVideoUrl(videoUrl);
    setLightboxOpen(true);
  };

  return (
    <div className="lg:col-start-1 lg:col-span-8">
      {/* faq accordion */}
      <div>
        <ul className="accordion-container neighbour-accordion border-2 border-b-0 border-border-color-10">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={activeId === item.id}
              onToggle={() =>
                setActiveId((prev) => (prev === item.id ? null : item.id))
              }
              onVideoClick={handleVideoClick}
              locale={locale}
            />
          ))}
        </ul>
      </div>

      {/* contact */}
      <div className="pt-100px text-center">
        <h4 className="text-xl md:text-22px lg:text-26px xl:text-3xl font-bold text-heading-color">
          <span className="heading-1.3 md:heading-1.3 lg:heading-1.3 xl:heading-1.3">
            {getTranslation("faq.stillNeedHelp", locale)}
          </span>
        </h4>
        <div className="my-30px">
          <h5 className="capitalize text-sm md:text-base text-white relative group whitespace-nowrap font-normal mb-0 transition-all duration-300 border bg-secondary-color border-secondary-color hover:bg-heading-color hover:border-heading-color inline-block">
            <Link
              href="/contact"
              className="relative z-10 px-5 md:px-25px lg:px-10 py-10px md:py-3 lg:py-17px group-hover:text-white leading-23px"
            >
              {getTranslation("faq.contactUs", locale)}
            </Link>
          </h5>
        </div>
        <h4 className="text-lg md:text-xl lg:text-22 xl:text-2xl font-bold text-heading-color mb-15px">
          <span className="heading-1.3 md:heading-1.3 lg:heading-1.3 xl:heading-1.3">
            <i className="fas fa-phone" /> {getTranslation("faq.phone", locale)}
          </span>
        </h4>
      </div>

      {/* video lightbox */}
      {activeVideoUrl && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          plugins={[Video]}
          slides={[
            {
              type: "video",
              sources: [
                {
                  src: activeVideoUrl,
                  type: "video/youtube",
                },
              ],
            },
          ]}
        />
      )}
    </div>
  );
}
