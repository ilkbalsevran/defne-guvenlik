import Image from "next/image";
import Icon from "@/components/Icon";
import { images } from "@/lib/site";

const stats = [
  { label: "Kamera Altyapısı", value: "IP & AHD 4K Ultra" },
  { label: "Enerji Entegrasyonu", value: "Solar & Hibrit Panel" },
  { label: "Teknik Servis", value: "Bölgesel Hızlı Yanıt" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden bg-surface-container-lowest"
    >
      <div className="mx-auto max-w-7xl px-6 py-space-xl lg:px-12 lg:py-space-3xl">
        <div className="grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12 lg:gap-space-2xl">
          <div className="z-10 flex flex-col items-start lg:col-span-7">
            <div className="mb-space-lg inline-flex items-center gap-space-xs rounded bg-surface-container px-3 py-1.5 font-body text-label-technical uppercase tracking-wider text-primary">
              <span className="h-2 w-2 animate-pulse rounded-full bg-status-active" />
              <span>Balıkesir &amp; İvrindi Saha Mühendisliği</span>
              <span className="opacity-40">|</span>
              <span className="font-medium text-secondary">
                IP67 Endüstriyel Standart
              </span>
            </div>

            <h1 className="mb-space-md font-display text-display-hero-mobile tracking-tight text-primary md:text-display-hero">
              Güvenliğinizi doğru sistemlerle güçlendirin.
            </h1>

            <p className="mb-space-xl max-w-xl font-body text-body-lg leading-relaxed text-on-surface-variant">
              Defne Güvenlik, saha koşullarına özel projelendirilen mühendislik
              çözümleriyle tesislerinizi ve mülklerinizi korur. 4K Ultra IP
              kameralar, akıllı çevre alarmları ve bağımsız enerji altyapısı.
            </p>

            <div className="flex w-full flex-wrap items-center gap-space-md sm:w-auto">
              <a
                href="#teklif"
                className="inline-flex items-center justify-center rounded bg-primary-container px-7 py-3.5 font-display text-title-md text-on-primary shadow-md transition-all hover:bg-slate-night"
              >
                Teklif Al
              </a>
              <a
                href="#hizmetler"
                className="inline-flex items-center justify-center rounded bg-surface-container-low px-7 py-3.5 font-display text-title-md text-primary transition-all hover:bg-surface-container"
              >
                Hizmetlerimizi İnceleyin
              </a>
            </div>

            <div className="mt-space-2xl w-full rounded bg-surface-container-low p-space-md pt-space-lg">
              <div className="grid grid-cols-2 gap-space-md sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <span className="mb-1 block font-body text-label-technical uppercase tracking-wider text-on-surface-variant">
                      {stat.label}
                    </span>
                    <span className="block font-display text-title-md text-primary">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full lg:col-span-5">
            <div className="relative overflow-hidden rounded bg-slate-night p-2 shadow-xl">
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
                    <span className="tracking-widest">CAM_01 / CANLI AKIŞ</span>
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
                    <line x1="32" y1="8" x2="32" y2="24" stroke="currentColor" strokeWidth="1" />
                    <line x1="32" y1="40" x2="32" y2="56" stroke="currentColor" strokeWidth="1" />
                    <line x1="8" y1="32" x2="24" y2="32" stroke="currentColor" strokeWidth="1" />
                    <line x1="40" y1="32" x2="56" y2="32" stroke="currentColor" strokeWidth="1" />
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
    </section>
  );
}
