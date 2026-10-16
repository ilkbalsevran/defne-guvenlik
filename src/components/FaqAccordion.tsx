"use client";

import { useState } from "react";
import { faqItems, siteConfig } from "@/lib/site";


export default function FaqAccordion() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem((current) => (current === id ? null : id));
  };

  return (
    <section
      id="sikca-sorulan-sorular"
      className="relative isolate w-full bg-slate-night py-space-2xl text-surface-bright lg:py-space-3xl"
      aria-labelledby="faq-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(0,151,178,0.14),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[1px] bg-gradient-to-r from-transparent via-secondary-fixed-dim/40 to-transparent" />

      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <header className="mb-space-xl text-center">
          <span className="mb-space-xs block font-body text-label-technical uppercase tracking-widest text-secondary-fixed-dim">
            Merak Edilenler
          </span>
          <h2 id="faq-heading" className="font-display text-headline-lg-mobile tracking-tight text-surface-bright md:text-headline-lg">
            Sıkça Sorulan Sorular
          </h2>
          <p className="mt-space-xs font-body text-body-lg text-on-primary-container">
            Aklınıza takılan tüm soruların yanıtları burada
          </p>
        </header>

        <div className="flex flex-col gap-space-sm">
          {faqItems.map((item) => {
            const isOpen = openItem === item.id;
            return (
              <article
                key={item.id}
                className="overflow-hidden rounded border border-border-dark bg-primary-container"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  id={`faq-trigger-${item.id}`}
                  className="flex w-full items-center justify-between gap-space-md px-space-lg py-space-md text-left transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-secondary-fixed-dim"
                >
                  <span className="font-display text-title-md text-surface-bright">
                    {item.question}
                  </span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-secondary-fixed-dim transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                <div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${item.id}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-border-dark px-space-lg py-space-md font-body text-body-md text-surface-container-highest">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <aside className="mt-space-xl rounded border border-secondary/60 bg-secondary/10 p-space-lg text-center">
          <h3 className="font-display text-headline-sm text-surface-bright">
            Sorunuza yanıt bulamadınız mı?
          </h3>
          <p className="mt-1 font-body text-body-md text-on-primary-container">
            Uzman ekibimizle doğrudan WhatsApp üzerinden iletişime geçebilirsiniz.
          </p>
          <div className="mt-space-md flex flex-wrap items-center justify-center gap-space-sm">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-space-xs rounded bg-status-active px-6 py-3 font-display text-title-md text-slate-night shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-400"
            >
              <span>Bize Doğrudan Sorun</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
