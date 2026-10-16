import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kullanım Koşulları",
  description: `${siteConfig.name} web sitesi kullanım koşulları.`,
  alternates: { canonical: "/kullanim-kosullari" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Kullanım Koşulları" updated="16 Ekim 2026">
      <p>
        Bu web sitesini kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız.
      </p>

      <h2>1. Bilgilendirme Amacı</h2>
      <p>
        Sitedeki içerikler {siteConfig.name} hizmetleri hakkında genel
        bilgilendirme amaçlıdır. Ürün özellikleri, kapsam ve fiyatlar, saha
        keşfi sonrası hazırlanan yazılı teklifle kesinleşir. Sitede yer alan
        bilgiler bağlayıcı bir teklif niteliği taşımaz.
      </p>

      <h2>2. Teklif Talepleri</h2>
      <p>
        Teklif formu, girdiğiniz bilgileri WhatsApp veya e-posta üzerinden
        tarafımıza iletmeniz için hazır bir mesaj oluşturur. Mesajın gönderimi
        sizin onayınızla, seçtiğiniz uygulama üzerinden gerçekleşir.
        Paylaştığınız bilgilerin doğruluğundan siz sorumlusunuz.
      </p>

      <h2>3. Fikri Mülkiyet</h2>
      <p>
        Sitedeki metin, görsel, video, logo ve tasarım öğeleri şirketimize aittir
        veya lisanslı olarak kullanılmaktadır. İzinsiz kopyalanamaz,
        çoğaltılamaz ve ticari amaçla kullanılamaz.
      </p>

      <h2>4. Üçüncü Taraf Bağlantılar</h2>
      <p>
        Sitede yer alan üçüncü taraf bağlantılarının (WhatsApp, Instagram vb.)
        içerik ve uygulamalarından {siteConfig.name} sorumlu değildir.
      </p>

      <h2>5. Değişiklikler</h2>
      <p>
        {siteConfig.name}, bu koşulları önceden bildirmeksizin güncelleme hakkını
        saklı tutar. Güncel metin her zaman bu sayfada yayımlanır.
      </p>

      <h2>6. İletişim</h2>
      <p>
        {siteConfig.addressLine}, {siteConfig.addressCity}
        <br />
        {siteConfig.phoneDisplay} ·{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
      </p>
    </LegalPage>
  );
}
