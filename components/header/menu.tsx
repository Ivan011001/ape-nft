"use client";

import { useState } from "react";

import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { MENU_ITEMS } from "@/constants";

import { cn } from "@/lib/utils";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const onToggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <DropdownMenu open={open} onOpenChange={onToggleOpen} modal={false}>
      <DropdownMenuTrigger
        asChild
        className="focus-visible:outline-none ouline-none"
      >
        <button
          className={cn(
            "h-12 w-12 lg:h-20 lg:w-20 bg-neutral-900 bg-opacity-10 rounded-l-lg rounded-r-lg lg:rounded-r-[12px] lg:rounded-l-[12px] backdrop-blur-md flex justify-center items-center text-neutral-900 text-xs lg:text-base font-semibold font-messinaSans leading-[14px] lg:leading-[19px] uppercase hover:underline hover:text-white transition-all duration-300",
            open && "rounded-l-none lg:rounded-l-none"
          )}
        >
          {open ? "Close" : "Menu"}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="left"
        className="h-12 lg:h-20 bg-stone-900 bg-opacity-10 flex backdrop-blur-md -mr-[4px]"
      >
        {MENU_ITEMS.map((item, index) => (
          <DropdownMenuItem
            asChild
            key={index}
            className=" cursor-pointer w-12 lg:w-20 text-stone-900 hover:text-white hover:underline text-xs lg:text-base font-semibold font-messinaSans leading-[14px] lg:leading-[19px] uppercase flex items-center justify-center transition-all duration-300"
          >
            <Link href={`#${item.href}`} className="">
              {item.title}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Menu;
