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
      <body className="min-h-full flex flex-col">
        <LocaleProvider>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
