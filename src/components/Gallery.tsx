"use client";

import Image from "next/image";
import { useState } from "react";
import Icon from "@/components/Icon";
import {
  galleryCategories,
  galleryItems,
  siteConfig,
  type GalleryCategory,
} from "@/lib/site";

type Filter = "Tümü" | GalleryCategory;

const filters: Filter[] = ["Tümü", ...galleryCategories];

export default function Gallery() {
  const [active, setActive] = useState<Filter>("Tümü");

  const visible =
    active === "Tümü"
      ? galleryItems
      : galleryItems.filter((item) => item.category === active);
  // Filtrelenmiş görünümde tüm kartlar aynı genişlikte olsun ki boşluk kalmasın.
  const isFiltered = active !== "Tümü";

  return (
    <section
      id="projeler"
      className="w-full bg-surface-container-lowest py-space-2xl lg:py-space-3xl"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-space-xl flex flex-col justify-between gap-space-md md:flex-row md:items-end">
          <div>
            <span className="mb-space-xs block font-body text-label-technical uppercase tracking-widest text-secondary">
              Saha Referansları
            </span>
            <h2 className="font-display text-headline-lg-mobile tracking-tight text-primary md:text-headline-lg">
              Uygulamalarımızdan örnekler
            </h2>
          </div>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-body-sm text-on-surface-variant transition-colors hover:text-secondary"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-status-active" />
            <span>
              Instagram&apos;da{" "}
              <strong className="font-semibold text-primary">
                {siteConfig.instagramFollowers} takipçi
              </strong>{" "}
              · Tüm çalışmalarımız
            </span>
            <Icon name="open_in_new" className="text-sm" />
          </a>
        </div>

        <div
          role="group"
          aria-label="Uygulama kategorileri"
          className="mb-space-lg flex flex-wrap gap-space-xs"
        >
          {filters.map((filter) => {
            const isActive = active === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                aria-pressed={isActive}
                className={`rounded border px-4 py-2 font-display text-title-md transition-colors ${
                  isActive
                    ? "border-primary-container bg-primary-container text-on-primary"
                    : "border-border-hairline text-on-surface-variant hover:border-secondary hover:text-primary"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div aria-live="polite" className="grid grid-cols-1 gap-space-md md:grid-cols-12">
          {visible.map((item) => (
            <div
              key={item.title}
              className={`group relative h-80 overflow-hidden rounded border border-border-dark bg-slate-night shadow-sm ${
                isFiltered ? "md:col-span-6" : item.wide ? "md:col-span-8" : "md:col-span-4"
              }`}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes={
                  !isFiltered && item.wide
                    ? "(min-width: 768px) 66vw, 100vw"
                    : "(min-width: 768px) 50vw, 100vw"
                }
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-space-lg">
                <span className="mb-1 font-body text-label-technical uppercase tracking-wider text-secondary-fixed-dim">
                  {item.category} · {item.eyebrow}
                </span>
                <h3 className="font-display text-headline-sm text-surface-bright">
                  {item.title}
                </h3>
                <p className="mt-1 max-w-lg font-body text-body-sm text-surface-container-high">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          {isFiltered ? (
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex h-80 flex-col items-center justify-center gap-space-sm rounded border border-dashed border-border-hairline bg-surface-container-low p-space-lg text-center transition-colors hover:border-secondary ${
                visible.length === 0 ? "md:col-span-12" : "md:col-span-6"
              }`}
            >
              <Icon name="open_in_new" className="text-headline-md text-secondary" />
              <span className="font-display text-headline-sm text-primary">
                {visible.length === 0
                  ? `${active} çalışmalarımız Instagram'da`
                  : `Daha fazla ${active} uygulaması`}
              </span>
              <span className="max-w-sm font-body text-body-md text-on-surface-variant">
                Güncel montaj fotoğrafları ve videoları için Instagram
                hesabımızı ve öne çıkanlarımızı inceleyin.
              </span>
              <span className="font-display text-title-md text-secondary">
                {siteConfig.instagramHandle}
              </span>
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
