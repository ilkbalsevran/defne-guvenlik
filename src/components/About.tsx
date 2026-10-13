import Image from "next/image";
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
          <div className="relative lg:col-span-6">
            <div className="grid grid-cols-2 gap-space-md">
              <div className="space-y-space-md">
                <div className="overflow-hidden rounded border border-border-hairline bg-surface-container-low shadow-sm">
                  <Image
                    src={images.aboutEquipment}
                    alt="Defne Güvenlik ekipman ve donanım masası"
                    width={600}
                    height={400}
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="h-64 w-full object-cover"
                  />
                </div>
                <div className="rounded bg-primary-container p-space-md text-surface-bright">
                  <span className="mb-1 block font-body text-label-technical uppercase tracking-wider text-secondary-fixed-dim">
                    Doğrulanmış Saha Konumu
                  </span>
                  <p className="font-display text-title-md">
                    İvrindi / Balıkesir Merkezli Teknik Hizmet Ağı
                  </p>
                </div>
              </div>
              <div className="pt-space-lg">
                <div className="h-80 overflow-hidden rounded border border-border-hairline bg-surface-container-low shadow-sm">
                  <Image
                    src={images.aboutRack}
                    alt="Düzenli cat6 kablolaması yapılmış metal sunucu kabini"
                    width={600}
                    height={640}
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="h-full w-full object-cover"
                  />
                </div>
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
