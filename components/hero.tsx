import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-rose-500 rounded-[12px] md:rounded-[16px] lg:rounded-[24px] pt-9 pb-[19px] px-[64px]">
      <p className="text-stone-900 text-base md:text-xl font-normal font-biroScript leading-[27px] md:leading-[33px] text-center">
        diD yOu seE iT ?
      </p>

      <h2 className="text-stone-900 text-[44px] md:text-[92px] font-black leading-[44px] md:leading-[92px] tracking-wide text-center mb-2">
        YACHT APES
      </h2>

      <p className="text-center font-normal text-base md:text-xl text-stone-900 font-biroScript leading-[27px] md:leading-[33px] md-[6px]">
        Apes aRe eveRywhere
      </p>

      <div className="flex flex-col items-center mb-3 relative">
        <div>
          <Image
            src="/images/hero.png"
            alt="Hero Ape"
            width={511}
            height={675}
            className="w-[216px] h-[284px] md:w-[283px] md:h-[386px]"
          />
          <button className="w-full relative top-[-5px] pt-2.5 pb-3 bg-stone-900 bg-opacity-10 rounded-lg backdrop-blur-md inline-flex justify-center items-center text-white text-base font-black leading-[19px]">
            MEET APES
          </button>
        </div>
      </div>

      <p className="text-center text-stone-900 text-xs font-normal font-messinaSans uppercase leading-[14px]">
        Yacht Ape is a collection of unique digital apes that you can own in NFT
        format
      </p>
    </section>
  );
};

export default Hero;
