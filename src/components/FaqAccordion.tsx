"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
  id: number;
};

const faqItems: FaqItem[] = [
  {
    id: 1,
    question: "Elektrik ve internet olmayan tarla/çiftlik gibi sahalara kamera kurulabilir mi?",
    answer:
      "Evet. Elektrik ve internet hattı bulunmayan alanlar için Solar (Güneş) Paneli, dahili akü grubu ve 4G SIM kartlı özel kamera sistemleri kuruyoruz. Sistem kendi enerjisini üreterek 7/24 kesintisiz çalışır.",
  },
  {
    id: 2,
    question: "Elektrik kesildiğinde güvenlik alarmları ve kameralar çalışmaya devam eder mi?",
    answer:
      "Alarm sistemlerimizde bulunan dahili aküler sayesinde elektrik kesilse dahi sisteminiz saatlerce aktif kalır ve merkeze/telefonunuza bildirim göndermeye devam eder. Kamera sistemlerinde ise kesintisiz güç kaynağı (UPS) entegrasyonu sağlamaktayız.",
  },
  {
    id: 3,
    question: "Kamera görüntülerini cep telefonumdan canlı izleyebilir miyim?",
    answer:
      "Evet. Kurduğumuz tüm IP ve AHD modern sistemler, cep telefonunuza yükleyeceğimiz ücretsiz mobil uygulama üzerinden 7/24 canlı ve geçmişe dönük izleme olanağı sunar.",
  },
  {
    id: 4,
    question: "ColorVu (Gece Renkli) kameraların farkı nedir?",
    answer:
      "Geleneksel kameralar gece siyah-beyaz görüntü verirken, ColorVu teknolojili yüksek hassasiyetli sensörler zifiri karanlıkta dahi renkli, net ve detaylı görüntü almanızı sağlar.",
  },
  {
    id: 5,
    question: "Keşif ve montaj süreci nasıl ilerliyor?",
    answer:
      "İletişim kanallarımız veya iletişim numaramız (0534 373 8890) üzerinden bize ulaştığınızda sahanıza özel keşif yapıyoruz. İhtiyacınıza en uygun sistemi belirleyip onayınızın ardından hızlıca montaj ve mobil kurulumu tamamlıyoruz.",
  },
];

export default function FaqAccordion() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem((current) => (current === id ? null : id));
  };

  return (
    <section
      id="sikca-sorulan-sorular"
      className="relative w-full bg-slate-950 px-4 py-12 text-white sm:px-6 lg:px-10 lg:py-16"
      aria-labelledby="faq-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%),_radial-gradient(ellipse_at_bottom,_rgba(59,130,246,0.10),_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="mx-auto max-w-4xl">
        <header className="mb-8 text-center sm:mb-10">
          <h2 id="faq-heading" className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Sıkça Sorulan Sorular
          </h2>
          <p className="mt-2 text-sm text-slate-300 sm:text-base">
            Aklınıza takılan tüm soruların yanıtları burada
          </p>
        </header>

        <div className="flex flex-col gap-3">
          {faqItems.map((item) => {
            const isOpen = openItem === item.id;
            return (
              <article
                key={item.id}
                className="overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  id={`faq-trigger-${item.id}`}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-white/5 sm:px-6"
                >
                  <span className="text-base font-medium text-slate-100 sm:text-lg">
                    {item.question}
                  </span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-cyan-300 transition-transform duration-300 ${
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
                    <div className="border-t border-white/10 px-5 py-4 text-sm leading-relaxed text-slate-300 sm:px-6 sm:text-base">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <aside className="mt-8 rounded-xl border border-cyan-400/40 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent p-6 text-center backdrop-blur-md sm:p-8">
          <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
            Sorunuza yanıt bulamadınız mı?
          </h3>
          <p className="mt-1 text-sm text-slate-300">
            Uzman ekibimizle doğrudan WhatsApp üzerinden iletişime geçebilirsiniz.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/905343738890"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-emerald-400/60 bg-emerald-500/90 px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-[0_0_12px_rgba(16,185,129,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-[0_0_18px_rgba(16,185,129,0.7)]"
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
