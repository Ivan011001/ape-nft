interface ISectionProps {
  children: React.ReactNode;
  id?: string;
}

const Section = ({ children, id }: ISectionProps) => {
  return (
    <section className="container pt-[60px] md:pt-[80px] lg:pt-[120px]" id={id}>
      {children}
    </section>
  );
};

export default Section;
