import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import SecurityWizard from "@/components/SecurityWizard";
import FaqAccordion from "@/components/FaqAccordion";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <HeroSection />
      <Services />
      <About />
      <WhyUs />
      <SecurityWizard />
      <FaqAccordion />
      <Gallery />
      <Contact />
    </div>
  );
}
