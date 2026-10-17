import type { MetadataRoute } from "next";
import { legalLinks } from "@/lib/site";

const siteUrl = "https://www.defneguvenlik.com.tr";

// Yasal metinler degistiginde bu tarihi guncelleyin.
const legalLastModified = new Date("2026-10-16");

export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date();

  return [
    { url: siteUrl, lastModified: buildDate, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/teklif`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.9 },
    ...legalLinks.map((link) => ({
      url: `${siteUrl}${link.href}`,
      lastModified: legalLastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
