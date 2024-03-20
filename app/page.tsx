import Hero from "@/components/hero";
import About from "@/components/about";
import MindMap from "@/components/mind-map";
import FAQ from "@/components/faq";

const HomePage = () => {
  return (
    <main className="pt-[54px] lg:pt-4 pb-6 md:pb-10">
      <section className="px-2 md:px-4">
        <Hero />
      </section>

      <About />
      <MindMap />
      <FAQ />
    </main>
  );
};

export default HomePage;
