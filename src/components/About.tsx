import Icon from "@/components/Icon";
import { images, principles } from "@/lib/site";

export default function About() {
  return (
    <section
      id="hakkimizda"
      className="w-full bg-surface-container-lowest py-space-2xl lg:py-space-3xl"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12 lg:gap-space-2xl">
          <div className="relative flex flex-col gap-space-md lg:col-span-6">
            <div className="relative overflow-hidden rounded border border-border-hairline bg-primary shadow-xl">
              <div className="relative aspect-video w-full">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster={images.aboutRack}
                  aria-label="Defne Güvenlik saha kurulum ve montaj çalışmaları"
                >
                  <source src="/kamera.mp4" type="video/mp4" />
                </video>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                <div className="absolute right-4 bottom-4 left-4 flex">
                  <div className="inline-flex items-center gap-space-xs rounded-lg border border-white/20 bg-white/10 px-3.5 py-2.5 shadow-lg backdrop-blur-md">
                    <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-status-active" />
                    <span className="font-body text-label-technical font-medium uppercase tracking-wider text-white">
                      İvrindi / Balıkesir Merkezli Teknik Hizmet Ağımız
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded border border-border-hairline bg-primary shadow-xl">
              <div className="relative aspect-video w-full">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster={images.aboutEquipment}
                  aria-label="Merkezi kayıt paneli ve güvenlik kontrol istasyonu"
                >
                  <source src="/panel.mp4" type="video/mp4" />
                </video>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start lg:col-span-6">
            <span className="mb-space-xs block font-body text-label-technical uppercase tracking-widest text-secondary">
              Kurumsal Yaklaşım
            </span>
            <h2 className="mb-space-md font-display text-headline-lg-mobile tracking-tight text-primary md:text-headline-lg">
              Teknoloji, doğru uygulamayla değer kazanır.
            </h2>
            <p className="mb-space-md font-body text-body-lg leading-relaxed text-on-surface-variant">
              Her alanın güvenlik ihtiyacı farklıdır. Doğru çözümü belirlemek
              için ihtiyacı anlamaya, uygun sistemi seçmeye ve özenli uygulamaya
              odaklanıyoruz.
            </p>
            <p className="mb-space-lg font-body text-body-md leading-relaxed text-on-surface-variant">
              Gelişigüzel kablo çekimleri ve yetersiz lens konfigürasyonları,
              kritik anlarda sistemleri işlevsiz kılar. Defne Güvenlik olarak
              İvrindi ve Balıkesir genelinde; bina cephe estetiğini koruyan gizli
              hat çekimleri, dayanıklı konnektör montajı ve kesintisiz kayıt
              testleri ile güvenliğinizi şansa bırakmıyoruz.
            </p>

            <div className="mb-space-xl w-full space-y-space-sm">
              {principles.map((principle) => (
                <div key={principle.title} className="flex items-start gap-space-sm">
                  <Icon
                    name={principle.icon}
                    className="mt-0.5 text-headline-sm text-secondary"
                  />
                  <div>
                    <span className="block font-display text-title-md text-primary">
                      {principle.title}
                    </span>
                    <span className="font-body text-body-sm text-on-surface-variant">
                      {principle.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#teklif"
              className="inline-flex items-center gap-space-xs rounded bg-surface-container-high px-6 py-3 font-display text-title-md text-primary transition-colors hover:bg-surface-container-highest"
            >
              <span>Hakkımızda Detaylı Bilgi</span>
              <Icon name="arrow_forward" className="text-sm" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
