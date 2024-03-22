import About from "@/components/about";
import Arts from "@/components/arts";
import FAQ from "@/components/faq";
import Hero from "@/components/hero";
import MindMap from "@/components/mind-map";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

const HomePage = () => {
  return (
    <main className="pt-[54px] lg:pt-4 pb-6 md:pb-10">
      <Hero />
      <About />
      <MindMap />
      <FAQ />
      <Arts />
      <Contact />
      <Footer />
    </main>
  );
};

export default HomePage;
