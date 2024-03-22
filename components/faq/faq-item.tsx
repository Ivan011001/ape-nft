import Image from "next/image";
import {
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "../ui/accordion";

import { motion } from "framer-motion";

import { IFAQItem } from "@/types";

import { cn } from "@/lib/utils";

interface IFAQItemProps {
  item: IFAQItem;
  index: number;
  selectedItemIndex: number | null;
  onSelectItem: () => void;
}

const FAQItem = ({
  item,
  index,
  selectedItemIndex,
  onSelectItem,
}: IFAQItemProps) => {
  const { position, question, answer, image } = item;

  const isSelected = selectedItemIndex === index;

  return (
    <AccordionItem
      value={index.toString()}
      className={cn(
        "relative px-2 pt-2 md:pt-[18px] md:pr-4 md:pl-[183px] lg:pt-6 lg:pr-6 lg:pl-[297px]",
        isSelected && "bg-stone-900 rounded-xl md:rounded-2xl lg:rounded-3xl"
      )}
    >
      <AccordionTrigger
        className="group flex items-start gap-x-2 md:gap-x-6 lg:gap-x-7"
        onClick={onSelectItem}
      >
        <span
          className={cn(
            "flex-shrink-0 text-rose-500 text-xs md:text-base lg:text-2xl font-normal font-biroScriptUS leading-8 md:leading-[40px] lg:leading-[70px] group-hover:text-white trnasition-all duration-300",
            isSelected && "text-white"
          )}
        >
          {position}
        </span>
        <h3
          className={cn(
            "text-start text-white text-xl md:text-[32px] lg:text-[64px] font-black uppercase leading-tight md:leading-[32px] lg:leading-[64px] group-hover:text-rose-500 trnasition-all duration-300",
            isSelected && "text-rose-500"
          )}
        >
          {question}
        </h3>
      </AccordionTrigger>
      <AccordionContent className="text-white text-xs lg:text-base font-normal font-messinaSans uppercase leading-[14px] lg:leading-[19px] mt-[10px] md:mt-3 lg:mt-9 md:flex">
        {isSelected && (
          <motion.div
            className="hidden md:block md:absolute md:w-[148px] md:h-[183px] lg:w-[248px] lg:h-[282px] left-0 top-0"
            initial={{ opacity: 0, scale: 1.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={image}
              alt="Ape"
              width={248}
              height={282}
              className="origin-top-left md:rounded-2xl lg:rounded-3xl md:w-[148px] md:h-[183px] lg:w-[248px] lg:h-[282px] md:rotate-[-16deg] lg:rotate-[-8deg]"
            />
          </motion.div>
        )}
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FAQItem;
