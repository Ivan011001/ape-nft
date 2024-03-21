"use client";

import { useState } from "react";

import Pagination from "./ui/pagination";
import Section from "./ui/section";
import Title from "./ui/title";

import { MIND_MAP_ITEMS } from "@/constants";

interface IMindMapCardProps {
  title: string;
  description: string;
}

const MindMapCard = ({ title, description }: IMindMapCardProps) => (
  <div className="w-[216px] h-[242px] md:w-[284px] lg:w-[504px] lg:h-[480px] px-3 py-6 md:px-6 bg-stone-900 rounded-xl md:rounded-2xl lg:rounded-3xl flex flex-col justify-between">
    <div className="md:flex justify-end">
      <p className="md:w-32 lg:w-[256px] text-white text-xs lg:text-2xl font-normal font-messinaSans uppercase leading-[14px] lg:leading-[29px] float-right">
        {description}
      </p>
    </div>
    <h3 className="text-white text-[32px] lg:text-[64px] font-black uppercase leading-[32px] lg:leading-[64px]">
      {title}
    </h3>
  </div>
);

const MindMap = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const nextPage = () => {
    setCurrentPage((prev) =>
      prev === MIND_MAP_ITEMS.length ? MIND_MAP_ITEMS.length : prev + 1
    );
  };

  const visibleCard =
    currentPage === MIND_MAP_ITEMS.length ? null : MIND_MAP_ITEMS[currentPage];

  return (
    <Section>
      <Title className="mb-6 md:mb-10 lg:mb-20">Mind Map</Title>

      <div
        className="grid md:hidden grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(284px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(504px,1fr))] gap-x-6 gap-y-6"
        style={{ gridAutoFlow: "row" }}
      >
        {visibleCard && (
          <MindMapCard
            title={visibleCard.title}
            description={visibleCard.description}
          />
        )}

        {currentPage === MIND_MAP_ITEMS.length && (
          <button className="w-[216px] h-[242px] md:w-[284px] lg:w-[504px] lg:h-[480px] px-3 py-6 md:px-6 bg-rose-500 rounded-xl md:rounded-2xl lg:rounded-3xl flex flex-col justify-between items-start text-start">
            <svg className="w-12 h-12 lg:w-16 lg:h-16 self-end">
              <use xlinkHref="/icons/sprite.svg#icon-up-left"></use>
            </svg>

            <h3 className="text-white text-[32px] lg:text-[64px] font-black uppercase leading-[32px] lg:leading-[64px]">
              Learn <br className="hidden lg:block" />
              more <br className="hidden lg:block" />
              in mind map
            </h3>
          </button>
        )}
      </div>

      <div
        className="hidden md:grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(284px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(504px,1fr))] gap-x-6 gap-y-6"
        style={{ gridAutoFlow: "row" }}
      >
        {MIND_MAP_ITEMS.map((item, index) => (
          <MindMapCard
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}

        <button className="w-[216px] h-[242px] md:w-[284px] lg:w-[504px] lg:h-[480px] px-3 py-6 md:px-6 bg-rose-500 rounded-xl md:rounded-2xl lg:rounded-3xl flex flex-col justify-between items-start text-start">
          <svg className="w-12 h-12 lg:w-16 lg:h-16 self-end">
            <use xlinkHref="/icons/sprite.svg#icon-up-left"></use>
          </svg>

          <h3 className="text-white text-[32px] lg:text-[64px] font-black uppercase leading-[32px] lg:leading-[64px]">
            Learn <br className="hidden lg:block" />
            more <br className="hidden lg:block" />
            in mind map
          </h3>
        </button>
      </div>

      <div className="md:hidden">
        <Pagination prev={prevPage} next={nextPage} />
      </div>
    </Section>
  );
};

export default MindMap;
