"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";
import HeroBackground from "@/components/HeroBackground";
import { images } from "@/lib/site";

const stats = [
  { label: "Kamera Altyapısı", value: "IP & AHD 4K Ultra" },
  { label: "Enerji Entegrasyonu", value: "Solar & Hibrit Panel" },
  { label: "Teknik Servis", value: "Bölgesel Hızlı Yanıt" },
];

/** Fare konumunu -1..1 aralığına normalize ederek CSS değişkenine yazar. */
export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [tiltEnabled, setTiltEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setTiltEnabled(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !tiltEnabled) return;

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let raf = 0;
    let running = false;

    const render = () => {
      current.x += (target.x - current.x) * 0.12;
      current.y += (target.y - current.y) * 0.12;

      section.style.setProperty("--mx", current.x.toFixed(4));
      section.style.setProperty("--my", current.y.toFixed(4));

      if (
        Math.abs(target.x - current.x) > 0.0005 ||
        Math.abs(target.y - current.y) > 0.0005
      ) {
        raf = requestAnimationFrame(render);
      } else {
        running = false;
      }
    };

    const schedule = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(render);
      }
    };

    const onMove = (event: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      target.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      target.y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
      schedule();
    };

    const onLeave = () => {
      target.x = 0;
      target.y = 0;
      schedule();
    };

    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
    };
  }, [tiltEnabled]);

  const hudTransform =
    "translate3d(calc(var(--mx, 0) * -18px), calc(var(--my, 0) * -14px), 0)";

  const cardTransform =
    "perspective(1200px) rotateX(calc(var(--my, 0) * -5deg)) rotateY(calc(var(--mx, 0) * 7deg)) translateZ(0)";

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative isolate w-full overflow-hidden bg-slate-950 text-surface-bright"
    >
      <HeroBackground />

      <div className="relative mx-auto max-w-7xl px-6 py-space-xl lg:px-12 lg:py-space-3xl">
        <div className="grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12 lg:gap-space-2xl">
          <div className="z-10 flex flex-col items-start lg:col-span-7">
            <div className="mb-space-lg inline-flex items-center gap-space-xs rounded border border-white/10 bg-white/5 px-3 py-1.5 font-body text-label-technical uppercase tracking-wider text-secondary-fixed-dim backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-status-active" />
              <span>Balıkesir &amp; Tüm İlçeleri Saha Mühendisliği</span>
              <span className="text-white/30">|</span>
              <span className="font-medium text-surface-bright/80">
                IP67 Endüstriyel Standart
              </span>
            </div>

            <h1 className="mb-space-md font-display text-display-hero-mobile tracking-tight text-white md:text-display-hero">
              Güvenliğinizi doğru sistemlerle güçlendirin.
            </h1>

            <p className="mb-space-xl max-w-xl font-body text-body-lg leading-relaxed text-slate-300">
              Defne Güvenlik, saha koşullarına özel projelendirilen mühendislik
              çözümleriyle tesislerinizi ve mülklerinizi korur. 4K Ultra IP
              kameralar, akıllı çevre alarmları ve bağımsız enerji altyapısı.
            </p>

            <div className="flex w-full flex-wrap items-center gap-space-md sm:w-auto">
              <Link
                href="/teklif"
                className="inline-flex items-center justify-center whitespace-nowrap rounded bg-secondary px-7 py-3.5 font-display text-title-md text-on-secondary shadow-[0_0_24px_-6px_rgba(0,151,178,0.7)] transition-all hover:-translate-y-0.5 hover:bg-secondary-fixed-dim hover:text-on-secondary-container"
              >
                Teklif Al
              </Link>
              <a
                href="#hizmetler"
                className="inline-flex items-center justify-center whitespace-nowrap rounded border border-white/10 bg-white/5 px-7 py-3.5 font-display text-title-md text-surface-bright backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/10"
              >
                Hizmetlerimizi İnceleyin
              </a>
            </div>

            <div className="mt-space-2xl w-full rounded border border-white/10 bg-white/5 p-space-md pt-space-lg backdrop-blur-md">
              <div className="grid grid-cols-2 gap-space-md sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <span className="mb-1 block font-body text-label-technical uppercase tracking-wider text-slate-400">
                      {stat.label}
                    </span>
                    <span className="block font-display text-title-md text-surface-bright">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full lg:col-span-5">
            {/* 3) HUD & tarama çizgileri — kamera kartının ARKASINDA */}
            <div
              aria-hidden="true"
              className="hero-parallax-near pointer-events-none absolute -inset-6 will-change-transform lg:-inset-10"
              style={{ transform: hudTransform }}
            >
              <div className="hero-grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />

              {/* Yukarıdan aşağı taranan neon tarama çizgisi */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="hero-scan-line absolute left-0 h-28 w-full bg-gradient-to-b from-transparent via-status-active/25 to-transparent" />
              </div>

              {/* HUD köşe braketleri */}
              <span className="absolute top-0 left-0 h-6 w-6 border-t border-l border-secondary-fixed-dim/40" />
              <span className="absolute top-0 right-0 h-6 w-6 border-t border-r border-secondary-fixed-dim/40" />
              <span className="absolute bottom-0 left-0 h-6 w-6 border-b border-l border-secondary-fixed-dim/40" />
              <span className="absolute right-0 bottom-0 h-6 w-6 border-r border-b border-secondary-fixed-dim/40" />
            </div>

            {/* 4) 3D tilt alan kamera kartı (mobilde hafif süzülme) */}
            <div
              className={`relative will-change-transform ${
                tiltEnabled ? "" : "hero-float"
              }`}
              style={tiltEnabled ? { transform: cardTransform } : undefined}
            >
              <div className="relative overflow-hidden rounded bg-slate-night p-2 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.9)] ring-1 ring-white/10">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded bg-primary">
                  <Image
                    src={images.heroCamera}
                    alt="Modern CCTV sensör donanımı ve kamera lensi yakın plan görünümü"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover mix-blend-luminosity brightness-95 contrast-110"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-night via-transparent to-black/40" />

                  <div className="absolute top-3 right-3 left-3 z-10 flex items-center justify-between font-body text-label-technical text-surface-bright">
                    <div className="flex items-center gap-2 rounded bg-slate-night/85 px-2.5 py-1 backdrop-blur-sm">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-status-active" />
                      <span className="tracking-widest">
                        CAM_01 / CANLI AKIŞ
                      </span>
                    </div>
                    <div className="flex items-center gap-2 rounded bg-slate-night/85 px-2 py-1 text-surface-container-highest backdrop-blur-sm">
                      <span>0.0005 LUX</span>
                      <span className="opacity-40">|</span>
                      <span>4K // 30 FPS</span>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40">
                    <svg
                      width={64}
                      height={64}
                      viewBox="0 0 64 64"
                      fill="none"
                      className="text-secondary-fixed-dim"
                      aria-hidden="true"
                    >
                      <circle
                        cx="32"
                        cy="32"
                        r="16"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeDasharray="2 2"
                      />
                      <line
                        x1="32"
                        y1="8"
                        x2="32"
                        y2="24"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                      <line
                        x1="32"
                        y1="40"
                        x2="32"
                        y2="56"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                      <line
                        x1="8"
                        y1="32"
                        x2="24"
                        y2="32"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                      <line
                        x1="40"
                        y1="32"
                        x2="56"
                        y2="32"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                    </svg>
                  </div>

                  <div className="absolute right-3 bottom-3 left-3 z-10 rounded bg-slate-night/90 p-space-sm text-surface-bright backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="block font-body text-label-technical uppercase text-secondary-fixed-dim">
                          Donanım Serisi
                        </span>
                        <span className="font-display text-title-md text-surface-bright">
                          ColorVu 4K Gece Renkli Sensör (IP67)
                        </span>
                      </div>
                      <Icon name="videocam" className="text-secondary-fixed-dim" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
