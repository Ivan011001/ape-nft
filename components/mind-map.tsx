"use client";

import Pagination from "./ui/pagination";
import Section from "./ui/section";
import Title from "./ui/title";

import MindMapList from "./mind-map/mind-map-list";
import MindMapCard from "./mind-map/mind-map-card";
import MindMapButton from "./mind-map/mind-map-button";

import {
  Navigation,
  Pagination as SwiperPagination,
  Scrollbar,
  A11y,
  Grid,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import { MIND_MAP_ITEMS } from "@/constants";

const MindMap = () => {
  return (
    <Section>
      <Title className="mb-6 md:mb-10 lg:mb-20">Mind Map</Title>

      <div className="md:hidden">
        <Swiper
          modules={[Navigation, SwiperPagination, Scrollbar, A11y, Grid]}
          slidesPerView={1}
          spaceBetween={24}
          grabCursor
          grid={{
            rows: 1,
          }}
          className="flex flex-col gap-y-6"
        >
          {MIND_MAP_ITEMS.map((item, index) => (
            <SwiperSlide key={index}>
              <MindMapCard title={item.title} description={item.description} />
            </SwiperSlide>
          ))}

          <SwiperSlide>
            <MindMapButton />
          </SwiperSlide>

          <Pagination />
        </Swiper>
      </div>

      <MindMapList items={MIND_MAP_ITEMS} />
    </Section>
  );
};

export default MindMap;
