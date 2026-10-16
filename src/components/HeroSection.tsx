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

/**
 * Lensin kamera kartındaki konumu (yüzde). Görsel 512×279, 4:5 kutuda
 * object-cover ile ortadan kırpılıyor; lens görselde ~(280, 160) px'te.
 */
const LENS = { x: 60.7, y: 57.3 };
/** Takip SVG'sinin koordinat sistemi: kartın 4:5 oranıyla aynı. */
const VIEW_W = 80;
const VIEW_H = 100;

/** Fare konumunu -1..1 aralığına normalize ederek CSS değişkenine yazar. */
export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewRef = useRef<HTMLDivElement>(null);
  const coneRef = useRef<SVGPolygonElement>(null);
  const coneGradientRef = useRef<SVGLinearGradientElement>(null);
  const readoutRef = useRef<HTMLSpanElement>(null);
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
    // Kamera kartı içindeki hedef nokta (0..1); dışarıdayken kenara yapışır.
    const aimTarget = { x: 0.5, y: 0.5 };
    const aim = { x: 0.5, y: 0.5 };
    let raf = 0;
    let running = false;

    const renderAim = () => {
      const view = viewRef.current;
      if (!view) return;
      view.style.setProperty("--px", aim.x.toFixed(4));
      view.style.setProperty("--py", aim.y.toFixed(4));

      const lx = (LENS.x / 100) * VIEW_W;
      const ly = (LENS.y / 100) * VIEW_H;
      const tx = aim.x * VIEW_W;
      const ty = aim.y * VIEW_H;
      const dx = tx - lx;
      const dy = ty - ly;
      const len = Math.hypot(dx, dy) || 1;
      const nx = -dy / len;
      const ny = dx / len;
      const near = 1.2;
      const far = Math.min(9, len * 0.35);

      coneRef.current?.setAttribute(
        "points",
        [
          [lx + nx * near, ly + ny * near],
          [tx + nx * far, ty + ny * far],
          [tx - nx * far, ty - ny * far],
          [lx - nx * near, ly - ny * near],
        ]
          .map(([x, y]) => `${x.toFixed(2)},${y.toFixed(2)}`)
          .join(" "),
      );
      const gradient = coneGradientRef.current;
      if (gradient) {
        gradient.setAttribute("x1", lx.toFixed(2));
        gradient.setAttribute("y1", ly.toFixed(2));
        gradient.setAttribute("x2", tx.toFixed(2));
        gradient.setAttribute("y2", ty.toFixed(2));
      }
      if (readoutRef.current) {
        const fmt = (v: number) => Math.round(v * 999).toString().padStart(3, "0");
        readoutRef.current.textContent = `X${fmt(aim.x)} Y${fmt(aim.y)}`;
      }
    };

    const render = () => {
      current.x += (target.x - current.x) * 0.12;
      current.y += (target.y - current.y) * 0.12;
      aim.x += (aimTarget.x - aim.x) * 0.1;
      aim.y += (aimTarget.y - aim.y) * 0.1;

      section.style.setProperty("--mx", current.x.toFixed(4));
      section.style.setProperty("--my", current.y.toFixed(4));
      renderAim();

      if (
        Math.abs(target.x - current.x) > 0.0005 ||
        Math.abs(target.y - current.y) > 0.0005 ||
        Math.abs(aimTarget.x - aim.x) > 0.0005 ||
        Math.abs(aimTarget.y - aim.y) > 0.0005
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

      const view = viewRef.current;
      if (view) {
        const v = view.getBoundingClientRect();
        const clamp = (n: number, min: number, max: number) =>
          Math.min(max, Math.max(min, n));
        // Dikeyde üst HUD ve alt bilgi panelinin arasında kalır.
        aimTarget.x = clamp((event.clientX - v.left) / v.width, 0.08, 0.92);
        aimTarget.y = clamp((event.clientY - v.top) / v.height, 0.16, 0.74);
      }
      schedule();
    };

    const onLeave = () => {
      target.x = 0;
      target.y = 0;
      aimTarget.x = 0.5;
      aimTarget.y = 0.5;
      schedule();
    };

    renderAim();

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
                <div
                  ref={viewRef}
                  className="relative aspect-[4/5] w-full overflow-hidden rounded bg-primary"
                >
                  <Image
                    src={images.heroCamera}
                    alt="Modern CCTV sensör donanımı ve kamera lensi yakın plan görünümü"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover mix-blend-luminosity brightness-95 contrast-110"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-night via-transparent to-black/40" />

                  {/* 5) Fareyi takip eden görüş konisi ve hedef aydınlatması */}
                  {tiltEnabled && (
                    <>
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 mix-blend-screen"
                        style={{
                          background:
                            "radial-gradient(circle at calc(var(--px, 0.5) * 100%) calc(var(--py, 0.5) * 100%), rgba(0, 151, 178, 0.28), transparent 22%)",
                        }}
                      />
                      <svg
                        aria-hidden="true"
                        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
                        className="pointer-events-none absolute inset-0 h-full w-full text-secondary-fixed-dim"
                      >
                        <defs>
                          <linearGradient
                            ref={coneGradientRef}
                            id="hero-cone-gradient"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stopColor="currentColor" stopOpacity="0.45" />
                            <stop offset="1" stopColor="currentColor" stopOpacity="0.04" />
                          </linearGradient>
                        </defs>
                        <polygon ref={coneRef} fill="url(#hero-cone-gradient)" />
                      </svg>
                    </>
                  )}

                  {/* 6) Lens: parlayan halka, kayıt ışığı ve imlece kayan yansıma */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute aspect-square w-[7%] -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${LENS.x}%`, top: `${LENS.y}%` }}
                  >
                    <span className="absolute inset-0 rounded-full ring-1 ring-secondary-fixed-dim/70 shadow-[0_0_14px_2px_rgba(0,151,178,0.55)]" />
                    <span className="absolute -inset-[35%] animate-ping rounded-full border border-secondary-fixed-dim/30 [animation-duration:2.4s]" />
                    <span
                      className="absolute top-1/2 left-1/2 h-[28%] w-[28%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 blur-[1px]"
                      style={{
                        marginLeft: `calc((var(--px, 0.5) - ${LENS.x / 100}) * 30%)`,
                        marginTop: `calc((var(--py, 0.5) - ${LENS.y / 100}) * 30%)`,
                      }}
                    />
                    <span className="absolute -top-[40%] -right-[40%] h-1.5 w-1.5 animate-pulse rounded-full bg-red-500 shadow-[0_0_6px_1px_rgba(239,68,68,0.8)]" />
                  </div>

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

                  <div
                    className={`pointer-events-none absolute flex -translate-x-1/2 -translate-y-1/2 justify-center ${
                      tiltEnabled ? "opacity-80" : "opacity-40"
                    }`}
                    style={{
                      left: "calc(var(--px, 0.5) * 100%)",
                      top: "calc(var(--py, 0.5) * 100%)",
                    }}
                  >
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
                    {tiltEnabled && (
                      <span
                        ref={readoutRef}
                        className="absolute top-full mt-1 whitespace-nowrap rounded bg-slate-night/70 px-1.5 py-0.5 font-body text-[10px] tracking-widest text-secondary-fixed-dim"
                      />
                    )}
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
