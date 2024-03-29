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
      const scrollPosition = window.scrollY + 200;

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
    <header className="w-full">
      {reachedAbout ? (
        <div className="flex flex-col items-end gap-y-2 lg:gap-y-4 fixed z-50 top-0 right-0 px-4 pt-[62px] md:px-7 md:pt-[66px] lg:px-8 lg:pt-[33px]">
          <div className="md:hidden">
            <MobileMenu light />
          </div>

          <div className="hidden md:block">
            <Menu light />
          </div>

          <Socials light />
        </div>
      ) : (
        <>
          <div className="px-4 mt-4 md:px-7 md:mt-5 lg:px-8 lg:mt-10 absolute top-0 left-0">
            <Logo />
          </div>

          <div className="flex flex-col gap-y-2 lg:gap-y-4 items-center px-4 pt-[62px] md:px-7 md:pt-[66px] lg:px-8 lg:pt-[33px] fixed z-50 top-0 right-0">
            <div className="md:hidden">
              <MobileMenu />
            </div>

            <div className="hidden md:block">
              <Menu />
            </div>

            <Socials />
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
