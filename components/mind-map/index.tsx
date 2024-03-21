"use client";

import { useState } from "react";

import Pagination from "../ui/pagination";
import Section from "../ui/section";
import Title from "../ui/title";

import MindMapList from "./mind-map-list";
import MindMapCard from "./mind-map-card";
import MindMapButton from "./mind-map-button";

import { MIND_MAP_ITEMS } from "@/constants";

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

        {currentPage === MIND_MAP_ITEMS.length && <MindMapButton />}
      </div>

      <MindMapList items={MIND_MAP_ITEMS} />

      <div className="md:hidden">
        <Pagination prev={prevPage} next={nextPage} />
      </div>
    </Section>
  );
};

export default MindMap;
