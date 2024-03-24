import Section from "./ui/section";
import Title from "./ui/title";

import MindMapList from "./mind-map/mind-map-list";
import MindMapSlider from "./mind-map/mind-map-slider";

import { MIND_MAP_ITEMS } from "@/constants";

const MindMap = () => {
  return (
    <Section id="mind-map">
      <Title className="mb-6 md:mb-10 lg:mb-20">Mind Map</Title>

      <div className="md:hidden w-full flex items-center justify-center">
        <MindMapSlider items={MIND_MAP_ITEMS} />
      </div>

      <div className="hidden md:block">
        <MindMapList items={MIND_MAP_ITEMS} />
      </div>
    </Section>
  );
};

export default MindMap;
