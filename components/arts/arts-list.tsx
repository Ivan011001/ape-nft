"use client";

import { useMediaQuery } from "@/hooks";

import Pagination from "../ui/pagination";
import ArtsItem from "./arts-item";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";

import { IArtsItem } from "@/types";

interface IArtsListProps {
  items: IArtsItem[];
}

const ArtsList = ({ items }: IArtsListProps) => {
  const tablet = useMediaQuery("(min-width: 768px)");
  const desktop = useMediaQuery("(min-width: 1280px)");

  const itemsPerSwipe = desktop ? 4 : tablet ? 2 : 1;

  return (
    <Swiper
      modules={[Navigation, A11y]}
      slidesPerView={itemsPerSwipe}
      spaceBetween={24}
      grabCursor
      className="flex flex-col"
    >
      {items.map((item, index) => (
        <SwiperSlide
          key={index}
          className="w-[216px] h-[256px] md:w-[284px] md:h-[336px] lg:w-[240px] lg:h-[280px]"
        >
          <ArtsItem item={item} />
        </SwiperSlide>
      ))}

      <div className="mt-6 lg:mt-12">
        <Pagination />
      </div>
    </Swiper>
  );
};

export default ArtsList;
