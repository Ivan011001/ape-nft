import Logo from "../ui/logo";
import Socials from "./socials";
import MenuButton from "./menu-button";
import MobileMenuList from "./mobile-menu-list";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import { cn } from "@/lib/utils";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
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
              <SheetClose asChild>
                <Logo light />
              </SheetClose>

              <SheetClose asChild>
                <MenuButton isModal label="Close" />
              </SheetClose>
            </div>

            <div className="self-end">
              <Socials light />
            </div>
          </div>

          <MobileMenuList />
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

export default MobileMenu;
