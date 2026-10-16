import Link from "next/link";
import Icon from "@/components/Icon";
import { districts, quoteSteps, siteConfig } from "@/lib/site";

export default function Contact() {
  return (
    <section
      id="iletisim"
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
                değerlendirelim. Balıkesir&apos;in tüm ilçelerinde keşif
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
                    <a
                      href={siteConfig.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block font-body text-body-sm text-status-active underline-offset-2 hover:underline"
                    >
                      WhatsApp&apos;tan yazın
                    </a>
                    <p className="font-body text-body-sm text-on-primary-container">
                      Teknik Danışma &amp; Arıza Bildirimi
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-space-md rounded bg-primary-container p-space-md">
                  <Icon name="mail" className="mt-0.5 text-headline-sm text-secondary-fixed-dim" />
                  <div className="min-w-0">
                    <span className="mb-1 block font-body text-label-technical uppercase tracking-wider text-on-primary-container">
                      E-Posta
                    </span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="block break-all font-display text-title-md text-surface-bright transition-colors hover:text-secondary-fixed-dim"
                    >
                      {siteConfig.email}
                    </a>
                    <p className="font-body text-body-sm text-on-primary-container">
                      Proje dosyaları ve detaylı talepler için
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
                      {siteConfig.instagramFollowers} takipçi · Güncel montaj ve
                      ürün videoları
                    </p>
                    <a
                      href={siteConfig.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-space-sm block font-display text-title-md text-secondary-fixed-dim transition-colors hover:text-surface-bright"
                    >
                      Facebook Sayfamız
                    </a>
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
            <div className="rounded bg-primary-container p-space-lg shadow-xl sm:p-space-xl">
              <h3 className="mb-1 font-display text-headline-md text-surface-bright">
                Ücretsiz keşif ve fiyat teklifi
              </h3>
              <p className="mb-space-lg font-body text-body-md text-on-primary-container">
                Birkaç adımlık formu doldurun, talebinizi WhatsApp veya e-posta
                ile iletin. Ekibimiz 24 saat içinde size geri dönüş sağlar.
              </p>

              <ol className="mb-space-xl space-y-space-md">
                {quoteSteps.map((step, index) => (
                  <li key={step.title} className="flex items-start gap-space-md">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-slate-night font-display text-title-md text-secondary-fixed-dim">
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

              <div className="grid grid-cols-1 gap-space-sm sm:grid-cols-2">
                <Link
                  href="/teklif"
                  className="flex items-center justify-center gap-space-xs rounded bg-secondary px-6 py-3.5 font-display text-title-md text-on-secondary shadow-md transition-colors hover:bg-secondary-fixed-dim hover:text-primary"
                >
                  <span>Teklif Formunu Doldur</span>
                  <Icon name="arrow_forward" className="text-sm" />
                </Link>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-space-xs rounded border border-status-active/60 px-6 py-3.5 font-display text-title-md text-status-active transition-colors hover:bg-status-active hover:text-slate-night"
                >
                  <Icon name="chat" className="text-sm" />
                  <span>WhatsApp&apos;tan Yazın</span>
                </a>
              </div>
            </div>

            <div className="mt-space-lg rounded border border-border-dark p-space-lg">
              <div className="mb-space-sm flex items-center gap-space-xs">
                <Icon name="map" className="text-secondary-fixed-dim" />
                <h3 className="font-display text-title-md uppercase tracking-wider text-surface-bright">
                  Hizmet Bölgelerimiz
                </h3>
              </div>
              <p className="mb-space-md font-body text-body-sm text-on-primary-container">
                Merkezimiz İvrindi&apos;de; Balıkesir&apos;in tüm ilçelerinde keşif,
                kurulum, bakım ve teknik servis hizmeti veriyoruz.
              </p>
              <ul className="flex flex-wrap gap-space-xs">
                {districts.map((district) => (
                  <li
                    key={district}
                    className="rounded bg-primary-container px-2.5 py-1 font-body text-body-sm text-surface-container-highest"
                  >
                    {district}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
