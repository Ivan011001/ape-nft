"use client";

import { useState, useEffect } from "react";

import Logo from "./ui/logo";
import Menu from "./header/menu";
import MobileMenu from "./header/mobile-menu";
import Socials from "./header/socials";

const Header = () => {
  const [reachedAbout, setReachedAbout] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (!aboutSection) return;

      const aboutSectionTop = aboutSection.offsetTop;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= aboutSectionTop) {
        setReachedAbout(true);
      } else {
        setReachedAbout(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="w-full px-4 pt-[62px] md:px-7 md:pt-[66px] lg:px-8 lg:pt-[33px] fixed top-0 right-0 flex flex-col gap-y-2 lg:gap-y-4">
      <div className="w-full flex justify-between items-center">
        {reachedAbout ? <Logo light /> : <Logo />}

        <div className="md:hidden">
          {reachedAbout ? <MobileMenu light /> : <MobileMenu />}
        </div>

        <div className="hidden md:block">
          {reachedAbout ? <Menu light /> : <Menu />}
        </div>
      </div>

      <div className="self-end">
        {reachedAbout ? <Socials light /> : <Socials />}
      </div>
    </header>
  );
};

export default Header;
