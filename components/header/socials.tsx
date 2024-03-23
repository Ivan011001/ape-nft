import { SOCIAL_ITEMS } from "@/constants";

import { cn } from "@/lib/utils";

interface ISocialsProps {
  light?: boolean;
}

const Socials = ({ light }: ISocialsProps) => {
  return (
    <ul className="flex flex-col gap-y-2 lg:gap-y-4">
      {SOCIAL_ITEMS.map(({ id, icon, href }) => (
        <li
          key={id}
          className={cn(
            "group h-12 w-12 lg:h-20 lg:w-20 bg-stone-900 bg-opacity-10 rounded-lg md:rounded-[12px] backdrop-blur-md",
            light && "bg-white"
          )}
        >
          <a
            href={href}
            target="_blank"
            referrerPolicy="no-referrer"
            className="w-full h-full flex justify-center items-center"
          >
            <svg
              className={cn(
                "h-4 w-4 md:w-6 md:h-6 fill-secondary group-hover:fill-primary transition-all duration-300",
                light && "fill-primary group-hover:fill-accent"
              )}
            >
              <use xlinkHref={`/icons/sprite.svg#icon-${icon}`}></use>
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
