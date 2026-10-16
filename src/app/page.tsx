import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import FaqAccordion from "@/components/FaqAccordion";
import Contact from "@/components/Contact";
import { districts, faqItems, services, siteConfig } from "@/lib/site";

const siteUrl = "https://www.defneguvenlik.com.tr";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#isletme`,
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      description:
        "İvrindi merkezli, Balıkesir ve tüm ilçelerinde güvenlik kamera, alarm, yangın algılama, güneş enerjili kamera ve merkezi uydu sistemleri kurulumu; kamera ve alarm sistemleri bakım ve onarımı.",
      url: siteUrl,
      image: `${siteUrl}/opengraph-image`,
      logo: `${siteUrl}/images/logo.jpg`,
      telephone: "+905343738890",
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.addressLine,
        addressLocality: "İvrindi",
        addressRegion: "Balıkesir",
        postalCode: "10770",
        addressCountry: "TR",
      },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Balıkesir" },
        ...districts.map((name) => ({ "@type": "City", name: `${name}, Balıkesir` })),
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:30",
        closes: "19:00",
      },
      sameAs: [siteConfig.instagramUrl, siteConfig.facebookUrl],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Hizmetlerimiz",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
          },
        })),
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <HeroSection />
      <Services />
      <About />
      <WhyUs />
      <FaqAccordion />
      <Gallery />
      <Contact />
    </div>
  );
}
