import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "animate.css";
import "./font-icons.css";
import "./globals.css";
import LocaleProvider from "@/components/layout/LocaleProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "مشتري سكراب محترف في الدمام والرياض",
  description: "مشتري سكراب محترف في الدمام والرياض",
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
