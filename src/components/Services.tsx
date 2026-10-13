import Icon from "@/components/Icon";
import { services } from "@/lib/site";

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
            planlıyor, profesyonel ekipmanlarla kuruyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-space-lg md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.index}
              className="group flex flex-col justify-between rounded border border-border-hairline bg-surface-container-lowest p-space-lg shadow-sm transition-shadow hover:shadow-md"
            >
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
              <a
                href={service.href}
                className="inline-flex items-center gap-space-xs font-display text-title-md text-secondary transition-colors group-hover:text-primary"
              >
                <span>Detayları İncele</span>
                <Icon name="arrow_forward" className="text-sm" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
