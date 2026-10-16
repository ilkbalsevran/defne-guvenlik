import type { Metadata } from "next";
import Icon from "@/components/Icon";
import QuoteForm from "@/components/QuoteForm";
import { quoteSteps, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ücretsiz Keşif ve Fiyat Teklifi",
  description:
    "Güvenlik kamerası, alarm, yangın algılama, güneş enerjili kamera, çanak anten ve bakım-onarım için Balıkesir ve tüm ilçelerinde ücretsiz keşif ve fiyat teklifi alın.",
  alternates: { canonical: "/teklif" },
};

export default function QuotePage() {
  return (
    <section className="w-full bg-slate-night py-space-2xl text-surface-bright lg:py-space-3xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-space-xl lg:grid-cols-12 lg:gap-space-2xl">
          <aside className="lg:col-span-4">
            <div className="mb-space-md inline-flex items-center gap-space-xs rounded bg-primary-container px-3 py-1 font-body text-label-technical uppercase tracking-wider text-secondary-fixed-dim">
              <Icon name="support_agent" className="text-sm" />
              <span>Ücretsiz Keşif &amp; Danışmanlık</span>
            </div>
            <h1 className="mb-space-md font-display text-headline-lg-mobile tracking-tight text-surface-bright md:text-headline-lg">
              Keşif ve fiyat teklifi alın
            </h1>
            <p className="mb-space-xl font-body text-body-lg text-on-primary-container">
              Birkaç soruyu yanıtlayın, size en uygun sistemi birlikte
              belirleyelim. Ekibimiz 24 saat içinde size geri dönüş sağlar.
            </p>

            <ol className="mb-space-xl space-y-space-md">
              {quoteSteps.map((step, index) => (
                <li key={step.title} className="flex items-start gap-space-md">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-primary-container font-display text-title-md text-secondary-fixed-dim">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-display text-title-md text-surface-bright">
                      {step.title}
                    </p>
                    <p className="font-body text-body-sm text-on-primary-container">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="space-y-space-sm rounded border border-border-dark p-space-md">
              <p className="font-body text-label-technical uppercase tracking-wider text-on-primary-container">
                Formla uğraşmak istemiyor musunuz?
              </p>
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-space-sm font-display text-headline-sm text-surface-bright transition-colors hover:text-secondary-fixed-dim"
              >
                <Icon name="call" className="text-secondary-fixed-dim" />
                {siteConfig.phoneDisplay}
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-space-sm font-body text-body-md text-status-active hover:underline"
              >
                <Icon name="chat" />
                WhatsApp&apos;tan doğrudan yazın
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-space-sm break-all font-body text-body-md text-secondary-fixed-dim hover:underline"
              >
                <Icon name="mail" />
                {siteConfig.email}
              </a>
              <p className="pt-space-xs font-body text-body-sm text-on-primary-container">
                {siteConfig.workingHours}
              </p>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <div className="rounded bg-primary-container p-space-lg shadow-xl sm:p-space-xl">
              <h2 className="mb-space-lg font-display text-headline-sm text-surface-bright">
                Hızlı Keşif ve Fiyat Teklifi Formu
              </h2>
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
