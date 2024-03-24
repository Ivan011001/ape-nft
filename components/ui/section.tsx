import { cn } from "@/lib/utils";

interface ISectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ children, className, id }: ISectionProps) => {
  return (
    <section
      className={cn(
        "container xs:max-w-[480px] md:max-w-[768px] lg:max-w-[1280px] pt-[60px] md:pt-[80px] lg:pt-[120px]",
        className
      )}
      id={id}
    >
      {children}
    </section>
  );
};

export default Section;
