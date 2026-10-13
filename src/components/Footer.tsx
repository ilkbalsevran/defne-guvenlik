import Image from "next/image";
import Icon from "@/components/Icon";
import { certifications, images, siteConfig } from "@/lib/site";

const footerServices = [
  "IP Kamera & CCTV Sistemleri",
  "Hırsız & Yangın Alarm Çözümleri",
  "Solar & Güneş Enerjili Güvenlik",
  "Merkezi Uydu & Network Altyapısı",
  "Kartlı Geçiş & Turnike Sistemleri",
];

const legalLinks = [
  { label: "KVKK Aydınlatma Metni", href: "#" },
  { label: "Çerez Politikası", href: "#" },
  { label: "Kullanım Koşulları", href: "#" },
];

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
                  {siteConfig.name.toUpperCase()}
                </span>
                <span className="mt-1 font-body text-label-technical uppercase tracking-wider text-secondary-fixed-dim">
                  {siteConfig.region}
                </span>
              </span>
            </div>
            <p className="max-w-xs font-body text-body-sm text-on-primary-container">
              Balıkesir ve İvrindi genelinde endüstriyel IP kamera, ticari hırsız
              alarmı, yangın algılama ve güneş enerji altyapısı mühendisliği.
            </p>
            <div className="flex items-center gap-space-sm text-status-active">
              <span className="h-2 w-2 rounded-full bg-status-active" />
              <span className="font-body text-label-technical uppercase tracking-wider text-surface-bright">
                Saha Operasyonları Aktif
              </span>
            </div>
          </div>

          <div className="space-y-space-md">
            <span className="block font-display text-title-md uppercase tracking-wider text-surface-bright">
              Hizmetlerimiz
            </span>
            <ul className="space-y-space-xs font-body text-body-sm">
              {footerServices.map((service) => (
                <li
                  key={service}
                  className="text-on-primary-container transition-colors hover:text-surface-bright"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-space-md">
            <span className="block font-display text-title-md uppercase tracking-wider text-surface-bright">
              İletişim &amp; Adres
            </span>
            <div className="space-y-space-xs font-body text-body-sm text-on-primary-container">
              <p className="font-display text-title-md text-surface-bright">
                Merkez Ofis &amp; Teknik Servis
              </p>
              <p>
                {siteConfig.addressLine}, {siteConfig.region}
              </p>
              <p className="pt-space-xs">
                <span className="font-medium text-surface-bright">Telefon:</span>{" "}
                {siteConfig.phoneDisplay}
              </p>
              <p>
                <span className="font-medium text-surface-bright">E-Posta:</span>{" "}
                {siteConfig.email}
              </p>
            </div>
          </div>

          <div className="space-y-space-md">
            <span className="block font-display text-title-md uppercase tracking-wider text-surface-bright">
              Sosyal Medya &amp; Kurumsal
            </span>
            <div className="space-y-space-sm">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-space-xs font-body text-body-sm text-secondary-fixed-dim transition-colors hover:text-surface-bright"
              >
                <Icon name="open_in_new" className="text-sm" />
                instagram.com/defne.guvenlik
              </a>
              <p className="pt-space-xs font-body text-label-technical uppercase tracking-wider text-on-primary-container">
                Kurumsal Sertifikasyonlar
              </p>
              <div className="flex flex-wrap gap-space-xs">
                {certifications.map((cert) => (
                  <span
                    key={cert}
                    className="rounded bg-primary-container px-2 py-1 font-body text-label-technical text-surface-bright"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-space-md border-t border-border-dark pt-space-lg font-body text-body-sm text-on-primary-container md:flex-row">
          <p>
            © {siteConfig.copyrightYear} {siteConfig.legalName}. Tüm hakları
            saklıdır.
          </p>
          <div className="flex items-center gap-space-lg">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-surface-bright"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
