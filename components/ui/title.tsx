import { cn } from "@/lib/utils";

interface ITitleProps {
  children: React.ReactNode;
  className?: string;
}

const Title = ({ children, className }: ITitleProps) => {
  return (
    <h2
      className={cn(
        "text-center text-primary text-[44px] md:text-[80px] lg:text-[160px] font-black uppercase leading-10 md:leading-[80px] lg:leading-[160px]",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default Title;
