"use client";

import { useState } from "react";

import { Accordion } from "../ui/accordion";

import FAQItem from "./faq-item";

import { IFAQItem } from "@/types";

interface IFAQListProps {
  items: IFAQItem[];
}

const FAQList = ({ items }: IFAQListProps) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<null | number>(1);

  const handleSelectItem = (index: number) => {
    setSelectedItemIndex(index === selectedItemIndex ? null : index);
  };

  return (
    <Accordion
      defaultValue="1"
      type="single"
      collapsible
      className="flex flex-col gap-y-2 md:gap-y-[18px] lg:gap-y-12"
    >
      {items.map((item) => (
        <FAQItem
          key={item.id}
          index={item.id}
          item={item}
          selectedItemIndex={selectedItemIndex}
          onSelectItem={() => handleSelectItem(item.id)}
        />
      ))}
    </Accordion>
  );
};

export default FAQList;
