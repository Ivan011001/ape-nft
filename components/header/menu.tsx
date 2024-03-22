"use client";

import { useState } from "react";

import Link from "next/link";

import Logo from "../ui/logo";
import Socials from "./socials";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { MENU_ITEMS } from "@/constants";

import { cn } from "@/lib/utils";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          onClick={toggleIsOpen}
          className={cn(
            "h-12 w-12 lg:h-20 lg:w-20 bg-stone-900 bg-opacity-10 rounded-l-lg rounded-r-lg lg:rounded-l-[12px] lg:rounded-r-[12px] backdrop-blur-md flex justify-center items-center text-stone-900 text-xs lg:text-base font-semibold font-messinaSans leading-[14px] lg:leading-[19px] uppercase hover:underline hover:text-white transition-all duration-300"
          )}
        >
          Menu
        </button>
      </SheetTrigger>

      <SheetContent className="w-full bg-neutral-900 px-4 pt-[64px] flex flex-col justify-between">
        <div>
          <div className="flex flex-col gap-y-2 lg:gap-y-4 mb-4 justify-between">
            <div className="w-full flex justify-between items-center">
              <button onClick={toggleIsOpen} className="p-0">
                <Logo light />
              </button>

              <button
                onClick={toggleIsOpen}
                className={cn(
                  "h-12 w-12 lg:h-20 lg:w-20 bg-white bg-opacity-10 rounded-lg lg:rounded-[12px] backdrop-blur-md flex justify-center items-center text-white text-xs lg:text-base font-semibold font-messinaSans leading-[14px] lg:leading-[19px] uppercase hover:underline hover:text-rose-500 transition-all duration-300"
                )}
              >
                Close
              </button>
            </div>

            <div className="self-end">
              <Socials light />
            </div>
          </div>

          <nav className="flex flex-col gap-y-4 items-center">
            {MENU_ITEMS.map((item, index) => (
              <Link
                onClick={toggleIsOpen}
                key={index}
                href={`#${item.href}`}
                className="text-white text-2xl font-semibold font-messinaSans leading-[29px] uppercase"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex justify-center">
          <p className="w-[216px] text-center text-white text-xs font-normal font-messinaSans uppercase leading-[14px]">
            © Yacht ape 2024 all rights reserved
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Menu;
