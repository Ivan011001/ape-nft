import Image from "next/image";

import Header from "./header";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative bg-rose-500 rounded-[12px] md:rounded-[16px] lg:rounded-[24px] pb-[19px] md:pb-[35px] lg:pb-[111px] pt-9 md:pt-[124px] lg:pt-[182px]">
      <Header />

      <div className="container">
        <p className="text-stone-900 text-base md:text-xl lg:text-2xl font-normal font-biroScript leading-[27px] md:leading-[33px] lg:leading-10 text-center md:text-start">
          diD yOu seE iT ?
        </p>

        <h2 className="md:flex md:justify-between text-stone-900 text-[44px] md:text-[92px] lg:text-[164px] font-black leading-[44px] md:leading-[92px] lg:leading-[164px] tracking-wide text-center mb-2 md:mb-4 lg:mb-[30px]">
          <span>YACHT</span>
          <span>APES</span>
        </h2>

        <p className="text-center md:text-start font-normal text-base md:text-xl lg:text-2xl text-stone-900 font-biroScript leading-[27px] md:leading-[33px] lg:leading-10 mb-[6px] md:mb-[-30px] lg:ml-[120px]">
          Apes aRe eveRywhere
        </p>

        <div className="flex justify-center">
          <Image
            src="/images/hero.png"
            alt="Hero Ape"
            width={463}
            height={612}
            className="w-[216px] h-[284px] md:w-[283px] md:h-[386px] lg:w-[463px] lg:h-[612px] md:absolute md:bottom-0 md:right-[50%] md:translate-x-[45%]"
            priority
          />
        </div>

        <div className="md:flex justify-end">
          <div className="md:w-[190px] lg:w-[337px] flex flex-col md:flex-col-reverse gap-3 md:gap-4 lg:gap-7 lg:mt-[10px]">
            <Button variant="secondary">Meet Apes</Button>
            <p className="text-center md:text-justify text-stone-900 text-xs lg:text-base font-normal font-messinaSans uppercase leading-[14px] lg:leading-[19px]">
              Yacht Ape is a collection of unique digital apes that you can own
              in NFT format
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
