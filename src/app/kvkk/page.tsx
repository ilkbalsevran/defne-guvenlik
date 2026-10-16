import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description: `${siteConfig.name} kişisel verilerin korunması ve işlenmesi hakkında aydınlatma metni.`,
  alternates: { canonical: "/kvkk" },
};

export default function KvkkPage() {
  return (
    <LegalPage title="KVKK Aydınlatma Metni" updated="16 Ekim 2026">
      <p>
        6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca,
        veri sorumlusu sıfatıyla {siteConfig.legalName} (&quot;{siteConfig.name}
        &quot;) olarak, web sitemiz üzerinden ilettiğiniz kişisel verilerin
        işlenmesine ilişkin sizi bilgilendirmek isteriz.
      </p>

      <h2>1. Veri Sorumlusu</h2>
      <p>
        {siteConfig.legalName}
        <br />
        {siteConfig.addressLine}, {siteConfig.addressCity}
        <br />
        Telefon: {siteConfig.phoneDisplay} · E-posta: {siteConfig.email}
      </p>

      <h2>2. İşlenen Kişisel Veriler</h2>
      <ul>
        <li>Kimlik bilgisi: ad, soyad</li>
        <li>İletişim bilgisi: telefon numarası, e-posta adresi, adres / lokasyon</li>
        <li>
          Talep bilgisi: hizmet türü, mekan tipi, altyapı durumu, kamera sayısı,
          alan büyüklüğü ve mesajınızda paylaştığınız diğer bilgiler
        </li>
      </ul>

      <h2>3. İşleme Amaçları</h2>
      <ul>
        <li>Keşif randevusu oluşturulması ve fiyat teklifi hazırlanması</li>
        <li>Talebinize ilişkin sizinle iletişime geçilmesi</li>
        <li>Kurulum, satış sonrası destek ve teknik servis süreçlerinin yürütülmesi</li>
        <li>Yasal yükümlülüklerin yerine getirilmesi</li>
      </ul>

      <h2>4. Toplama Yöntemi ve Hukuki Sebep</h2>
      <p>
        Kişisel verileriniz; web sitemizdeki teklif formu aracılığıyla
        hazırlanan ve tarafınızca WhatsApp ya da e-posta yoluyla gönderilen
        mesajlar, telefon görüşmeleri ve doğrudan yazışmalar yoluyla elektronik
        ortamda toplanır. Verileriniz KVKK m.5/2-c (bir sözleşmenin kurulması
        veya ifasıyla doğrudan ilgili olması), m.5/2-ç (hukuki yükümlülük) ve
        m.5/2-f (meşru menfaat) hukuki sebeplerine; gerekli hallerde ise açık
        rızanıza dayanılarak işlenir.
      </p>

      <h2>5. Aktarım</h2>
      <p>
        Web sitemiz form verilerinizi kendi sunucularında saklamaz. Talebiniz,
        sizin seçtiğiniz kanal üzerinden iletilir: WhatsApp (WhatsApp LLC / Meta
        Platforms) veya kullandığınız e-posta sağlayıcısı ile şirketimizin
        e-posta hizmet sağlayıcısı. Bu hizmetlerin sunucuları yurt dışında
        bulunabileceğinden, iletişim kanalını seçerek mesajınızı göndermeniz bu
        kapsamda bir aktarım gerçekleşmesi sonucunu doğurur. Kişisel verileriniz
        bunun dışında yalnızca yetkili kamu kurum ve kuruluşlarına, kanunen
        zorunlu olduğu hallerde aktarılır.
      </p>

      <h2>6. Saklama Süresi</h2>
      <p>
        Verileriniz, işleme amacının gerektirdiği süre ve ilgili mevzuatta
        öngörülen yasal saklama süreleri boyunca saklanır; sürenin sona ermesiyle
        silinir, yok edilir veya anonim hale getirilir.
      </p>

      <h2>7. Haklarınız</h2>
      <p>KVKK m.11 uyarınca veri sorumlusuna başvurarak:</p>
      <ul>
        <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
        <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
        <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
        <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
        <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
        <li>KVKK m.7 çerçevesinde silinmesini veya yok edilmesini isteme,</li>
        <li>
          Düzeltme, silme ve yok etme işlemlerinin verilerin aktarıldığı üçüncü
          kişilere bildirilmesini isteme,
        </li>
        <li>
          Otomatik sistemlerle analiz edilmesi sonucu aleyhinize bir sonucun
          ortaya çıkmasına itiraz etme,
        </li>
        <li>
          Kanuna aykırı işlenmesi sebebiyle zarara uğramanız halinde zararın
          giderilmesini talep etme
        </li>
      </ul>
      <p>haklarına sahipsiniz.</p>

      <h2>8. Başvuru</h2>
      <p>
        Taleplerinizi yazılı olarak {siteConfig.addressLine},{" "}
        {siteConfig.addressCity} adresine veya{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> e-posta
        adresine iletebilirsiniz. Başvurularınız, talebin niteliğine göre en geç
        30 gün içinde ücretsiz olarak sonuçlandırılır.
      </p>
    </LegalPage>
  );
}
