import Section from "./ui/section";
import Title from "./ui/title";

import ArtsList from "./arts/arts-list";

import { ARTS_ITEMS } from "@/constants";

const Arts = () => {
  return (
    <Section>
      <Title className="mb-6 md:mb-10 lg:mb-20">Collection</Title>

      <ArtsList items={ARTS_ITEMS} />
    </Section>
  );
};

export default Arts;
