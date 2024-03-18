import Logo from "./ui/logo";
import Socials from "./ui/socials";

const Header = () => {
  return (
    <div className="flex justify-between">
      <Logo />

      <div className="flex flex-col gap-y-2 lg:gap-y-4">
        <div className="h-12 w-12 lg:h-20 lg:w-20 bg-stone-900 bg-opacity-10 rounded-lg md:rounded-[12px] backdrop-blur-md flex justify-center items-center">
          <span className="text-stone-900 text-xs font-semibold font-messinaSans leading-[14px]">
            MENU
          </span>
        </div>

        <Socials />
      </div>
    </div>
  );
};

export default Header;
