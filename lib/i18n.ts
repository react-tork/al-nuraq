export const locales = ['ar', 'en'] as const;
export const defaultLocale = 'ar' as const;

export type Locale = (typeof locales)[number];

export const localeDirection: Record<Locale, 'ltr' | 'rtl'> = {
  ar: 'rtl',
  en: 'ltr',
};

export function getLocaleFromPathname(pathname: string): Locale {
  const segments = pathname.split('/');
  const locale = segments[1];
  
  if (locale && locales.includes(locale as Locale)) {
    return locale as Locale;
  }
  
  return defaultLocale;
}

export function getPathnameWithoutLocale(pathname: string): string {
  const segments = pathname.split('/');
  const locale = segments[1];
  
  if (locale && locales.includes(locale as Locale)) {
    return '/' + segments.slice(2).join('/');
  }
  
  return pathname;
}

export function getPathnameWithLocale(pathname: string, locale: Locale): string {
  const pathnameWithoutLocale = getPathnameWithoutLocale(pathname);
  
  if (locale === defaultLocale) {
    return pathnameWithoutLocale;
  }
  
  return `/${locale}${pathnameWithoutLocale}`;
}
