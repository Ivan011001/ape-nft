"use client";

import { useState } from "react";

import Title from "./ui/title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const FAQ_ITEMS = [
  {
    question: "WHAT IS AN NFT COLLECTION?",
    answer:
      "An NFT collection is a group of unique digital assets, each represented by a non-fungible token, typically created around a specific theme or style.",
  },
  {
    question: "HOW DO I PURCHASE NFTS FROM A COLLECTION?",
    answer:
      "To purchase NFTs from a collection, you typically need to use cryptocurrency on a blockchain-based marketplace.",
  },
  {
    question: "CAN I SELL OR TRADE NFTS FROM A COLLECTION?",
    answer:
      "Yes, you can sell or trade NFTs from a collection like you would other digital assets.",
  },
  {
    question: "WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?",
    answer:
      "As an NFT owner, you can own, transfer, potentially access exclusive content, resell, but don't automatically get copyright or intellectual property rights.",
  },
];

const FAQ = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<null | number>(
    null
  );

  const handleSelectItem = (index: number) => {
    setSelectedItemIndex(index === selectedItemIndex ? null : index);
  };

  return (
    <section className="container pt-[60px] md:pt-[80px] lg:pt-[120px]">
      <div className="mb-6">
        <Title>FAQ</Title>
      </div>

      <Accordion type="single" collapsible className="flex flex-col gap-y-2">
        {FAQ_ITEMS.map((item, index) => (
          <AccordionItem
            value={index.toString()}
            key={index}
            onClick={() => handleSelectItem(index)}
            className={cn(
              "px-2 pt-2",
              selectedItemIndex === index && "bg-stone-900 rounded-xl"
            )}
          >
            <AccordionTrigger className="flex items-start gap-x-2">
              <span
                className={cn(
                  "flex-shrink-0 text-rose-500 text-xs font-normal font-biroScript leading-8",
                  selectedItemIndex === index && "text-white"
                )}
              >
                {`[ ${index + 1} ]`}
              </span>
              <h3
                className={cn(
                  "text-start text-white text-xl font-black uppercase leading-tight",
                  selectedItemIndex === index && "text-rose-500"
                )}
              >
                {item.question}
              </h3>
            </AccordionTrigger>
            <AccordionContent className="text-white text-xs font-normal font-messinaSans uppercase leading-[14px] mt-[10px]">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;
