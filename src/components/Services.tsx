import Link from "next/link";
import Icon from "@/components/Icon";
import { services, siteConfig, type Service } from "@/lib/site";

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="service-card group flex flex-col justify-between rounded bg-surface-container-lowest p-space-lg shadow-sm transition-shadow hover:shadow-[0_14px_34px_-16px_rgba(0,151,178,0.55)]">
      <div>
        <div className="mb-space-md flex h-12 w-12 items-center justify-center rounded bg-surface-container-low text-secondary transition-colors group-hover:bg-primary-container group-hover:text-surface-bright">
          <Icon name={service.icon} />
        </div>
        <span className="mb-1 block font-body text-label-technical uppercase tracking-wider text-on-surface-variant">
          {service.eyebrow}
        </span>
        <h3 className="mb-space-xs font-display text-headline-sm text-primary">
          {service.title}
        </h3>
        <p className="mb-space-md font-body text-body-md text-on-surface-variant">
          {service.description}
        </p>
      </div>
      <Link
        href={service.href}
        className="inline-flex items-center gap-space-xs font-display text-title-md text-secondary transition-colors group-hover:text-primary"
      >
        <span>Bu Hizmet İçin Teklif Alın</span>
        <Icon name="arrow_forward" className="text-sm" />
      </Link>
    </div>
  );
}

function FeaturedServiceCard({ service }: { service: Service }) {
  return (
    <div className="grid grid-cols-1 gap-space-lg rounded bg-slate-night p-space-lg text-surface-bright shadow-sm md:col-span-2 lg:col-span-3 lg:grid-cols-12 lg:items-center lg:p-space-xl">
      <div className="lg:col-span-7">
        <div className="mb-space-md flex h-12 w-12 items-center justify-center rounded bg-primary-container text-secondary-fixed-dim">
          <Icon name={service.icon} />
        </div>
        <span className="mb-1 block font-body text-label-technical uppercase tracking-wider text-secondary-fixed-dim">
          {service.eyebrow}
        </span>
        <h3 className="mb-space-xs font-display text-headline-md text-surface-bright">
          {service.title}
        </h3>
        <p className="font-body text-body-md text-surface-container-highest">
          {service.description}
        </p>
        <div className="mt-space-lg flex flex-wrap gap-space-sm">
          <Link
            href={service.href}
            className="inline-flex items-center gap-space-xs rounded bg-secondary px-5 py-3 font-display text-title-md text-on-secondary transition-colors hover:bg-secondary-fixed-dim hover:text-primary"
          >
            <span>Servis Talebi Oluştur</span>
            <Icon name="arrow_forward" className="text-sm" />
          </Link>
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-space-xs rounded border border-border-dark px-5 py-3 font-display text-title-md text-surface-bright transition-colors hover:border-secondary-fixed-dim"
          >
            <Icon name="call" className="text-sm" />
            <span>{siteConfig.phoneDisplay}</span>
          </a>
        </div>
      </div>
      {service.highlights ? (
        <ul className="grid grid-cols-1 gap-space-sm sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
          {service.highlights.map((item) => (
            <li
              key={item}
              className="flex items-center gap-space-sm rounded bg-primary-container px-space-md py-space-sm font-body text-body-md text-surface-bright"
            >
              <Icon name="check_circle" className="text-status-active" />
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="hizmetler"
      className="w-full bg-surface py-space-2xl lg:py-space-3xl"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-space-2xl flex flex-col justify-between gap-space-md md:flex-row md:items-end">
          <div>
            <span className="mb-space-xs block font-body text-label-technical uppercase tracking-widest text-secondary">
              Kapsamlı Hizmet Kataloğu
            </span>
            <h2 className="font-display text-headline-lg-mobile tracking-tight text-primary md:text-headline-lg">
              İhtiyacınıza uygun güvenlik çözümleri
            </h2>
          </div>
          <p className="max-w-md font-body text-body-md text-on-surface-variant">
            Bireysel mülklerden tarımsal işletmelere kadar güvenliği uçtan uca
            planlıyor, profesyonel ekipmanlarla kuruyor; kurulumdan sonra da
            bakım ve onarımını üstleniyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-space-lg md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) =>
            service.featured ? (
              <FeaturedServiceCard key={service.index} service={service} />
            ) : (
              <ServiceCard key={service.index} service={service} />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
