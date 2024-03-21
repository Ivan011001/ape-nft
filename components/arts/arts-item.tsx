import Image from "next/image";

import { IArtsItem } from "@/types";

interface IArtsItemProps {
  item: IArtsItem;
}

const ArtsItem = ({ item }: IArtsItemProps) => {
  const { image } = item;

  return (
    <Image
      src={image}
      alt="Collection Ape"
      width={284}
      height={336}
      className="w-[216px] h-[256px] md:w-[284px] md:h-[336px] lg:w-[240px] lg:h-[280px] rounded-xl md:rounded-2xl lg:rounded-3xl"
    />
  );
};

export default ArtsItem;
