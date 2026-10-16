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

const iconNames = [
  "architecture",
  "arrow_back",
  "arrow_forward",
  "build",
  "call",
  "chat",
  "check_circle",
  "close",
  "crisis_alert",
  "detector_smoke",
  "local_shipping",
  "location_on",
  "mail",
  "map",
  "menu",
  "nest_cam_outdoor",
  "open_in_new",
  "send",
  "settings_input_antenna",
  "share",
  "solar_power",
  "support_agent",
  "verified",
  "videocam",
];

export const metadata: Metadata = {
  metadataBase: new URL("https://www.defneguvenlik.com.tr"),
  title: {
    default: "Defne Güvenlik | Balıkesir ve İlçelerinde Güvenlik Kamera & Alarm Sistemleri",
    template: "%s | Defne Güvenlik",
  },
  description:
    "İvrindi merkezli Defne Güvenlik, Balıkesir ve tüm ilçelerinde IP kamera sistemleri, hırsız alarmı, yangın algılama, güneş enerjili bağımsız kamera, merkezi uydu altyapısı ile kamera ve alarm sistemleri bakım-onarım hizmeti sunar.",
  keywords: [
    "güvenlik kamera sistemleri",
    "IP kamera",
    "hırsız alarmı",
    "yangın algılama",
    "güneş enerjili kamera",
    "kamera tamiri",
    "alarm bakım onarım",
    "İvrindi",
    "Balıkesir",
    "Balıkesir güvenlik kamerası",
    "Balıkesir alarm sistemleri",
    "Edremit güvenlik kamerası",
    "Bandırma güvenlik kamerası",
    "Defne Güvenlik",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Defne Güvenlik",
    title: "Defne Güvenlik | Balıkesir ve İlçelerinde Güvenlik Kamera & Alarm Sistemleri",
    description:
      "Saha koşullarına özel projelendirilen mühendislik çözümleriyle tesislerinizi ve mülklerinizi koruyoruz.",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="tr"
      className={`${plusJakarta.variable} ${inter.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Yalnızca kullanılan ikonlar yüklenir. Yeni bir <Icon name="..."> eklerken
            adını aşağıdaki listeye alfabetik sırayla ekleyin. */}
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=${iconNames.join(",")}&display=block`}
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
