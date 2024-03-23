import Link from "next/link";
import Image from "next/image";

import { Button } from "./ui/button";
import Header from "./header";

const Hero = () => {
  return (
    <section className="px-2 md:px-4">
      <div className="relative bg-rose-500 rounded-[12px] md:rounded-[16px] lg:rounded-[24px] pb-[19px] md:pb-[35px] lg:pb-[81px] pt-9 md:pt-[124px] lg:pt-[197px]">
        <Header />

        <div className="container md:max-w-[736px] lg:max-w-[1248px] px-[64px] md:px-[72px] lg:px-[115px]">
          <p className="text-stone-900 text-base md:text-xl lg:text-2xl font-normal font-biroScript leading-[27px] md:leading-[33px] lg:leading-10 text-center md:text-start">
            diD yOu seE iT ?
          </p>

          <h1 className="text-stone-900 text-[44px] md:text-[92px] lg:text-[164px] font-black leading-[44px] md:leading-[92px] lg:leading-[164px] md:tracking-normal text-center md:flex md:justify-between mb-2 md:mb-4 lg:mb-[30px]">
            <span>YACHT</span> <span>APES</span>
          </h1>

          <p className="text-stone-900 font-biroScript leading-[27px] md:leading-[33px] lg:leading-10 mb-[6px] md:mb-[-30px] lg:ml-[120px] text-center md:text-start font-normal text-base md:text-xl lg:text-2xl">
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
            <div className="md:w-[190px] lg:w-[337px] flex flex-col md:flex-col-reverse gap-3 md:gap-4 lg:gap-7">
              <Link href="#contact">
                <Button variant="secondary" className="w-full relative -top-1">
                  Meet Apes
                </Button>
              </Link>

              <p className="text-stone-900 text-xs lg:text-base font-normal font-messinaSans uppercase leading-[14px] lg:leading-[19px] md:h-[56px] lg:h-auto text-center md:text-justify md:first-letter:ml-20">
                Yacht Ape is a collection of unique digital apes that you can
                own in NFT format
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
