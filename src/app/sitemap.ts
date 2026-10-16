import type { MetadataRoute } from "next";
import { legalLinks } from "@/lib/site";

const siteUrl = "https://www.defneguvenlik.com.tr";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/teklif`, changeFrequency: "monthly", priority: 0.9 },
    ...legalLinks.map((link) => ({
      url: `${siteUrl}${link.href}`,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
