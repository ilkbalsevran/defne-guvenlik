"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import { propertyTypeOptions, serviceTypeOptions } from "@/lib/site";

const fieldClass =
  "w-full rounded border border-border-dark bg-slate-night px-3.5 py-2.5 font-body text-body-md text-surface-bright transition-colors placeholder:text-on-surface-variant focus:border-secondary focus:bg-primary focus:outline-none focus:ring-2 focus:ring-secondary/30";
const labelClass =
  "mb-1 block font-body text-label-technical uppercase tracking-wider text-surface-bright";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="space-y-space-md"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="full-name">
            Ad Soyad *
          </label>
          <input
            className={fieldClass}
            id="full-name"
            name="full-name"
            type="text"
            required
            placeholder="Örn: Ahmet Yılmaz"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone-number">
            Telefon Numarası *
          </label>
          <input
            className={fieldClass}
            id="phone-number"
            name="phone-number"
            type="tel"
            required
            placeholder="0 (5XX) XXX XX XX"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="service-type">
            Hizmet Türü *
          </label>
          <select className={fieldClass} id="service-type" name="service-type" defaultValue="kamera">
            {serviceTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="property-type">
            Mekan / Proje Tipi *
          </label>
          <select className={fieldClass} id="property-type" name="property-type" defaultValue="konut">
            {propertyTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="project-notes">
          Mesaj / İhtiyaç Detayları
        </label>
        <textarea
          className={fieldClass}
          id="project-notes"
          name="project-notes"
          rows={3}
          placeholder="Korunacak alanın tahmini büyüklüğü, kamera sayısı veya özel taleplerinizi iletebilirsiniz..."
        />
      </div>

      <div className="flex items-center gap-space-sm pt-space-xs">
        <input
          className="h-4 w-4 rounded-sm border border-border-dark bg-slate-night text-secondary focus:ring-0"
          id="kvkk-check"
          name="kvkk-check"
          type="checkbox"
          required
        />
        <label className="font-body text-body-sm text-on-primary-container" htmlFor="kvkk-check">
          KVKK kapsamında bilgilerimin keşif randevusu için işlenmesini
          onaylıyorum.
        </label>
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-space-xs rounded bg-secondary px-6 py-3.5 font-display text-title-md text-surface-bright shadow-md transition-colors hover:bg-secondary-fixed-dim hover:text-primary"
      >
        <span>Teklif Talep Et</span>
        <Icon name="send" className="text-sm" />
      </button>

      {submitted ? (
        <div
          role="status"
          className="flex items-center gap-space-xs rounded bg-status-active/20 p-space-sm font-body text-body-sm text-status-active"
        >
          <Icon name="check_circle" className="text-sm" />
          <span>
            Talebiniz kaydedildi. Uzman ekibimiz mesai saatleri içinde sizinle
            iletişime geçecektir.
          </span>
        </div>
      ) : null}
    </form>
  );
}
