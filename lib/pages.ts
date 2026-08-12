import { type Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/translations";

export type PageDefinition = {
  titleKey: string;
  breadcrumbs: { labelKey: string; path?: string }[];
};

export function getPageBannerProps(definition: PageDefinition, locale: Locale) {
  const homeHref = locale === "en" ? "/en" : "/";

  return {
    title: getTranslation(definition.titleKey, locale),
    homeLabel: getTranslation("common.home", locale),
    homeHref,
    breadcrumbs: definition.breadcrumbs.map((item) => ({
      label: getTranslation(item.labelKey, locale),
      href: item.path
        ? locale === "en"
          ? `/en${item.path}`
          : item.path
        : undefined,
    })),
  };
}

export const pageDefinitions = {
  about: {
    titleKey: "header.about",
    breadcrumbs: [{ labelKey: "header.about" }],
  },
  whatWeBuy: {
    titleKey: "header.allServices",
    breadcrumbs: [{ labelKey: "header.allServices" }],
  },
  metalScrap: {
    titleKey: "header.metalScrap",
    breadcrumbs: [
      { labelKey: "header.whatWeBuy", path: "/what-we-buy" },
      { labelKey: "header.metalScrap" },
    ],
  },
  copperScrap: {
    titleKey: "header.copperScrap",
    breadcrumbs: [
      { labelKey: "header.whatWeBuy", path: "/what-we-buy" },
      { labelKey: "header.copperScrap" },
    ],
  },
  aluminiumScrap: {
    titleKey: "header.aluminiumScrap",
    breadcrumbs: [
      { labelKey: "header.whatWeBuy", path: "/what-we-buy" },
      { labelKey: "header.aluminiumScrap" },
    ],
  },
  ironSteel: {
    titleKey: "header.ironSteel",
    breadcrumbs: [
      { labelKey: "header.whatWeBuy", path: "/what-we-buy" },
      { labelKey: "header.ironSteel" },
    ],
  },
  cableWire: {
    titleKey: "header.cableWire",
    breadcrumbs: [
      { labelKey: "header.whatWeBuy", path: "/what-we-buy" },
      { labelKey: "header.cableWire" },
    ],
  },
  machineryScrap: {
    titleKey: "header.machineryScrap",
    breadcrumbs: [
      { labelKey: "header.whatWeBuy", path: "/what-we-buy" },
      { labelKey: "header.machineryScrap" },
    ],
  },
  eScrap: {
    titleKey: "header.eScrap",
    breadcrumbs: [
      { labelKey: "header.whatWeBuy", path: "/what-we-buy" },
      { labelKey: "header.eScrap" },
    ],
  },
  batteryScrap: {
    titleKey: "header.batteryScrap",
    breadcrumbs: [
      { labelKey: "header.whatWeBuy", path: "/what-we-buy" },
      { labelKey: "header.batteryScrap" },
    ],
  },
  industrialScrap: {
    titleKey: "header.industrialScrap",
    breadcrumbs: [
      { labelKey: "header.whatWeBuy", path: "/what-we-buy" },
      { labelKey: "header.industrialScrap" },
    ],
  },
  serviceAreas: {
    titleKey: "header.serviceAreas",
    breadcrumbs: [{ labelKey: "header.serviceAreas" }],
  },
  industrialSolutions: {
    titleKey: "footer.industrialSolutions",
    breadcrumbs: [{ labelKey: "footer.industrialSolutions" }],
  },
  scrapPickup: {
    titleKey: "footer.scrapPickup",
    breadcrumbs: [{ labelKey: "footer.scrapPickup" }],
  },
  howItWorks: {
    titleKey: "footer.howItWorks",
    breadcrumbs: [{ labelKey: "footer.howItWorks" }],
  },
  blog: {
    titleKey: "footer.blog",
    breadcrumbs: [{ labelKey: "footer.blog" }],
  },
  faq: {
    titleKey: "footer.faq",
    breadcrumbs: [{ labelKey: "footer.faq" }],
  },
} as const satisfies Record<string, PageDefinition>;
