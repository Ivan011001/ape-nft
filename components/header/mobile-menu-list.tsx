import Link from "next/link";

import { SheetClose } from "../ui/sheet";

import { MENU_ITEMS } from "@/constants";

const MobileMenuList = () => {
  return (
    <nav className="flex flex-col gap-y-4 items-center">
      {MENU_ITEMS.map((item, index) => (
        <SheetClose key={index} asChild>
          <Link
            key={index}
            href={`#${item.href}`}
            className="text-white text-2xl font-semibold font-messinaSans leading-[29px] uppercase"
          >
            {item.title}
          </Link>
        </SheetClose>
      ))}
    </nav>
  );
};

export default MobileMenuList;
