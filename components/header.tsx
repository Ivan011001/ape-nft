import Logo from "./ui/logo";

import Menu from "./header/menu";

import Socials from "./header/socials";

const Header = () => {
  return (
    <header className="w-full px-2 pt-2 md:px-3 md:pt-3 lg:px-6 lg:pt-6 absolute top-0 right-0 flex flex-col gap-y-2 lg:gap-y-4">
      <div className="w-full flex justify-between items-center">
        <Logo />

        <Menu />
      </div>

      <div className="self-end">
        <Socials />
      </div>
    </header>
  );
};

export default Header;
