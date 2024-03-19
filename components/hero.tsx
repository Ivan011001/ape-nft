import Image from "next/image";

const Hero = () => {
  return (
    <section className="container md:relative bg-rose-500 rounded-[12px] md:rounded-[16px] lg:rounded-[24px] pb-[19px] md:pb-[35px] pt-9 md:pt-[124px]">
      <p className="text-stone-900 text-base md:text-xl font-normal font-biroScript leading-[27px] md:leading-[33px] text-center md:text-start">
        diD yOu seE iT ?
      </p>

      <h2 className="md:flex md:justify-between text-stone-900 text-[44px] md:text-[92px] font-black leading-[44px] md:leading-[92px] tracking-wide text-center mb-2 md:mb-4">
        <span>YACHT</span>
        <span>APES</span>
      </h2>

      <p className="text-center md:text-start font-normal text-base md:text-xl text-stone-900 font-biroScript leading-[27px] md:leading-[33px] mb-[6px] md:mb-[-30px]">
        Apes aRe eveRywhere
      </p>

      <div className="flex justify-center">
        {" "}
        <Image
          src="/images/hero.png"
          alt="Hero Ape"
          width={511}
          height={675}
          className="w-[216px] h-[284px] md:w-[283px] md:h-[386px] md:absolute md:bottom-0 md:right-[50%] md:translate-x-[45%]"
        />
      </div>

      <div className="md:flex justify-end">
        <div className="md:w-[190px] flex flex-col md:flex-col-reverse gap-3 md:gap-4">
          <button className="w-full relative top-[-5px] pt-2.5 pb-3 bg-stone-900 bg-opacity-10 rounded-lg backdrop-blur-md inline-flex justify-center items-center text-white md:text-stone-900 text-base font-black leading-[19px]">
            MEET APES
          </button>
          <p className="text-center md:text-justify text-stone-900 text-xs font-normal font-messinaSans uppercase leading-[14px]">
            Yacht Ape is a collection of unique digital apes that you can own in
            NFT format
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
