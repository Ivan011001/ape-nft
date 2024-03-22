"use client";

import Pagination from "../ui/pagination";

import MindMapCard from "./mind-map-card";
import MindMapButton from "./mind-map-button";

import { Navigation, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import { IMindMapItem } from "@/types";

interface IMindMapSliderProps {
  items: IMindMapItem[];
}

const MindMapSlider = ({ items }: IMindMapSliderProps) => {
  return (
    <Swiper
      modules={[Navigation, A11y]}
      slidesPerView={1}
      spaceBetween={24}
      grabCursor
      className="flex flex-col"
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <MindMapCard title={item.title} description={item.description} />
        </SwiperSlide>
      ))}

      <SwiperSlide>
        <MindMapButton />
      </SwiperSlide>

      <div className="mt-6">
        <Pagination />
      </div>
    </Swiper>
  );
};

export default MindMapSlider;
