import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description: `${siteConfig.name} web sitesi çerez politikası.`,
  alternates: { canonical: "/cerez-politikasi" },
};

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Çerez Politikası" updated="16 Ekim 2026">
      <p>
        Bu politika, {siteConfig.name} web sitesini ziyaret ettiğinizde
        kullanılan çerezler ve benzeri teknolojiler hakkında sizi
        bilgilendirmek amacıyla hazırlanmıştır.
      </p>

      <h2>1. Çerez Nedir?</h2>
      <p>
        Çerezler, ziyaret ettiğiniz web sitesi tarafından tarayıcınıza
        kaydedilen küçük metin dosyalarıdır. Sitenin çalışması, tercihlerinizin
        hatırlanması veya ziyaret istatistiklerinin ölçülmesi için kullanılabilir.
      </p>

      <h2>2. Kullandığımız Çerezler</h2>
      <p>
        Web sitemiz reklam, profilleme veya ziyaretçi takibi amaçlı çerez
        kullanmaz. Sitenin düzgün görüntülenmesi için ikonlar Google Fonts
        hizmeti üzerinden yüklenir; bu sırada tarayıcınız teknik olarak IP
        adresinizi Google sunucularına iletir. Bu hizmet, kendi çerez ve gizlilik
        politikalarına tabidir.
      </p>

      <h2>3. Üçüncü Taraf Bağlantılar</h2>
      <p>
        Sitemizdeki WhatsApp ve Instagram bağlantılarına tıkladığınızda ilgili
        platformlara yönlendirilirsiniz. Bu platformlar kendi çerezlerini
        kullanabilir; ayrıntılar için ilgili platformların politikalarını
        incelemenizi öneririz.
      </p>

      <h2>4. Çerezleri Yönetme</h2>
      <p>
        Tarayıcınızın ayarlarından çerezleri silebilir veya engelleyebilirsiniz.
        Çerezleri engellemeniz, sitemizin temel işlevlerini etkilemez.
      </p>

      <h2>5. İletişim</h2>
      <p>
        Sorularınız için{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> adresinden
        bize ulaşabilirsiniz. Kişisel verilerinizle ilgili ayrıntılar için{" "}
        <Link href="/kvkk">KVKK Aydınlatma Metni</Link>&apos;ni
        inceleyebilirsiniz.
      </p>
    </LegalPage>
  );
}
