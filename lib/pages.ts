import { type Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/translations";

export type PageDefinition = {
  titleKey: string;
};

export function getPageBannerProps(definition: PageDefinition, locale: Locale) {
  return {
    title: getTranslation(definition.titleKey, locale),
  };
}

export const pageDefinitions = {
  about: {
    titleKey: "header.about",
  },
  whatWeBuy: {
    titleKey: "header.allServices",
  },
  metalScrap: {
    titleKey: "header.metalScrap",
  },
  copperScrap: {
    titleKey: "header.copperScrap",
  },
  aluminiumScrap: {
    titleKey: "header.aluminiumScrap",
  },
  ironSteel: {
    titleKey: "header.ironSteel",
  },
  ironSteelScrap: {
    titleKey: "header.ironSteelScrap",
  },
  cableWire: {
    titleKey: "header.cableWire",
  },
  cableWireScrap: {
    titleKey: "header.cableWireScrap",
  },
  machineryScrap: {
    titleKey: "header.machineryScrap",
  },
  eScrap: {
    titleKey: "header.eScrap",
  },
  batteryScrap: {
    titleKey: "header.batteryScrap",
  },
  industrialScrap: {
    titleKey: "header.industrialScrap",
  },
  serviceAreas: {
    titleKey: "header.serviceAreas",
  },
  industrialSolutions: {
    titleKey: "footer.industrialSolutions",
  },
  scrapPickup: {
    titleKey: "footer.scrapPickup",
  },
  howItWorks: {
    titleKey: "footer.howItWorks",
  },
  blog: {
    titleKey: "footer.blog",
  },
  faq: {
    titleKey: "footer.faq",
  },
} as const satisfies Record<string, PageDefinition>;
