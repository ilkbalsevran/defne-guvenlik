export const siteConfig = {
  name: "Defne Güvenlik",
  legalName: "Defne Güvenlik ve Alarm Sistemleri",
  tagline: "Güvenlik & Alarm Sistemleri",
  region: "İvrindi / Balıkesir",
  serviceArea: "Balıkesir ve tüm ilçeleri",
  phoneDisplay: "0534 373 8890",
  phoneHref: "tel:+905343738890",
  whatsappUrl: "https://wa.me/905343738890",
  email: "Defneguvenlik2024@outlook.com",
  instagramHandle: "@defne.guvenlik",
  instagramUrl: "https://instagram.com/defne.guvenlik",
  instagramFollowers: "1.400+",
  facebookUrl: "https://www.facebook.com/profile.php?id=61566400441988",
  addressLine: "Bedrettin Mah. Koca Müdür Tevfik Bey Cad. No:35/B",
  addressCity: "İvrindi / Balıkesir (PK: 10770)",
  workingHours:
    "Pazartesi – Cumartesi: 08:30 – 19:00 | Acil Çağrı Hattı: 7/24 Aktif",
  since: 2025,
} as const;

export const images = {
  logo: "/images/logo.jpg",
  heroCamera: "/images/hero-camera.jpg",
} as const;

export type NavLink = { label: string; href: string; id: string };

export const navLinks: NavLink[] = [
  { label: "Ana Sayfa", href: "/#top", id: "top" },
  { label: "Hizmetlerimiz", href: "/#hizmetler", id: "hizmetler" },
  { label: "Hakkımızda", href: "/#hakkimizda", id: "hakkimizda" },
  { label: "Uygulamalar", href: "/#projeler", id: "projeler" },
  { label: "İletişim", href: "/#iletisim", id: "iletisim" },
];

export type Service = {
  index: string;
  icon: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  /** Hizmet listesinde geniş, vurgulu kart olarak gösterilir. */
  featured?: boolean;
  highlights?: string[];
};

export const services: Service[] = [
  {
    index: "01",
    icon: "nest_cam_outdoor",
    eyebrow: "01 / CCTV TEKNOLOJİSİ",
    title: "Güvenlik Kamera Sistemleri",
    description:
      "IP ve AHD yüksek çözünürlüklü kameralar, akıllı gece görüş sensörleri, NVR/DVR merkezi kayıt üniteleri, mobil izleme entegrasyonu ile mevcut sistemlerde arıza tespiti ve onarım.",
    href: "/teklif?hizmet=kamera",
  },
  {
    index: "02",
    icon: "crisis_alert",
    eyebrow: "02 / ÇEVRE GÜVENLİĞİ",
    title: "Hırsız ve Güvenlik Alarmları",
    description:
      "Kablolu ve kablosuz manyetik kontaklar, PIR hareket sensörleri, sabotaj korumalı harici sirenler, telefona anlık bildirim, periyodik bakım ve onarım.",
    href: "/teklif?hizmet=alarm",
  },
  {
    index: "03",
    icon: "detector_smoke",
    eyebrow: "03 / ERKEN UYARI",
    title: "Yangın Algılama Sistemleri",
    description:
      "Optik duman dedektörleri, ani sıcaklık artış sensörleri ve endüstriyel yangın ihbar butonlarıyla tesisinizin can ve mal emniyeti.",
    href: "/teklif?hizmet=yangin",
  },
  {
    index: "04",
    icon: "solar_power",
    eyebrow: "04 / OFF-GRID ENERJİ",
    title: "Güneş Enerjili Kamera Sistemleri",
    description:
      "Elektrik ve internet hattının bulunmadığı çiftlik, tarla, arsa ve şantiye sahaları için 4G SIM kartlı ve akülü solar kamera üniteleri.",
    href: "/teklif?hizmet=gunes",
  },
  {
    index: "05",
    icon: "local_shipping",
    eyebrow: "05 / MOBİL FİLO",
    title: "Araç Kamera ve Takip Çözümleri",
    description:
      "Ticari araçlar, servisler ve iş makineleri için çift yönlü yol kayıt cihazları, park halinde gözetim ve araç içi izleme altyapısı.",
    href: "/teklif?hizmet=arac",
  },
  {
    index: "06",
    icon: "settings_input_antenna",
    eyebrow: "06 / ALTYAPI & DAĞITIM",
    title: "Çanak Anten & Merkezi Uydu",
    description:
      "Apartman, site ve işletmeler için multiswitch merkezi uydu santralleri, sinyal kalibrasyonu ve bireysel çanak montaj servisleri.",
    href: "/teklif?hizmet=canak",
  },
  {
    index: "07",
    icon: "build",
    eyebrow: "07 / TEKNİK SERVİS",
    title: "Arıza, Bakım ve Onarım",
    description:
      "Kamera ve alarm sistemlerinizde arıza tespiti, onarım ve periyodik bakım. Görüntü gelmeyen kamera, kayıt yapmayan cihaz veya sürekli çalan alarm için yerinde teknik servis.",
    href: "/teklif?hizmet=bakim",
    featured: true,
    highlights: [
      "Kamera tamiri ve parça değişimi",
      "Alarm sistemi bakım ve onarımı",
      "Kayıt cihazı ve mobil izleme sorunları",
      "Periyodik kontrol ve temizlik",
    ],
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

/** Instagram "öne çıkanlar" başlıklarıyla eşleşen galeri kategorileri. */
export const galleryCategories = [
  "IP Sistem",
  "AHD Sistemler",
  "O-KAM",
  "Alarm",
  "Güneş Enerjili",
  "Çanak Anten",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = {
  image: string;
  eyebrow: string;
  title: string;
  description: string;
  alt: string;
  wide: boolean;
  category: GalleryCategory;
};

export const galleryItems: GalleryItem[] = [
  {
    image: "/images/gallery-depo.jpg",
    eyebrow: "TİCARİ DEPO & LOJİSTİK",
    title: "Ticari Alan IP Kamera Kurulumu",
    description:
      "Geniş açı gece görüşlü kameralar ile 7/24 çevre güvenliği ve tır giriş-çıkış plaka kaydı.",
    alt: "Ticari depo çevresine monte edilmiş harici IP güvenlik kameraları",
    wide: true,
    category: "IP Sistem",
  },
  {
    image: "/images/gallery-konut.jpg",
    eyebrow: "MÜSTAKİL KONUT",
    title: "Müstakil Yaşam Alanı Alarmı",
    description:
      "Kablosuz dedektörler ile mimari dokuyu bozmayan koruma hattı.",
    alt: "Müstakil villada gizli monte alarm ve harici siren ünitesi",
    wide: false,
    category: "Alarm",
  },
  {
    image: "/images/gallery-tarim.jpg",
    eyebrow: "KIRSAL ALTYAPI",
    title: "Tarımsal Saha Güneş Enerjili Sistem",
    description:
      "Elektriksiz arazilerde bağımsız bataryalı mobil izleme çözümü.",
    alt: "Zeytin bahçesinde güneş paneli ve 4G PTZ güvenlik kamerası",
    wide: false,
    category: "Güneş Enerjili",
  },
  {
    image: "/images/gallery-kontrol.jpg",
    eyebrow: "MERKEZİ KONTROL",
    title: "Merkezi Kayıt ve İzleme İstasyonu",
    description:
      "32 kanallı NVR altyapısı ile çok noktalı yedekli yerel depolama ve kesintisiz güç kaynağı.",
    alt: "Canlı kamera görüntülerini gösteren merkezi güvenlik izleme konsolu",
    wide: true,
    category: "IP Sistem",
  },
];

export const serviceTypeOptions = [
  { value: "kamera", label: "Güvenlik Kamera Sistemleri (IP / AHD)" },
  { value: "alarm", label: "Hırsız & Güvenlik Alarmı" },
  { value: "yangin", label: "Yangın Algılama Sistemleri" },
  { value: "gunes", label: "Güneş Paneli Destekli Bağımsız Kamera" },
  { value: "arac", label: "Araç Kamera & Takip Sistemleri" },
  { value: "canak", label: "Çanak Anten & Merkezi Uydu" },
  { value: "bakim", label: "Arıza / Bakım / Onarım" },
  { value: "diger", label: "Diğer / Kapsamlı Proje" },
] as const;

export const propertyTypeOptions = [
  { value: "konut", label: "Müstakil Ev / Daire / Villa" },
  { value: "ticari", label: "İş Yeri / Mağaza / Ofis" },
  { value: "sanayi", label: "Fabrika / İmalathane / Depo" },
  { value: "tarim", label: "Çiftlik / Tarla / Açık Arazi (Elektriksiz)" },
  { value: "site", label: "Apartman / Toplu Konut Sitesi" },
] as const;


export const infrastructureOptions = [
  { value: "tam", label: "Elektrik ve internet var" },
  { value: "internet-yok", label: "Elektrik var, internet yok" },
  { value: "elektrik-yok", label: "İnternet var, elektrik yok" },
  { value: "hicbiri", label: "Elektrik ve internet yok" },
] as const;

export const cameraCountOptions = [
  { value: "1-2", label: "1–2" },
  { value: "3-4", label: "3–4" },
  { value: "5-8", label: "5–8" },
  { value: "9-16", label: "9–16" },
  { value: "16+", label: "16+" },
  { value: "kesif", label: "Keşifte belirlensin" },
] as const;

export const areaOptions = [
  { value: "kucuk", label: "Küçük (0–50 m²)" },
  { value: "orta", label: "Orta (51–150 m²)" },
  { value: "buyuk", label: "Büyük (151–500 m²)" },
  { value: "cok-buyuk", label: "Çok büyük (500+ m²)" },
] as const;

export const urgencyOptions = [
  { value: "yakin", label: "En yakın zamanda" },
  { value: "acil", label: "Acil" },
  { value: "1-2-hafta", label: "1–2 hafta içinde" },
  { value: "fiyat", label: "Fiyat alıp düşüneceğim" },
] as const;

export const quoteSteps = [
  {
    title: "Formu doldurun",
    description: "Mekanınızı ve ihtiyacınızı birkaç adımda anlatın.",
  },
  {
    title: "WhatsApp veya e-posta ile iletin",
    description: "Talebiniz hazır bir mesaj olarak açılır, tek dokunuşla gönderirsiniz.",
  },
  {
    title: "Ücretsiz keşif",
    description: "Ekibimiz sizi arar, sahanızı yerinde inceleyip size özel teklif hazırlar.",
  },
];

/** Hizmet verilen Balıkesir ilçeleri (alfabetik). */
export const districts = [
  "Altıeylül",
  "Ayvalık",
  "Balya",
  "Bandırma",
  "Bigadiç",
  "Burhaniye",
  "Dursunbey",
  "Edremit",
  "Erdek",
  "Gömeç",
  "Gönen",
  "Havran",
  "İvrindi",
  "Karesi",
  "Kepsut",
  "Manyas",
  "Marmara",
  "Savaştepe",
  "Sındırgı",
  "Susurluk",
];

export const legalLinks = [
  { label: "KVKK Aydınlatma Metni", href: "/kvkk" },
  { label: "Çerez Politikası", href: "/cerez-politikasi" },
  { label: "Kullanım Koşulları", href: "/kullanim-kosullari" },
];

export type FaqItem = {
  question: string;
  answer: string;
  id: number;
};

export const faqItems: FaqItem[] = [
  {
    id: 7,
    question: "Hangi bölgelere hizmet veriyorsunuz?",
    answer: `Merkezimiz İvrindi'de bulunuyor. Balıkesir'in tüm ilçelerinde (${districts.join(", ")}) keşif, kurulum, bakım ve teknik servis hizmeti veriyoruz.`,
  },
  {
    id: 6,
    question: "Mevcut kamera veya alarm sistemimde arıza var, onarım yapıyor musunuz?",
    answer:
      "Evet. Kamera ve alarm sistemlerinde arıza tespiti, onarım, parça değişimi ve periyodik bakım hizmeti veriyoruz. Görüntü gelmemesi, kaydın durması, mobil uygulamaya bağlanamama veya alarmın sebepsiz çalması gibi sorunlar için telefon ya da WhatsApp üzerinden bize ulaşabilirsiniz.",
  },
  {
    id: 1,
    question: "Elektrik ve internet olmayan tarla/çiftlik gibi sahalara kamera kurulabilir mi?",
    answer:
      "Evet. Elektrik ve internet hattı bulunmayan alanlar için Solar (Güneş) Paneli, dahili akü grubu ve 4G SIM kartlı özel kamera sistemleri kuruyoruz. Sistem kendi enerjisini üreterek 7/24 kesintisiz çalışır.",
  },
  {
    id: 2,
    question: "Elektrik kesildiğinde güvenlik alarmları ve kameralar çalışmaya devam eder mi?",
    answer:
      "Alarm sistemlerimizde bulunan dahili aküler sayesinde elektrik kesilse dahi sisteminiz saatlerce aktif kalır ve merkeze/telefonunuza bildirim göndermeye devam eder. Kamera sistemlerinde ise kesintisiz güç kaynağı (UPS) entegrasyonu sağlamaktayız.",
  },
  {
    id: 3,
    question: "Kamera görüntülerini cep telefonumdan canlı izleyebilir miyim?",
    answer:
      "Evet. Kurduğumuz tüm IP ve AHD modern sistemler, cep telefonunuza yükleyeceğimiz ücretsiz mobil uygulama üzerinden 7/24 canlı ve geçmişe dönük izleme olanağı sunar.",
  },
  {
    id: 4,
    question: "ColorVu (Gece Renkli) kameraların farkı nedir?",
    answer:
      "Geleneksel kameralar gece siyah-beyaz görüntü verirken, ColorVu teknolojili yüksek hassasiyetli sensörler zifiri karanlıkta dahi renkli, net ve detaylı görüntü almanızı sağlar.",
  },
  {
    id: 5,
    question: "Keşif ve montaj süreci nasıl ilerliyor?",
    answer:
      `İletişim kanallarımız veya ${siteConfig.phoneDisplay} numaralı hattımız üzerinden bize ulaştığınızda sahanıza özel keşif yapıyoruz. İhtiyacınıza en uygun sistemi belirleyip onayınızın ardından hızlıca montaj ve mobil kurulumu tamamlıyoruz.`,
  },
];
