const Pagination = () => {
  return (
    <div className="flex items-center justify-center gap-12 mt-6">
      <button className="text-white text-2xl font-normal font-biroScript leading-normal hover:text-rose-500 transition-all duration-300">
        Prev
      </button>
      <button className="text-white text-2xl font-normal font-biroScript leading-normal hover:text-rose-500 transition-all duration-300">
        Next
      </button>
    </div>
  );
};

export default Pagination;
