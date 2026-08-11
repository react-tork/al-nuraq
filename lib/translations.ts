import { type Locale } from "./i18n";
import arTranslations from "@/messages/ar.json";
import enTranslations from "@/messages/en.json";

export function getTranslation(key: string, locale: Locale): string {
  const translations = locale === 'ar' ? arTranslations : enTranslations;
  const keys = key.split('.');
  let value: any = translations;
  for (const k of keys) {
    value = value?.[k];
  }
  return value || key;
}
