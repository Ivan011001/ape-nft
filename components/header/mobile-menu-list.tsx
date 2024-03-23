import Link from "next/link";

import { SheetClose } from "../ui/sheet";

import { MENU_ITEMS } from "@/constants";

const MobileMenuList = () => {
  return (
    <nav className="flex flex-col gap-y-4 items-center">
      {MENU_ITEMS.map(({ id, href, title }) => (
        <SheetClose key={id} asChild>
          <Link
            href={href}
            className="text-white text-2xl font-semibold font-messinaSans leading-[29px] uppercase"
          >
            {title}
          </Link>
        </SheetClose>
      ))}
    </nav>
  );
};

export default MobileMenuList;
