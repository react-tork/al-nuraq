import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "animate.css";
import "./font-icons.css";
import "./globals.css";
import LocaleProvider from "@/components/layout/LocaleProvider";
import { socialLinks } from "@/lib/social";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alnuraqscrap.com"),
  title: "Al Nuraq | Scrap Metal Buyer in Dammam and Riyadh",
  description: "Al Nuraq is a scrap metal buyer in Dammam and Riyadh. We buy copper, aluminum, iron, steel, industrial scrap, and provide pickup services for businesses and individuals.",
  keywords: [
    "scrap metal buyer",
    "Dammam",
    "Riyadh",
    "copper scrap",
    "aluminum scrap",
    "iron scrap",
    "steel scrap",
    "industrial scrap",
    "scrap pickup Saudi Arabia",
  ],
  authors: [{ name: "Al Nuraq" }],
  creator: "Al Nuraq",
  publisher: "Al Nuraq",
  alternates: {
    languages: {
      ar: "https://alnuraqscrap.com",
      en: "https://alnuraqscrap.com/en",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Al Nuraq | Scrap Metal Buyer in Dammam and Riyadh ",
    description: "Al Nuraq is a professional scrap metal buyer in Dammam and Riyadh. We buy copper, aluminum, iron, steel, industrial scrap, and provide pickup services.",
    url: "https://alnuraqscrap.com",
    siteName: "Al Nuraq",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "Al Nuraq - Scrap Metal Buyer in Dammam and Riyadh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Nuraq | Scrap Metal Buyer in Dammam and Riyadh",
    description: "Al Nuraq is a scrap metal buyer in Dammam and Riyadh. We buy copper, aluminum, iron, steel, industrial scrap, and provide pickup services for businesses and individuals.",
    images: ["/images/og.png"],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "og:see_also": socialLinks.map((link) => link.href),
    "og:email": "alnuraqscrap@gmail.com",
    "og:phone_number": "+966 55 967 9148",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WQRPFRM9');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Al Nuraq",
              "email": "alnuraqscrap@gmail.com",
              "telephone": "+966559679148",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Dammam 2nd Industrial City",
                "addressLocality": "Dammam",
                "addressCountry": "Saudi Arabia",
              },
              "url": "https://alnuraqscrap.com",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WQRPFRM9"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
        <LocaleProvider>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
