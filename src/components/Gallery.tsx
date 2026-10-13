import Image from "next/image";
import { galleryItems } from "@/lib/site";

export default function Gallery() {
  return (
    <section
      id="projeler"
      className="w-full bg-surface-container-lowest py-space-2xl lg:py-space-3xl"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-space-2xl flex flex-col justify-between gap-space-md md:flex-row md:items-end">
          <div>
            <span className="mb-space-xs block font-body text-label-technical uppercase tracking-widest text-secondary">
              Saha Referansları
            </span>
            <h2 className="font-display text-headline-lg-mobile tracking-tight text-primary md:text-headline-lg">
              Uygulamalarımızdan örnekler
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-status-active" />
            <span className="font-body text-label-technical uppercase text-on-surface-variant">
              İvrindi &amp; Çevre İlçeler Saha Kayıtları
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-space-md md:grid-cols-12">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className={`group relative h-80 overflow-hidden rounded border border-border-dark bg-slate-night shadow-sm ${
                item.wide ? "md:col-span-8" : "md:col-span-4"
              }`}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes={item.wide ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-space-lg">
                <span className="mb-1 font-body text-label-technical uppercase tracking-wider text-secondary-fixed-dim">
                  {item.eyebrow}
                </span>
                <h4 className="font-display text-headline-sm text-surface-bright">
                  {item.title}
                </h4>
                <p className="mt-1 max-w-lg font-body text-body-sm text-surface-container-high">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
