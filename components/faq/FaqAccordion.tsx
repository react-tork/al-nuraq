// components/faq/FaqAccordion.tsx
"use client";

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
}

const faqItems: FaqItem[] = Array.from({ length: 24 }, (_, i) => ({
  id: `faq-${i + 1}`,
  questionKey: `faq.items.faq${i + 1}.question`,
  answerKey: `faq.items.faq${i + 1}.answer`,
}));

function AccordionItem({
  item,
  isOpen,
  onToggle,
  locale,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
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
  const [activeId, setActiveId] = useState<string | null>("faq-1");
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
              locale={locale}
            />
          ))}
        </ul>
      </div>

      {/* contact */}
      {/* <div className="pt-100px text-center">
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
      </div> */}

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
