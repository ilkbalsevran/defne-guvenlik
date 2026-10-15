"use client";

import { useMemo, useState } from "react";
import { siteConfig } from "@/lib/site";

type PropertyType = "Müstakil Ev" | "Apartman/ Site" | "İş Yeri" | "Tarla / Çiftlik" | "Diğer" | null;

type CameraCount = "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12+" | null;

type Infrastructure =
  | "İnternet var, elektrik var"
  | "İnternet var, elektrik yok"
  | "İnternet yok, elektrik var"
  | "İnternet yok, elektrik yok"
  | null;

type AreaType = "Küçük (0–50 m²)" | "Orta (51–150 m²)" | "Büyük (151–500 m²)" | "Çok Büyük (500+ m²)" | null;

const propertyOptions: PropertyType[] = [
  "Müstakil Ev",
  "Apartman/ Site",
  "İş Yeri",
  "Tarla / Çiftlik",
  "Diğer",
];

const cameraCountOptions: CameraCount[] = ["1", "2", "3", "4", "5", "6", "8", "10", "12+"];

const areaOptions: AreaType[] = ["Küçük (0–50 m²)", "Orta (51–150 m²)", "Büyük (151–500 m²)", "Çok Büyük (500+ m²)"];

const infrastructureOptions: Infrastructure[] = [
  "İnternet var, elektrik var",
  "İnternet var, elektrik yok",
  "İnternet yok, elektrik var",
  "İnternet yok, elektrik yok",
];

export default function SecurityWizard() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [freeText, setFreeText] = useState("");
  const [propertyType, setPropertyType] = useState<PropertyType>(null);
  const [cameraCount, setCameraCount] = useState<CameraCount>(null);
  const [area, setArea] = useState<AreaType>(null);
  const [infrastructure, setInfrastructure] = useState<Infrastructure>(null);
  const [urgency, setUrgency] = useState("En yakın zamanda");
  const [agreed, setAgreed] = useState(false);

  const isComplete = useMemo(
    () =>
      fullName.trim() !== "" &&
      phone.trim() !== "" &&
      propertyType !== null &&
      cameraCount !== null &&
      area !== null &&
      infrastructure !== null &&
      agreed,
    [agreed, area, cameraCount, fullName, infrastructure, phone, propertyType],
  );

  const whatsappUrl = useMemo(() => {
    const lines = [
      "DEFNE GÜVENLİK - Hızlı Keşif & Fiyat Teklifi",
      "",
      `Ad Soyad: ${fullName.trim() || "(Belirtilmemiş)"}`,
      `Telefon: ${phone.trim() || "(Belirtilmemiş)"}`,
      `Lokasyon/Adres: ${location.trim() || "(Belirtilmemiş)"}`,
      "",
      "Talep Bilgileri",
      `Mülk Türü: ${propertyType ?? "(Seçilmemiş)"}`,
      `Kamera Sayısı: ${cameraCount ?? "(Seçilmemiş)"}`,
      `Alanın Büyüklüğü: ${area ?? "(Seçilmemiş)"}`,
      `Altyapı Durumu: ${infrastructure ?? "(Seçilmemiş)"}`,
      `Aciliyet: ${urgency}`,
      "",
      `Ek Not / Talep: ${freeText.trim() || "(Yok)"}`,
      "",
      "Lütfen bu bilgiler doğrultusunda keşif ve teklifinizi gönderiniz.",
    ];
    return `https://wa.me/905343738890?text=${encodeURIComponent(lines.join("\n"))}`;
  }, [fullName, phone, location, propertyType, cameraCount, area, infrastructure, urgency, freeText]);

  const cardBase = "group rounded-md border px-2 py-2 text-left transition-all duration-200 text-sm";

  const cardClasses = (isActive: boolean) =>
    isActive
      ? `${cardBase} border-cyan-400/80 bg-cyan-400/10 text-cyan-100 shadow-[0_0_10px_rgba(34,211,238,0.15)]`
      : `${cardBase} border-white/10 bg-slate-950/40 text-slate-200 hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:text-cyan-100`;

  return (
    <section
      id="hizli-kesif-fiyat"
      className="relative w-full bg-slate-950 px-3 py-5 text-white sm:px-4 lg:px-6"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%),_radial-gradient(ellipse_at_bottom,_rgba(59,130,246,0.10),_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="mx-auto flex max-w-4xl flex-col gap-3">
        <header className="flex flex-col items-center text-center">
          <span className="mb-1 inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.3em] text-cyan-200/90">
            Defne Güvenlik
          </span>
          <h2 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
            Hızlı Keşif ve Fiyat Teklifi
          </h2>
          <p className="mt-1 max-w-xl text-xs text-slate-300 sm:text-sm">
            Aşağıdaki formu doldurun, tüm bilgilerinizle beraber WhatsApp&apos;tan teklif talebinizi iletebilirsiniz.
          </p>
        </header>

        <div className="rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur-md sm:p-4">
          <h3 className="text-sm font-semibold tracking-tight">1) İletişim Bilgileri</h3>
          <p className="mt-0.5 text-xs text-slate-400">Keşif için sizinle iletişime geçebileceğimiz bilgileri giriniz.</p>
          <div className="mt-2 grid grid-cols-1 gap-2 md:grid-cols-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="fullName" className="text-xs text-slate-300">
                Ad Soyad *
              </label>
              <input
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full rounded-md border border-white/10 bg-slate-950/70 px-2 py-1.5 text-xs text-white placeholder:text-slate-500 focus:border-cyan-400/70 focus:outline-none focus:ring-1 focus:ring-cyan-400/20"
                placeholder="Örn: Ahmet Yılmaz"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="phone" className="text-xs text-slate-300">
                Telefon Numarası *
              </label>
              <input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-md border border-white/10 bg-slate-950/70 px-2 py-1.5 text-xs text-white placeholder:text-slate-500 focus:border-cyan-400/70 focus:outline-none focus:ring-1 focus:ring-cyan-400/20"
                placeholder="0 (5XX) XXX XX XX"
              />
            </div>
            <div className="flex flex-col gap-1 md:col-span-2">
              <label htmlFor="location" className="text-xs text-slate-300">
                Lokasyon / Adres
              </label>
              <input
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-md border border-white/10 bg-slate-950/70 px-2 py-1.5 text-xs text-white placeholder:text-slate-500 focus:border-cyan-400/70 focus:outline-none focus:ring-1 focus:ring-cyan-400/20"
                placeholder="İlçe / Mahalle / Sokak bilgilerini yazabilirsiniz"
              />
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur-md sm:p-4">
          <h3 className="text-sm font-semibold tracking-tight">2) Mülk Türü *</h3>
          <p className="mt-0.5 text-xs text-slate-400">Korunmasını istediğiniz alanın türünü seçiniz.</p>
          <div className="mt-2 grid grid-cols-2 gap-1.5 sm:grid-cols-3 md:grid-cols-5">
            {propertyOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setPropertyType(option)}
                className={cardClasses(propertyType === option)}
              >
                <span className="block text-xs">{option}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur-md sm:p-4">
          <h3 className="text-sm font-semibold tracking-tight">3) İstenen Kamera Sayısı *</h3>
          <p className="mt-0.5 text-xs text-slate-400">Kaç adet kamera istediğinizi kesin olarak seçiniz.</p>
          <div className="mt-2 grid grid-cols-3 gap-1.5 sm:grid-cols-5 md:grid-cols-7">
            {cameraCountOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setCameraCount(option)}
                className={cardClasses(cameraCount === option)}
              >
                <span className="block text-center text-xs">{option}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur-md sm:p-4">
          <h3 className="text-sm font-semibold tracking-tight">4) Alanın Büyüklüğü *</h3>
          <p className="mt-0.5 text-xs text-slate-400">Korunacak alanın yaklaşık büyüklüğünü seçiniz.</p>
          <div className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
            {areaOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setArea(option)}
                className={cardClasses(area === option)}
              >
                <span className="block text-xs">{option}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur-md sm:p-4">
          <h3 className="text-sm font-semibold tracking-tight">5) Altyapı Durumu *</h3>
          <p className="mt-0.5 text-xs text-slate-400">Mevcut elektrik ve internet durumunuzu seçiniz.</p>
          <div className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
            {infrastructureOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setInfrastructure(option)}
                className={cardClasses(infrastructure === option)}
              >
                <span className="block text-xs">{option}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur-md sm:p-4">
          <h3 className="text-sm font-semibold tracking-tight">6) Ek Bilgiler</h3>
          <div className="mt-2 flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="urgency" className="text-xs text-slate-300">
                Aciliyet Durumu
              </label>
              <select
                id="urgency"
                value={urgency}
                onChange={(e) => setUrgency(e.target.value)}
                className="w-full rounded-md border border-white/10 bg-slate-950/70 px-2 py-1.5 text-xs text-white focus:border-cyan-400/70 focus:outline-none focus:ring-1 focus:ring-cyan-400/20"
              >
                <option value="En yakın zamanda">En yakın zamanda</option>
                <option value="1-2 hafta içinde">1-2 hafta içinde</option>
                <option value="Fiyat alıp düşüneceğim">Fiyat alıp düşüneceğim</option>
                <option value="Acil">Acil</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="notes" className="text-xs text-slate-300">
                Mesaj / İhtiyaç Detayları
              </label>
              <textarea
                id="notes"
                rows={3}
                value={freeText}
                onChange={(e) => setFreeText(e.target.value)}
                className="min-h-[60px] w-full rounded-md border border-white/10 bg-slate-950/70 px-2 py-1.5 text-xs text-white placeholder:text-slate-500 focus:border-cyan-400/70 focus:outline-none focus:ring-1 focus:ring-cyan-400/20"
                placeholder="Örn: Gece renkli kamera istiyorum, kablolama estetik olsun vb."
              />
            </div>
            <label className="flex items-center gap-2 rounded-md border border-white/10 bg-slate-950/40 px-2 py-1.5">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="h-3 w-3 rounded border-white/20 bg-slate-900 text-cyan-400 focus:ring-cyan-400/40 focus:ring-offset-0"
              />
              <span className="text-[11px] text-slate-200">
                Keşif ve teklif talebi için iletişim bilgilerimin kullanılmasını onaylıyorum. *
              </span>
            </label>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!isComplete}
            className={`group inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-200 ${
              isComplete
                ? "border border-emerald-400/60 bg-emerald-500/90 text-white shadow-[0_0_8px_rgba(16,185,129,0.45)] hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-[0_0_10px_rgba(16,185,129,0.55)]"
                : "cursor-not-allowed border border-white/20 bg-white/10 text-slate-400 opacity-70"
            }`}
            onClick={(e) => {
              if (!isComplete) e.preventDefault();
            }}
          >
            <span>WHATSAPP&apos;TAN TEKLİF İSTE</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </a>
          <p className="text-[11px] text-slate-400">* işaretli alanların doldurulması gerekmektedir.</p>
        </div>

        <footer className="flex flex-col items-center gap-1 text-center text-[11px] text-slate-400">
          <p>Daha detaylı keşif ve saha incelemesi için hemen bizimle iletişime geçin.</p>
          <a
            href="tel:+905343738890"
            className="text-sm font-medium text-cyan-300 transition-colors hover:text-cyan-200"
          >
            0534 373 8890
          </a>
          <p className="text-[10px] text-slate-500">
            © {siteConfig.copyrightYear} Defne Güvenlik - Tüm hakları saklıdır.
          </p>
        </footer>
      </div>
    </section>
  );
}
