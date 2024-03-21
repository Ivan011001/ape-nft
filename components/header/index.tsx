import Logo from "../ui/logo";
import Socials from "./socials";

const Header = () => {
  return (
    <header className="w-full px-2 pt-2 md:px-3 md:pt-3 lg:px-[96px] lg:pt-6 absolute top-0 right-0">
      <div className="flex justify-between items-start">
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
    </header>
  );
};

export default Header;
