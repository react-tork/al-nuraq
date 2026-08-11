import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale } from './lib/i18n';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check if the pathname already has a locale
  const segments = pathname.split('/');
  const locale = segments[1];
  
  if (locale && locales.includes(locale as typeof locales[number])) {
    // Valid locale in path, continue
    return NextResponse.next();
  }
  
  // No locale in path, redirect to default locale (arabic)
  // But we want / to be arabic, so we need to handle this differently
  // For now, let's keep / as is (arabic) and /en as english
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc.)
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};
