"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, type Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/translations";

type IconCard = {
  id: number;
  icon: string;
  titleKey: string;
  lineKeys: string[];
  href?: string;
  isFontIcon?: boolean;
};

const cards: IconCard[] = [
  {
    id: 1,
    icon: "/images/icons/10.png",
    titleKey: "contact.icons.emailTitle",
    lineKeys: ["contact.icons.email1"],
    href: "mailto:alnuraqscrap@gmail.com",
  },
  {
    id: 2,
    icon: "/images/icons/11.png",
    titleKey: "contact.icons.phoneTitle",
    lineKeys: ["contact.icons.phone1"],
    href: "tel:+966559679148",
  },
  {
    id: 3,
    icon: "/images/icons/12.png",
    titleKey: "contact.icons.addressTitle",
    lineKeys: ["contact.icons.address1", "contact.icons.address2"],
  },
  {
    id: 4,
    icon: "icon-whatsapp",
    titleKey: "contact.icons.whatsappTitle",
    lineKeys: ["contact.icons.whatsapp1"],
    href: "https://wa.me/966559679148",
    isFontIcon: true,
  },
];

export default function ContactIcons() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;

  return (
    <section>
      <div className="container pt-30 pb-5">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-30px">
          {cards.map((card) => (
            <div
              key={card.id}
              className="px-30px py-50px border-2 border-border-color-11 text-center flex flex-col items-center"
            >
              <div className="mb-35px">
                {card.isFontIcon ? (
                  <i className={`${card.icon} text-6xl text-secondary-color`} />
                ) : (
                  <Image
                    src={card.icon}
                    alt={getTranslation(card.titleKey, locale)}
                    width={80}
                    height={80}
                  />
                )}
              </div>
              <div>
                <h2 className="text-lg md:text-xl lg:text-22px xl:text-2xl text-heading-color font-bold mb-15px">
                  <span className="leading-1.3">
                    {" "}
                    {getTranslation(card.titleKey, locale)}{" "}
                  </span>
                </h2>
                <p className="text-sm lg:text-base">
                  <span className="leading-1.8">
                    {card.lineKeys.map((lineKey, i) => (
                      <span key={i}>
                        {card.href ? (
                          <a
                            href={card.href}
                            target="_blank"
                            className="hover:text-secondary-color transition-colors"
                          >
                            {getTranslation(lineKey, locale)}
                          </a>
                        ) : (
                          getTranslation(lineKey, locale)
                        )}
                        {i < card.lineKeys.length - 1 && <br />}
                      </span>
                    ))}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
