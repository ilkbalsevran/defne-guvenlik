export const siteConfig = {
  name: "Defne Güvenlik",
  legalName: "Defne Güvenlik ve Alarm Sistemleri",
  tagline: "Güvenlik & Alarm Sistemleri",
  region: "İvrindi / Balıkesir",
  phoneDisplay: "0534 373 8890",
  phoneHref: "tel:+905343738890",
  email: "Defneguvenlik2024@outlook.com",
  instagramHandle: "@defne.guvenlik",
  instagramUrl: "https://instagram.com/defne.guvenlik",
  addressLine: "Bedrettin Mah. Koca Müdür Tevfik Bey Cad. No:35/B",
  addressCity: "İvrindi / Balıkesir (PK: 10770)",
  workingHours:
    "Pazartesi – Cumartesi: 08:30 – 19:00 | Acil Çağrı Hattı: 7/24 Aktif",
  since: 2025,
  copyrightYear: 2025,
} as const;

export const images = {
  logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7lpgXMggVNnjVETuORz3sf-gDJavzEOtwld_uDri6JW0aq_CeOhpsDxKrQT8h5LXkzlp0qmsU0a24AIo9aSmAY6654OIuAlSHu02c2122dKGYg_ECyAr0Iq0wDA2HHZDJrWzNURZ7ygiGoKCeZ7aJgC9t5-VhSyjIQM-Wz75q3yFVegBkmxVYrC94u3_frgsvnzAjQMCyA6Mt7y42hDEmyBlgsfrsvi9bvJlGgbuTi-fOLbRwp7FjYMAvenf-fKfifuk",
  heroCamera:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAwIAi7bANHfwgIMZ78gIQUdvpx8HKMWlvzxRe32XovfnI6ZRLbc6XOiUxy3KWoqWFC7CmayeNO0yakg-8PIsj8M6Wa1gekzmBWqQKcABz1Y3rMvBDo16da5Q6wMT3nMQIaiMMKbsp56caRxBkg2btMmUfQtv_n63eDVBW1ORz6nsGvR3sbq0vpJbOkLz1p_2E9D0g1MVVLSvsbanbaF-udQLizONTtotXhmkA7aRou5RjqSRJwcLE_ug",
  aboutEquipment:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBTZEatJeeXvYuV4BM6tRC4aK9wWMaYzBgJt-bifxT_h3mfwOJ_fLGE0YcjBxXBmOY-pW8TbB8qaTeaHRrCrKBovKDt422bIMsKMEY8UHZFxiFDeycVx_FniEL2Ozn8xedRLBUJ9itgo0ayJUGluJSDOHZ2sMFXe_LSc92oFb9PWxhf8D1p1AnTG_NRaS30fWJR6lruIPiLYrH6ND0k2i0ROUV4tPG2x4wWq_39oop9PVaMBNkK87oCVqQUdLj26TBGtWs",
  aboutRack:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCwWRXIBdcOWGxB2XlsR4aJqEpbP1PYqL6QISZ9xU1IR0dtnpGtBrNb1TJvOU8w2J4ovot2_KM7dgwYM1L2LDRG37tjR_5EQyuqiKwyQ7-Mml8mE91TNFfCugVmU4lxyD8WBEb6MI8V7uIeMA3PQfOXz_OOCBjXqHYNZVenm9NHXpieyE8aQ8jXegYZf66jRrfq9fnITB760U1T9nialxyCLWTuBMLpGF1THeVjsxHG6sVE-tv-hmSTBw",
} as const;

export type NavLink = { label: string; href: string; id: string };

export const navLinks: NavLink[] = [
  { label: "Ana Sayfa", href: "#top", id: "top" },
  { label: "Hizmetlerimiz", href: "#hizmetler", id: "hizmetler" },
  { label: "Hakkımızda", href: "#hakkimizda", id: "hakkimizda" },
  { label: "Uygulamalar", href: "#projeler", id: "projeler" },
  { label: "İletişim", href: "#teklif", id: "teklif" },
];

export type Service = {
  index: string;
  icon: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
};

export const services: Service[] = [
  {
    index: "01",
    icon: "nest_cam_outdoor",
    eyebrow: "01 / CCTV TEKNOLOJİSİ",
    title: "Güvenlik Kamera Sistemleri",
    description:
      "IP ve AHD yüksek çözünürlüklü kameralar, akıllı gece görüş sensörleri, NVR/DVR merkezi kayıt üniteleri ve mobil izleme entegrasyonu.",
    href: "#teklif",
  },
  {
    index: "02",
    icon: "crisis_alert",
    eyebrow: "02 / ÇEVRE GÜVENLİĞİ",
    title: "Hırsız ve Güvenlik Alarmları",
    description:
      "Kablolu ve kablosuz manyetik kontaklar, PIR hareket sensörleri, sabotaj korumalı harici sirenler ve telefona anlık bildirim sistemi.",
    href: "#teklif",
  },
  {
    index: "03",
    icon: "detector_smoke",
    eyebrow: "03 / ERKEN UYARI",
    title: "Yangın Algılama Sistemleri",
    description:
      "Optik duman dedektörleri, ani sıcaklık artış sensörleri ve endüstriyel yangın ihbar butonlarıyla tesisinizin can ve mal emniyeti.",
    href: "#teklif",
  },
  {
    index: "04",
    icon: "solar_power",
    eyebrow: "04 / OFF-GRID ENERJİ",
    title: "Güneş Enerjili Kamera Sistemleri",
    description:
      "Elektrik ve internet hattının bulunmadığı çiftlik, tarla, arsa ve şantiye sahaları için 4G SIM kartlı ve akülü solar kamera üniteleri.",
    href: "#teklif",
  },
  {
    index: "05",
    icon: "local_shipping",
    eyebrow: "05 / MOBİL FİLO",
    title: "Araç Kamera ve Takip Çözümleri",
    description:
      "Ticari araçlar, servisler ve iş makineleri için çift yönlü yol kayıt cihazları, park halinde gözetim ve araç içi izleme altyapısı.",
    href: "#teklif",
  },
  {
    index: "06",
    icon: "settings_input_antenna",
    eyebrow: "06 / ALTYAPI & DAĞITIM",
    title: "Çanak Anten & Merkezi Uydu",
    description:
      "Apartman, site ve işletmeler için multiswitch merkezi uydu santralleri, sinyal kalibrasyonu ve bireysel çanak montaj servisleri.",
    href: "#teklif",
  },
];

export type Principle = { icon: string; title: string; description: string };

export const principles: Principle[] = [
  {
    icon: "verified",
    title: "Test Edilmiş Endüstriyel Donanımlar",
    description:
      "Sert iklim koşullarına, neme ve toza dayanıklı IP67 sınıfı kameralar.",
  },
  {
    icon: "architecture",
    title: "Mühendislik Standartlarında Kablolama",
    description:
      "Sinyal kaybını önleyen saf bakır kablo ve spiral boru korumaları.",
  },
];

export type Step = { index: string; title: string; description: string; stage: string };

export const steps: Step[] = [
  {
    index: "01",
    title: "İhtiyaca Uygun Çözümler",
    description:
      "Keşif sonrası her mekana özel projelendirme ve gereksiz maliyet çıkarmayan doğru cihaz seçimi.",
    stage: "Aşama 1: Keşif & Planlama",
  },
  {
    index: "02",
    title: "Özenli Kurulum",
    description:
      "Estetik kablolama, bina yapısını bozmayan sağlam montaj ve endüstriyel standartta titiz işçilik.",
    stage: "Aşama 2: Standart Montaj",
  },
  {
    index: "03",
    title: "Anlaşılır Teknik Bilgilendirme",
    description:
      "Karmaşık teknik terimler yerine sisteminizi kolayca yönetmeniz için pratik ve kullanıcı dostu rehberlik.",
    stage: "Aşama 3: Kullanıcı Eğitimi",
  },
  {
    index: "04",
    title: "Satış Sonrası Destek",
    description:
      "Sistem sürekliliği için periyodik kontrol, anında telefon desteği ve yerinde hızlı teknik servis güvencesi.",
    stage: "Aşama 4: Sürekli Servis",
  },
];

export type GalleryItem = {
  image: string;
  eyebrow: string;
  title: string;
  description: string;
  alt: string;
  wide: boolean;
};

export const galleryItems: GalleryItem[] = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCWvhUZuyfNuFOHTuJE-48qu7x0qAhy8UNpJ1xi_-0Jb7Qn0tE6MLnSOrNyaLj4AUEqi4GO7I55FrugzOhHVCE320pmSBCuIwNFBdlX39Opz8j7Q9iwVU1uVcuU0rVv5IhMgHKHzizLqNRmNYRO9_yrnM04kpW6cJXf4hro6Upx41XcylK-5arbo3Ax5U0AvUO6bV17qlLSyme8SN9SYZdzHaFXuut4d-xVMNM3KsvMq0xPgQZQ3lMKfA",
    eyebrow: "TİCARİ DEPO & LOJİSTİK",
    title: "Ticari Alan IP Kamera Kurulumu",
    description:
      "Geniş açı gece görüşlü kameralar ile 7/24 çevre güvenliği ve tır giriş-çıkış plaka kaydı.",
    alt: "Ticari depo çevresine monte edilmiş harici IP güvenlik kameraları",
    wide: true,
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDohdcouKRxYIX15YSy0cdHa-mL-qvohZreEdMayn6GTXFPLh0ZLPy3Cu3BPqm1mYbTHPHVR2wO7Ld_1JVfhiqK4nYNwqQbdk3Z4EhNZkt2e6o18s6m_NJBM8bPpSs6tLR6_994yDG1AF9A25frAdJRDi0DfDC0hcNZtxtH1-S2bHYEvl2PSw_tQpCTfr8_M43oe2WdBE6j-xRhT-WRKfcdeDaSt-0qXBptPcEnkJoHFXfljA8aZuGvDQ",
    eyebrow: "MÜSTAKİL KONUT",
    title: "Müstakil Yaşam Alanı Alarmı",
    description:
      "Kablosuz dedektörler ile mimari dokuyu bozmayan koruma hattı.",
    alt: "Müstakil villada gizli monte alarm ve harici siren ünitesi",
    wide: false,
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB6C-QrvGQF2wINbHO0o-a4uqfU1K3J-eFzWoNcbq2-WpSRILbf4xef1xC6QLGvsjjVknKo4oaMjno7sxzZEbLEdIAXGWwsRanEifyI4ALEHSErCZTidDf94Yl9BRLA5fsUeQedcAKH-eJBQZO4k-ZT9WOo-7ki5GmD3pAEVR7_4qn9TkW3JRBXOxwtSeo5zgu3c5uN2jPrmZy5i9e3sZBMofUPjZt2HD1x3rdmeSlKmgq6Zmx-ZmkH7w",
    eyebrow: "KIRSAL ALTYAPI",
    title: "Tarımsal Saha Güneş Enerjili Sistem",
    description:
      "Elektriksiz arazilerde bağımsız bataryalı mobil izleme çözümü.",
    alt: "Zeytin bahçesinde güneş paneli ve 4G PTZ güvenlik kamerası",
    wide: false,
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBkFzUF7CAhHGOjq8gBYqdinLI8tcV3qT2xGCqPP2tnVMSBHkmZQCxTY1255YsxJMykhPzDgZ9p2hKoLuvk-Pp804Il3O1RboXYCl0Kfu8S1P8TFXYcLf1dljFohxKCnRQZkTBLlcKrW-BWt88CFpNA_WDifdeah_tHeWS4lgBFIq5Dh3Mr3fPlCFt-8v6jWzlelCt6FP7NKyCeUqVxEleNbSVdbQHS5_DdTzKmincmeBsUCZZ0vD_73A",
    eyebrow: "MERKEZİ KONTROL",
    title: "Merkezi Kayıt ve İzleme İstasyonu",
    description:
      "32 kanallı NVR altyapısı ile çok noktalı yedekli yerel depolama ve kesintisiz güç kaynağı.",
    alt: "Canlı kamera görüntülerini gösteren merkezi güvenlik izleme konsolu",
    wide: true,
  },
];

export const serviceTypeOptions = [
  { value: "kamera", label: "Güvenlik Kamera Sistemleri (IP / AHD)" },
  { value: "alarm", label: "Hırsız & Güvenlik Alarmı" },
  { value: "yangin", label: "Yangın Algılama Sistemleri" },
  { value: "gunes", label: "Güneş Paneli Destekli Bağımsız Kamera" },
  { value: "arac", label: "Araç Kamera & Takip Sistemleri" },
  { value: "canak", label: "Çanak Anten & Merkezi Uydu" },
  { value: "diger", label: "Diğer / Kapsamlı Proje" },
] as const;

export const propertyTypeOptions = [
  { value: "konut", label: "Müstakil Ev / Daire / Villa" },
  { value: "ticari", label: "İş Yeri / Mağaza / Ofis" },
  { value: "sanayi", label: "Fabrika / İmalathane / Depo" },
  { value: "tarim", label: "Çiftlik / Tarla / Açık Arazi (Elektriksiz)" },
  { value: "site", label: "Apartman / Toplu Konut Sitesi" },
] as const;

export const certifications = ["ISO 9001", "TSE-HYB", "CE GÜVENCE"];
