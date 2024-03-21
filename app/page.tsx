import About from "@/components/about";
import Arts from "@/components/arts";
import FAQ from "@/components/faq";
import Hero from "@/components/hero";
import MindMap from "@/components/mind-map";
import { Contact } from "lucide-react";

const HomePage = () => {
  return (
    <main className="pt-[54px] lg:pt-4 pb-6 md:pb-10">
      <section className="px-2 md:px-4">
        <Hero />
      </section>

      <About />
      <MindMap />
      <FAQ />
      <Arts />
      <Contact />
    </main>
  );
};

export default HomePage;
