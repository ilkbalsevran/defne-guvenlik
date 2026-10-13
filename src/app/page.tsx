import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <Hero />
      <Services />
      <About />
      <WhyUs />
      <Gallery />
      <Contact />
    </div>
  );
}
