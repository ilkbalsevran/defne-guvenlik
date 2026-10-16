import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} | ${siteConfig.serviceArea} Güvenlik & Alarm Sistemleri`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "#f7f9fc",
          background:
            "radial-gradient(circle at 80% 10%, rgba(14,165,233,0.35), transparent 55%), linear-gradient(180deg, #0f1a2c 0%, #000b1f 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, color: "#66d5f1" }}>
          <div style={{ width: 16, height: 16, borderRadius: 8, background: "#10b981" }} />
          {siteConfig.serviceArea.toLocaleUpperCase("tr-TR")}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 84, fontWeight: 800, letterSpacing: -2 }}>
            {siteConfig.name.toLocaleUpperCase("tr-TR")}
          </div>
          <div style={{ fontSize: 40, color: "#b8c7e4" }}>
            Kamera · Alarm · Yangın Algılama · Güneş Enerjili Kamera
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 30, color: "#7b8aa4" }}>
          <span>Ücretsiz keşif ve fiyat teklifi</span>
          <span style={{ color: "#f7f9fc" }}>{siteConfig.phoneDisplay}</span>
        </div>
      </div>
    ),
    size,
  );
}
