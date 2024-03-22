"use client";

import { CarouselApi } from "./carousel";

import { Button } from "./button";

interface IPaginationProps {
  carouselApi: CarouselApi;
}

const Pagination = ({ carouselApi }: IPaginationProps) => {
  const handlePrevClick = () => {
    carouselApi?.scrollPrev();
  };

  const handleNextClick = () => {
    carouselApi?.scrollNext();
  };

  return (
    <div className="flex items-center justify-center gap-12">
      <Button variant="ghost" size="sm" onClick={handlePrevClick}>
        Prev
      </Button>

      <Button variant="ghost" size="sm" onClick={handleNextClick}>
        Next
      </Button>
    </div>
  );
};

export default Pagination;
