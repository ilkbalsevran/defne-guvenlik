"use client";

/**
 * HeroBackground
 * ------------------------------------------------------------------
 * Hero bölümünün sinematik arka plan katmanı:
 *  1) Derin antrasit / lacivert / siyah gradyan
 *  2) Çok hafif SVG "noise" (kumlanma) dokusu
 *  3) Yavaşça nefes alan bulanık cyan / emerald ışık küreleri
 *  4) Zarif HUD ızgarası (opaklığı düşük, border-white/5 hissi)
 *
 * Parallax, ebeveyn (<HeroSection>) tarafından `--mx` / `--my`
 * CSS değişkenleri üzerinden beslenir. Değerler -1..1 aralığındadır.
 * Bu katman yalnızca `transform`/`opacity` kullandığı için GPU'da
 * ucuz çalışır ve scroll performansını düşürmez.
 */
export default function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* 1) Derin gradyan zemin */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-black" />

      {/* Palete uygun lacivert/cyan renk yıkaması */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_78%_8%,rgba(14,165,233,0.16),transparent_58%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_10%_100%,rgba(0,104,123,0.18),transparent_60%)]" />

      {/* 2 & 3) Parallax katmanı — HUD ızgarası + parıltı küreleri.
          Fare ters yöne hareket ettiğinde (-12px / -10px) hafifçe kayar. */}
      <div
        className="absolute -inset-x-16 -inset-y-16 will-change-transform"
        style={{
          transform:
            "translate3d(calc(var(--mx, 0) * -12px), calc(var(--my, 0) * -10px), 0)",
        }}
      >
        {/* HUD ızgarası — kenarlara doğru maskeyle yumuşatılır */}
        <div className="hero-grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />

        {/* Nefes alan bulanık ışık küreleri */}
        <div className="hero-glow-a absolute -top-24 -left-24 h-[34rem] w-[34rem] rounded-full bg-tech-cyan opacity-20 blur-[120px]" />
        <div className="hero-glow-b absolute top-1/4 -right-28 h-[30rem] w-[30rem] rounded-full bg-status-active opacity-20 blur-[120px]" />
        <div className="hero-glow-a absolute -bottom-32 left-1/4 h-[26rem] w-[26rem] rounded-full bg-secondary-fixed-dim opacity-20 blur-[120px]" />
      </div>

      {/* 2) Kumlanma (noise) dokusu — %5 opaklık, organik lüks doku */}
      <div className="hero-noise absolute inset-0 opacity-5 mix-blend-soft-light" />

      {/* Sinematik vinyet */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
    </div>
  );
}
