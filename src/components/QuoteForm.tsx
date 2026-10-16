"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import Icon from "@/components/Icon";
import {
  areaOptions,
  cameraCountOptions,
  infrastructureOptions,
  propertyTypeOptions,
  serviceTypeOptions,
  siteConfig,
  urgencyOptions,
} from "@/lib/site";

type Channel = "whatsapp" | "email";
type FieldName = "fullName" | "phone" | "property" | "infrastructure" | "kvkk";
type Errors = Partial<Record<FieldName, string>>;

const fieldClass =
  "w-full rounded border border-border-dark bg-slate-night px-3.5 py-2.5 font-body text-body-md text-surface-bright transition-colors placeholder:text-on-primary-container focus:border-secondary-fixed-dim focus:outline-none focus:ring-2 focus:ring-secondary-fixed-dim/30 aria-[invalid=true]:border-red-400";
const labelClass =
  "mb-1 block font-body text-label-md uppercase text-surface-bright";
const chipClass =
  "flex h-full cursor-pointer items-center justify-center rounded border border-border-dark bg-slate-night px-3 py-2.5 text-center font-body text-body-sm text-surface-bright transition-colors hover:border-secondary-fixed-dim/60 peer-checked:border-secondary-fixed-dim peer-checked:bg-secondary/25 peer-checked:font-medium peer-focus-visible:ring-2 peer-focus-visible:ring-secondary-fixed-dim";
const errorClass = "mt-1 font-body text-body-sm text-red-400";

const labelOf = (options: readonly { value: string; label: string }[], value: string) =>
  options.find((option) => option.value === value)?.label ?? "";

function ChoiceGroup({
  name,
  legend,
  hint,
  options,
  columns,
  error,
}: {
  name: string;
  legend: string;
  hint?: string;
  options: readonly { value: string; label: string }[];
  columns: string;
  error?: string;
}) {
  const errorId = `${name}-error`;
  return (
    <fieldset aria-describedby={error ? errorId : undefined}>
      <legend className={labelClass}>{legend}</legend>
      {hint ? (
        <p className="mb-2 font-body text-body-sm text-on-primary-container">{hint}</p>
      ) : null}
      <div className={`grid gap-space-xs ${columns}`}>
        {options.map((option) => (
          <label key={option.value} className="block">
            <input
              className="peer sr-only"
              type="radio"
              name={name}
              value={option.value}
            />
            <span className={chipClass}>{option.label}</span>
          </label>
        ))}
      </div>
      {error ? (
        <p id={errorId} className={errorClass}>
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}

export default function QuoteForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [service, setService] = useState<string>(serviceTypeOptions[0].value);
  const [errors, setErrors] = useState<Errors>({});
  const [sentVia, setSentVia] = useState<Channel | null>(null);

  // Hizmet kartlarındaki "/teklif?hizmet=<hizmet>" linkleri formu ilgili hizmet seçili açar.
  // useSearchParams yerine window okunuyor; böylece sayfa statik kalır ve Suspense gerekmez.
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("hizmet");
    const applyRequested = () => {
      if (requested && serviceTypeOptions.some((option) => option.value === requested)) {
        setService(requested);
      }
    };
    applyRequested();
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const submitter = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const channel: Channel = submitter?.value === "email" ? "email" : "whatsapp";
    const data = new FormData(event.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();

    const fullName = get("fullName");
    const phone = get("phone");
    const property = get("property");
    const infrastructure = get("infrastructure");

    const nextErrors: Errors = {};
    if (!fullName) nextErrors.fullName = "Lütfen adınızı ve soyadınızı yazın.";
    if (phone.replace(/\D/g, "").length < 10)
      nextErrors.phone = "Lütfen geçerli bir telefon numarası yazın.";
    if (!property) nextErrors.property = "Lütfen mekan / proje tipini seçin.";
    if (!infrastructure) nextErrors.infrastructure = "Lütfen altyapı durumunu seçin.";
    if (!data.get("kvkk")) nextErrors.kvkk = "Devam etmek için onay vermeniz gerekiyor.";

    setErrors(nextErrors);
    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      setSentVia(null);
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    const lines = [
      `Ad Soyad: ${fullName}`,
      `Telefon: ${phone}`,
      `Lokasyon / Adres: ${get("location") || "(Belirtilmemiş)"}`,
      "",
      `Hizmet Türü: ${labelOf(serviceTypeOptions, get("service"))}`,
      `Mekan / Proje Tipi: ${labelOf(propertyTypeOptions, property)}`,
      `Altyapı Durumu: ${labelOf(infrastructureOptions, infrastructure)}`,
      `Kamera Sayısı: ${labelOf(cameraCountOptions, get("cameraCount")) || "(Seçilmemiş)"}`,
      `Alan Büyüklüğü: ${labelOf(areaOptions, get("area")) || "(Seçilmemiş)"}`,
      `Aciliyet: ${labelOf(urgencyOptions, get("urgency"))}`,
      "",
      `Mesaj / İhtiyaç Detayları: ${get("notes") || "(Yok)"}`,
    ];
    const title = `${siteConfig.name.toLocaleUpperCase("tr-TR")} - Keşif ve Fiyat Teklifi Talebi`;

    if (channel === "whatsapp") {
      const text = [title, "", ...lines].join("\n");
      window.open(
        `${siteConfig.whatsappUrl}?text=${encodeURIComponent(text)}`,
        "_blank",
        "noopener,noreferrer",
      );
    } else {
      const subject = `Keşif ve Teklif Talebi - ${fullName}`;
      window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(lines.join("\n"))}`;
    }
    setSentVia(channel);
  };

  const describedBy = (field: FieldName) => (errors[field] ? `${field}-error` : undefined);

  return (
    <form ref={formRef} className="space-y-space-lg" noValidate onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="fullName">
            Ad Soyad *
          </label>
          <input
            className={fieldClass}
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            placeholder="Örn: Ahmet Yılmaz"
            aria-invalid={errors.fullName ? true : undefined}
            aria-describedby={describedBy("fullName")}
          />
          {errors.fullName ? (
            <p id="fullName-error" className={errorClass}>
              {errors.fullName}
            </p>
          ) : null}
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Telefon Numarası *
          </label>
          <input
            className={fieldClass}
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="0 (5XX) XXX XX XX"
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={describedBy("phone")}
          />
          {errors.phone ? (
            <p id="phone-error" className={errorClass}>
              {errors.phone}
            </p>
          ) : null}
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="location">
            Lokasyon / Adres
          </label>
          <input
            className={fieldClass}
            id="location"
            name="location"
            type="text"
            autoComplete="street-address"
            placeholder="İlçe / Mahalle / Sokak"
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="service">
          Hizmet Türü *
        </label>
        <select
          className={fieldClass}
          id="service"
          name="service"
          value={service}
          onChange={(event) => setService(event.target.value)}
        >
          {serviceTypeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <ChoiceGroup
        name="property"
        legend="Mekan / Proje Tipi *"
        options={propertyTypeOptions}
        columns="grid-cols-1 sm:grid-cols-2"
        error={errors.property}
      />

      <ChoiceGroup
        name="infrastructure"
        legend="Altyapı Durumu *"
        hint="Sahada elektrik ve internet bulunuyor mu?"
        options={infrastructureOptions}
        columns="grid-cols-1 sm:grid-cols-2"
        error={errors.infrastructure}
      />

      <ChoiceGroup
        name="cameraCount"
        legend="Kamera Sayısı"
        hint="Emin değilseniz keşifte birlikte belirleyebiliriz."
        options={cameraCountOptions}
        columns="grid-cols-2 sm:grid-cols-3"
      />

      <ChoiceGroup
        name="area"
        legend="Alan Büyüklüğü"
        options={areaOptions}
        columns="grid-cols-1 sm:grid-cols-2"
      />

      <div>
        <label className={labelClass} htmlFor="urgency">
          Aciliyet Durumu
        </label>
        <select
          className={fieldClass}
          id="urgency"
          name="urgency"
          defaultValue={urgencyOptions[0].value}
        >
          {urgencyOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="notes">
          Mesaj / İhtiyaç Detayları
        </label>
        <textarea
          className={fieldClass}
          id="notes"
          name="notes"
          rows={3}
          placeholder="Korunacak alanın özellikleri, gece renkli kamera, estetik kablolama gibi taleplerinizi yazabilirsiniz..."
        />
      </div>

      <div>
        <div className="flex items-start gap-space-sm">
          <input
            className="mt-0.5 h-5 w-5 shrink-0 accent-secondary"
            id="kvkk"
            name="kvkk"
            type="checkbox"
            aria-invalid={errors.kvkk ? true : undefined}
            aria-describedby={describedBy("kvkk")}
          />
          <label className="font-body text-body-sm text-surface-bright" htmlFor="kvkk">
            <Link
              href="/kvkk"
              target="_blank"
              className="text-secondary-fixed-dim underline underline-offset-2 hover:text-surface-bright"
            >
              KVKK Aydınlatma Metni
            </Link>
            &apos;ni okudum; bilgilerimin keşif ve teklif talebim için işlenmesini
            onaylıyorum. *
          </label>
        </div>
        {errors.kvkk ? (
          <p id="kvkk-error" className={errorClass}>
            {errors.kvkk}
          </p>
        ) : null}
      </div>

      <div className="grid grid-cols-1 gap-space-sm sm:grid-cols-2">
        <button
          type="submit"
          name="channel"
          value="whatsapp"
          className="flex w-full items-center justify-center gap-space-xs rounded bg-status-active px-6 py-3.5 font-display text-title-md text-slate-night shadow-md transition-colors hover:bg-emerald-400"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          <span>WhatsApp ile Gönder</span>
        </button>
        <button
          type="submit"
          name="channel"
          value="email"
          className="flex w-full items-center justify-center gap-space-xs rounded bg-secondary px-6 py-3.5 font-display text-title-md text-on-secondary shadow-md transition-colors hover:bg-secondary-fixed-dim hover:text-primary"
        >
          <Icon name="mail" className="text-xl" />
          <span>E-posta ile Gönder</span>
        </button>
      </div>

      <p className="font-body text-body-sm text-on-primary-container">
        * işaretli alanların doldurulması zorunludur. Butonlar, talebinizi hazır
        bir mesaj olarak WhatsApp&apos;ta veya e-posta uygulamanızda açar;
        göndermek için son adımda onay vermeniz yeterli.
      </p>

      <div role="status" aria-live="polite">
        {sentVia ? (
          <div className="flex items-start gap-space-xs rounded bg-status-active/15 p-space-sm font-body text-body-sm text-status-active">
            <Icon name="check_circle" className="text-base" />
            <span>
              {sentVia === "whatsapp"
                ? "Mesajınız WhatsApp'ta hazırlandı. Göndermeyi unutmayın."
                : `E-posta uygulamanızda mesajınız hazırlandı. Açılmadıysa bilgilerinizi ${siteConfig.email} adresine iletebilirsiniz.`}
            </span>
          </div>
        ) : null}
      </div>
    </form>
  );
}
