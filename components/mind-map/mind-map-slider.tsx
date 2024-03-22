"use client";

import { useState } from "react";

import MindMapCard from "./mind-map-card";
import MindMapButton from "./mind-map-button";
import Pagination from "../ui/pagination";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

import { IMindMapItem } from "@/types";

interface IMindMapSliderProps {
  items: IMindMapItem[];
}

const MindMapSlider = ({ items }: IMindMapSliderProps) => {
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
      className="w-full flex flex-col gap-y-6 lg:gap-y-12"
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <MindMapCard title={item.title} description={item.description} />
          </CarouselItem>
        ))}

        <CarouselItem>
          <MindMapButton />
        </CarouselItem>
      </CarouselContent>

      <Pagination carouselApi={api} />
    </Carousel>
  );
};

export default MindMapSlider;
