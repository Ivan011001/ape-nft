"use client";

import { useState } from "react";

import Image from "next/image";

import Section from "./ui/section";
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
  const [selectedItemIndex, setSelectedItemIndex] = useState<null | number>(0);

  const handleSelectItem = (index: number) => {
    setSelectedItemIndex(index === selectedItemIndex ? null : index);
  };

  return (
    <Section>
      <div className="mb-6 md:mb-12 lg:mb-20">
        <Title>FAQ</Title>
      </div>

      <Accordion
        defaultValue="0"
        type="single"
        collapsible
        className="flex flex-col gap-y-2 md:gap-y-[18px] lg:gap-y-12"
      >
        {FAQ_ITEMS.map((item, index) => (
          <AccordionItem
            value={index.toString()}
            key={index}
            className={cn(
              "relative px-2 pt-2 md:pt-[18px] md:pr-4 md:pl-[183px] lg:pt-6 lg:pr-6 lg:pl-[297px]",

              selectedItemIndex === index &&
                "bg-stone-900 rounded-xl md:rounded-2xl lg:rounded-3xl"
            )}
          >
            <AccordionTrigger
              className="group flex items-start gap-x-2 md:gap-x-6 lg:gap-x-7"
              onClick={() => handleSelectItem(index)}
            >
              <span
                className={cn(
                  "flex-shrink-0 text-rose-500 text-xs md:text-base lg:text-2xl font-normal font-biroScript leading-8 md:leading-[40px] lg:leading-[70px] group-hover:text-white trnasition-all duration-300",
                  selectedItemIndex === index && "text-white"
                )}
              >
                {`[ ${index + 1} ]`}
              </span>
              <h3
                className={cn(
                  "text-start text-white text-xl md:text-[32px] lg:text-[64px] font-black uppercase leading-tight md:leading-[32px] lg:leading-[64px] group-hover:text-rose-500 trnasition-all duration-300",
                  selectedItemIndex === index && "text-rose-500"
                )}
              >
                {item.question}
              </h3>
            </AccordionTrigger>
            <AccordionContent className="text-white text-xs lg:text-base font-normal font-messinaSans uppercase leading-[14px] lg:leading-[19px] mt-[10px] md:mt-3 lg:mt-9 md:flex">
              <Image
                src={`/images/faq/ape-${index + 1}.jpg`}
                alt="Ape"
                width={248}
                height={282}
                className="origin-top-left hidden md:block md:absolute md:rounded-2xl lg:rounded-3xl md:w-[148px] md:h-[183px] lg:w-[248px] lg:h-[282px] md:rotate-[-16deg] lg:rotate-[-8deg] left-0 top-0"
              />

              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
};

export default FAQ;
