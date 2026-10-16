import Image from "next/image";
import Link from "next/link";
import { cacheLife } from "next/cache";
import Icon from "@/components/Icon";
import { images, legalLinks, services, siteConfig } from "@/lib/site";

async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

export default function Footer() {
  return (
    <footer className="w-full bg-slate-night pt-space-2xl pb-space-xl text-surface-bright">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-space-xl pb-space-xl md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-space-md">
            <div className="flex items-center gap-3">
              <Image
                src={images.logo}
                alt={siteConfig.name}
                width={40}
                height={40}
                className="h-10 w-10 rounded bg-white object-contain p-1"
              />
              <span className="flex flex-col">
                <span className="font-display text-headline-sm font-bold uppercase leading-none text-surface-bright">
                  {siteConfig.name.toLocaleUpperCase("tr-TR")}
                </span>
                <span className="mt-1 font-body text-label-technical uppercase tracking-wider text-secondary-fixed-dim">
                  {siteConfig.serviceArea}
                </span>
              </span>
            </div>
            <p className="max-w-xs font-body text-body-sm text-on-primary-container">
              Balıkesir ve tüm ilçelerinde IP kamera, hırsız alarmı, yangın
              algılama, güneş enerjili kamera ve merkezi uydu sistemleri.
            </p>
            <div className="flex items-center gap-space-sm">
              <span className="h-2 w-2 rounded-full bg-status-active" />
              <span className="font-body text-label-technical uppercase tracking-wider text-surface-bright">
                Saha Operasyonları Aktif
              </span>
            </div>
          </div>

          <div className="space-y-space-md">
            <h2 className="font-display text-title-md uppercase tracking-wider text-surface-bright">
              Hizmetlerimiz
            </h2>
            <ul className="space-y-space-xs font-body text-body-sm">
              {services.map((service) => (
                <li key={service.index}>
                  <Link
                    href={service.href}
                    className="text-on-primary-container transition-colors hover:text-surface-bright"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-space-md">
            <h2 className="font-display text-title-md uppercase tracking-wider text-surface-bright">
              İletişim &amp; Adres
            </h2>
            <div className="space-y-space-xs font-body text-body-sm text-on-primary-container">
              <p className="font-display text-title-md text-surface-bright">
                Merkez Ofis &amp; Teknik Servis
              </p>
              <p>
                {siteConfig.addressLine}, {siteConfig.addressCity}
              </p>
              <p className="pt-space-xs">
                <span className="font-medium text-surface-bright">Telefon:</span>{" "}
                <a href={siteConfig.phoneHref} className="hover:text-surface-bright">
                  {siteConfig.phoneDisplay}
                </a>
              </p>
              <p className="break-all">
                <span className="font-medium text-surface-bright">E-Posta:</span>{" "}
                <a href={`mailto:${siteConfig.email}`} className="hover:text-surface-bright">
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-space-md">
            <h2 className="font-display text-title-md uppercase tracking-wider text-surface-bright">
              Bize Ulaşın
            </h2>
            <div className="flex flex-col items-start gap-space-sm font-body text-body-sm">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-space-xs text-secondary-fixed-dim transition-colors hover:text-surface-bright"
              >
                <Icon name="chat" className="text-sm" />
                WhatsApp Hattı
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-space-xs text-secondary-fixed-dim transition-colors hover:text-surface-bright"
              >
                <Icon name="open_in_new" className="text-sm" />
                {siteConfig.instagramHandle}
                <span className="text-on-primary-container">
                  · {siteConfig.instagramFollowers} takipçi
                </span>
              </a>
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-space-xs text-secondary-fixed-dim transition-colors hover:text-surface-bright"
              >
                <Icon name="open_in_new" className="text-sm" />
                Facebook
              </a>
              <p className="pt-space-xs text-on-primary-container">
                {siteConfig.workingHours}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-space-md border-t border-border-dark pt-space-lg font-body text-body-sm text-on-primary-container md:flex-row">
          <div className="flex flex-col items-center gap-1 md:items-start">
            <p>
              © <CurrentYear /> {siteConfig.legalName}. Tüm hakları saklıdır.
            </p>
            <p>
              Tasarım &amp; Geliştirme:{" "}
              <a
                href="https://www.mbftech.com.tr"
                target="_blank"
                rel="noopener"
                className="font-medium text-secondary-fixed-dim transition-colors hover:text-surface-bright"
              >
                MbfTech
              </a>
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-space-lg gap-y-space-xs">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-surface-bright"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
