import Hero from "@/components/hero";
import About from "@/components/about";
import MindMap from "@/components/mind-map";

const HomePage = () => {
  return (
    <main className="pt-[54px] lg:pt-4">
      <section className="px-2 md:px-4">
        <Hero />
      </section>

      <About />
      <MindMap />
    </main>
  );
};

export default HomePage;
