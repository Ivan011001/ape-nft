"use client";

import { useSwiper } from "swiper/react";

import { Button } from "./button";

const Pagination = () => {
  const swiper = useSwiper();

  const handlePrevClick = () => {
    swiper.slidePrev();
  };

  const handleNextClick = () => {
    swiper.slideNext();
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
