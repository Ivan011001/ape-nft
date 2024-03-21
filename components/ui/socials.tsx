import { SOCIAL_ITEMS } from "@/constants";

const Socials = () => {
  return (
    <ul className="flex flex-col gap-y-2 lg:gap-y-4">
      {SOCIAL_ITEMS.map((social, index) => (
        <li
          key={index}
          className="h-12 w-12 lg:h-20 lg:w-20 bg-stone-900 bg-opacity-10 rounded-lg md:rounded-[12px] backdrop-blur-md"
        >
          <button className="group w-full h-full flex justify-center items-center text-stone-900 text-xs font-semibold font-messinaSans leading-[14px]">
            <svg className="h-4 w-4 md:w-6 md:h-6 fill-stone-900 group-hover:fill-white transition-all duration-300">
              <use xlinkHref={`/icons/sprite.svg#icon-${social.icon}`}></use>
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
