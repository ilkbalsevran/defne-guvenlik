import { steps } from "@/lib/site";

export default function WhyUs() {
  return (
    <section className="w-full bg-surface py-space-2xl lg:py-space-3xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-space-2xl max-w-2xl">
          <span className="mb-space-xs block font-body text-label-technical uppercase tracking-widest text-secondary">
            Kalite Güvencesi
          </span>
          <h2 className="font-display text-headline-lg-mobile tracking-tight text-primary md:text-headline-lg">
            Güven veren bir hizmet yaklaşımı
          </h2>
          <p className="mt-space-xs font-body text-body-lg text-on-surface-variant">
            Satış odaklı değil, mekanın gerçek güvenlik açığını tespit eden
            disiplinli adımlarla çalışıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-space-lg md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.index}
              className="flex flex-col justify-between rounded border border-border-hairline bg-surface-container-lowest p-space-lg shadow-sm"
            >
              <div>
                <span className="mb-space-sm block font-display text-headline-lg text-secondary opacity-60">
                  {step.index}
                </span>
                <h3 className="mb-space-xs font-display text-headline-sm text-primary">
                  {step.title}
                </h3>
                <p className="font-body text-body-md text-on-surface-variant">
                  {step.description}
                </p>
              </div>
              <div className="pt-space-md font-body text-label-technical uppercase text-on-surface-variant">
                {step.stage}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
