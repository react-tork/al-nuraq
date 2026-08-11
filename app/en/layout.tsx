import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "animate.css";
import "../font-icons.css";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Professional Scrap Buyer in Dammam and Riyadh",
  description: "Professional Scrap Buyer in Dammam and Riyadh",
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
