import Link from "next/link";

import { cn } from "@/lib/utils";

interface ILogoProps {
  light?: boolean;
}

const Logo = ({ light }: ILogoProps) => {
  return (
    <Link href="/" className="group">
      <svg
        className={cn(
          "w-12 h-8 lg:w-[72px] lg:h-[50px] fill-secondary group-hover:fill-primary transition-all duration-300",
          light && "fill-primary group-hover:fill-accent"
        )}
      >
        <use xlinkHref="/icons/sprite.svg#icon-logo"></use>
      </svg>
    </Link>
  );
};

export default Logo;
