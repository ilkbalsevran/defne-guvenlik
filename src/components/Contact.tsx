import Icon from "@/components/Icon";
import QuoteForm from "@/components/QuoteForm";
import { siteConfig } from "@/lib/site";

export default function Contact() {
  return (
    <section
      id="teklif"
      className="w-full bg-slate-night py-space-2xl text-surface-bright lg:py-space-3xl"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-space-xl lg:grid-cols-12 lg:gap-space-2xl">
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <div className="mb-space-md inline-flex items-center gap-space-xs rounded bg-primary-container px-3 py-1 font-body text-label-technical uppercase tracking-wider text-secondary-fixed-dim">
                <Icon name="support_agent" className="text-sm" />
                <span>Ücretsiz Keşif &amp; Danışmanlık</span>
              </div>
              <h2 className="mb-space-md font-display text-headline-lg-mobile tracking-tight text-surface-bright md:text-headline-lg">
                Güvenliğiniz için ilk adımı birlikte atalım.
              </h2>
              <p className="mb-space-xl font-body text-body-lg leading-relaxed text-on-primary-container">
                İhtiyacınızı paylaşın, size uygun çözümü yerinde
                değerlendirelim. İvrindi ve Balıkesir genelinde keşif
                ekiplerimiz hızlıca yanınızda.
              </p>

              <div className="space-y-space-md">
                <div className="flex items-start gap-space-md rounded bg-primary-container p-space-md">
                  <Icon name="location_on" className="mt-0.5 text-headline-sm text-secondary-fixed-dim" />
                  <div>
                    <span className="mb-1 block font-body text-label-technical uppercase tracking-wider text-on-primary-container">
                      Merkez Ofis &amp; Atölye
                    </span>
                    <p className="font-display text-title-md text-surface-bright">
                      {siteConfig.addressLine}
                    </p>
                    <p className="font-body text-body-sm text-on-primary-container">
                      {siteConfig.addressCity}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-space-md rounded bg-primary-container p-space-md">
                  <Icon name="call" className="mt-0.5 text-headline-sm text-secondary-fixed-dim" />
                  <div>
                    <span className="mb-1 block font-body text-label-technical uppercase tracking-wider text-on-primary-container">
                      Doğrudan Hat &amp; WhatsApp
                    </span>
                    <a
                      href={siteConfig.phoneHref}
                      className="block font-display text-headline-sm text-surface-bright transition-colors hover:text-secondary-fixed-dim"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                    <p className="font-body text-body-sm text-on-primary-container">
                      Teknik Danışma &amp; Arıza Bildirimi
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-space-md rounded bg-primary-container p-space-md">
                  <Icon name="share" className="mt-0.5 text-headline-sm text-secondary-fixed-dim" />
                  <div>
                    <span className="mb-1 block font-body text-label-technical uppercase tracking-wider text-on-primary-container">
                      Sosyal Medya Güncellemeleri
                    </span>
                    <a
                      href={siteConfig.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block font-display text-title-md text-secondary-fixed-dim transition-colors hover:text-surface-bright"
                    >
                      {siteConfig.instagramHandle}
                    </a>
                    <p className="font-body text-body-sm text-on-primary-container">
                      Güncel montaj ve ürün videoları
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-space-xl pt-space-md">
              <span className="mb-1 block font-body text-label-technical uppercase tracking-wider text-on-primary-container">
                Çalışma Saatleri
              </span>
              <p className="font-body text-body-sm text-surface-bright">
                {siteConfig.workingHours}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded bg-primary-container p-space-xl shadow-xl">
              <div className="mb-space-lg">
                <h3 className="mb-1 font-display text-headline-sm text-surface-bright">
                  Hızlı Keşif ve Fiyat Teklifi Formu
                </h3>
                <p className="font-body text-body-sm text-on-primary-container">
                  Formu doldurduktan sonra 24 saat içinde mühendislik ekibimiz
                  size geri dönüş sağlar.
                </p>
              </div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
