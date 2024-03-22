"use client";

import { useState } from "react";

import Link from "next/link";

import { MENU_ITEMS } from "@/constants";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-row-reverse w-full">
      <button
        onClick={toggleIsOpen}
        className="h-12 w-12 lg:h-20 lg:w-20 bg-stone-900 bg-opacity-10 rounded-lg md:rounded-[12px] backdrop-blur-md flex justify-center items-center text-stone-900 text-xs lg:text-base font-semibold font-messinaSans leading-[14px] lg:leading-[19px] uppercase"
      >
        Menu
      </button>

      {isOpen && (
        <ul className="flex first:rounded-tl-lg first:rounded-bl-lg lg:first:rounded-tl-[12px] lg:first:rounded-bl-[12px]">
          {MENU_ITEMS.map((item, index) => (
            <li key={index}>
              <Link
                href={`#${item.href}`}
                className="h-12 w-12 lg:h-20 lg:w-20 bg-stone-900 bg-opacity-10 backdrop-blur-md flex justify-center items-center text-stone-900 text-xs lg:text-base font-semibold font-messinaSans leading-[14px] lg:leading-[19px] uppercase"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Menu;
