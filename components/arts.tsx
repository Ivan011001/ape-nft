import Image from "next/image";

import Pagination from "./ui/pagination";
import Section from "./ui/section";
import Title from "./ui/title";

const Arts = () => {
  return (
    <Section>
      <div className="mb-6 md:mb-10 lg:mb-20">
        <Title>Collection</Title>
      </div>

      <div className="flex flex-col items-center gap-y-6 lg:gap-y-12">
        <ul className="flex items-center gap-x-6">
          <li>
            <Image
              src="/images/art/ape-2.jpg"
              alt="Collection Ape"
              width={284}
              height={336}
              className="w-[216px] h-[256px] md:w-[284px] md:h-[336px] lg:w-[240px] lg:h-[280px] rounded-xl md:rounded-2xl lg:rounded-3xl"
            />
          </li>
        </ul>

        <Pagination />
      </div>
    </Section>
  );
};

export default Arts;
