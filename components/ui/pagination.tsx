"use client";

import { useSwiper } from "swiper/react";

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
      <button
        onClick={handlePrevClick}
        className="text-white text-2xl font-normal font-biroScript leading-normal hover:text-rose-500 transition-all duration-300"
      >
        Prev
      </button>
      <button
        onClick={handleNextClick}
        className="text-white text-2xl font-normal font-biroScript leading-normal hover:text-rose-500 transition-all duration-300"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
