import Logo from "./ui/logo";

import Socials from "./header/socials";
import Menu from "./header/menu";

const Header = () => {
  return (
    <header className="w-full px-2 pt-2 md:px-3 md:pt-3 lg:px-[96px] lg:pt-6 absolute top-0 right-0">
      <div className="flex justify-between items-start">
        <Logo />

        <div className="flex flex-col items-end gap-y-2 lg:gap-y-4">
          <Menu />

          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
