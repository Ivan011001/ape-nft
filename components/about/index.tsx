import Image from "next/image";

import Section from "../ui/section";
import Feed from "./feed";

const About = () => {
  return (
    <>
      <Section>
        <div className="md:relative flex flex-col md:flex-row md:flex-wrap justify-between">
          <p className="md:w-[269px] lg:w-[538px] max-h-fit text-white font-black text-[40px] md:text-6xl lg:text-[120px] leading-10 md:leading-[60px] lg:leading-[120px] uppercase md:mt-[-8px] lg:mt-[-18px] mb-4 md:mb-[68px] lg:mb-14">
            A story that started with{" "}
            <span className="text-rose-500">
              one simple <br className="md:hidden" />
              ape
            </span>
          </p>

          <p className="md:w-[276px] lg:w-[409px] text-right font-messinaSans text-white text-base lg:text-2xl font-normal uppercase mb-9 md:mb-0">
            WHO GOT <br className="md:hidden" />
            FED UP WITH BORING AND HYPOCRITIC COMMONPLACE THIS IS HOW THE IDEA
            OF ESCAPING AND DYNAMIC JOURNEY ON THE
            <br className="hidden md:block" /> YACHT
          </p>

          <div className="md:w-[269px] lg:w-[417px] flex flex-col items-center justify-center gap-4 md:gap-6 mb-6 md:mb-9 lg:mb-10">
            <svg className="h-6 w-6 lg:h-9 lg:w-9 fill-white">
              <use xlinkHref="/icons/sprite.svg#icon-cross"></use>
            </svg>

            <p className="text-center font-messinaSans text-white text-base lg:text-2xl font-normal uppercase">
              EACH ARTWORK IN THE COLLECTION TELLS A STORY OF ONE JOURNEY. ARTS
              ARE RANDOMLY GENERATED BY USERS
            </p>
          </div>

          <Image
            src="/images/about.png"
            alt="Ape with glasses"
            width={492}
            height={662}
            className="md:absolute md:bottom-0 md:right-0 w-[216px] h-[292px] md:w-[313px] md:h-[422px] lg:w-[492px] lg:h-[662px]"
            priority
          />
        </div>
      </Section>

      <Feed />
    </>
  );
};

export default About;