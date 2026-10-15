import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.defneguvenlik.com.tr"),
  title: {
    default: "Defne Güvenlik | İvrindi / Balıkesir Güvenlik & Alarm Sistemleri",
    template: "%s | Defne Güvenlik",
  },
  description:
    "İvrindi / Balıkesir merkezli Defne Güvenlik; IP kamera sistemleri, hırsız alarmı, yangın algılama, güneş enerjili bağımsız kamera ve merkezi uydu altyapısı mühendisliği sunar.",
  keywords: [
    "güvenlik kamera sistemleri",
    "IP kamera",
    "hırsız alarmı",
    "yangın algılama",
    "güneş enerjili kamera",
    "İvrindi",
    "Balıkesir",
    "Defne Güvenlik",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Defne Güvenlik",
    title: "Defne Güvenlik | İvrindi / Balıkesir Güvenlik & Alarm Sistemleri",
    description:
      "Saha koşullarına özel projelendirilen mühendislik çözümleriyle tesislerinizi ve mülklerinizi koruyoruz.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="tr"
      className={`${plusJakarta.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
      </head>
      <body className="bg-surface font-body text-on-surface antialiased">
        <div
          aria-hidden="true"
          className="hero-noise pointer-events-none fixed inset-0 z-[60] opacity-[0.03] mix-blend-multiply"
        />
        <Header />
        <main className="w-full bg-surface pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
