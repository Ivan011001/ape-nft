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

interface IMenuProps {
  light?: boolean;
}

const Menu = ({ light }: IMenuProps) => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
      <DropdownMenuTrigger
        asChild
        className="focus-visible:outline-none ouline-none"
      >
        <button
          className={cn(
            "h-12 w-12 lg:h-20 lg:w-20 bg-neutral-900 bg-opacity-10 rounded-l-lg rounded-r-lg lg:rounded-r-[12px] lg:rounded-l-[12px] backdrop-blur-md flex justify-center items-center text-neutral-900 text-xs lg:text-base font-semibold font-messinaSans leading-[14px] lg:leading-[19px] uppercase hover:underline hover:text-white transition-all duration-300",
            open && "rounded-l-none lg:rounded-l-none",
            light && "bg-white text-white hover:text-rose-500"
          )}
        >
          {open ? "Close" : "Menu"}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="left"
        className={cn(
          "h-12 lg:h-20 bg-stone-900 bg-opacity-10 flex backdrop-blur-md -mr-[4px]",
          light && "bg-white"
        )}
      >
        {MENU_ITEMS.map(({ id, href, title }) => (
          <DropdownMenuItem
            key={id}
            className={cn(
              "cursor-pointer w-12 lg:w-20 text-stone-900 hover:text-white hover:underline text-xs lg:text-base font-semibold font-messinaSans leading-[14px] lg:leading-[19px] uppercase flex items-center justify-center transition-all duration-300",
              light && "text-white hover:text-rose-500"
            )}
          >
            <Link
              href={href}
              className="h-full w-full flex items-center justify-center"
            >
              {title}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Menu;
