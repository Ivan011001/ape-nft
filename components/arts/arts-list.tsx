"use client";

import { useState } from "react";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Pagination from "../ui/pagination";
import ArtsItem from "./arts-item";

import { IArtsItem } from "@/types";

interface IArtsListProps {
  items: IArtsItem[];
}

const ArtsList = ({ items }: IArtsListProps) => {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <Carousel
      setApi={setApi}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      opts={{
        align: "start",
      }}
      className="w-[216px] md:w-auto flex flex-col gap-y-6 lg:gap-y-12"
    >
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/4">
            <ArtsItem item={item} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <Pagination carouselApi={api} />
    </Carousel>
  );
};

export default ArtsList;
