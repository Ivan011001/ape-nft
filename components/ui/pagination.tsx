"use client";

interface IPaginationProps {
  prev: () => void;
  next: () => void;
}

const Pagination = ({ prev, next }: IPaginationProps) => {
  return (
    <div className="flex items-center justify-center gap-12 mt-6">
      <button
        onClick={prev}
        className="text-white text-2xl font-normal font-biroScript leading-normal hover:text-rose-500 transition-all duration-300"
      >
        Prev
      </button>
      <button
        onClick={next}
        className="text-white text-2xl font-normal font-biroScript leading-normal hover:text-rose-500 transition-all duration-300"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
