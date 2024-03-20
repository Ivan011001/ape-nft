const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="container pt-[60px] md:pt-[80px] lg:pt-[120px]">
      {children}
    </section>
  );
};

export default Section;
