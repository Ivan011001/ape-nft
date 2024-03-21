const MindMapButton = () => {
  return (
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
  );
};

export default MindMapButton;
