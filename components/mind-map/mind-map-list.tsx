import MindMapCard from "./mind-map-card";
import MindMapButton from "./mind-map-button";

import { IMindMapItem } from "@/types";

interface IMindMapListProps {
  items: IMindMapItem[];
}

const MindMapList = ({ items }: IMindMapListProps) => {
  return (
    <ul
      className="grid md:grid-cols-[repeat(auto-fill,minmax(284px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(504px,1fr))] gap-x-6 gap-y-6"
      style={{ gridAutoFlow: "row" }}
    >
      {items.map((item, index) => (
        <li key={index}>
          <MindMapCard title={item.title} description={item.description} />
        </li>
      ))}

      <li>
        <MindMapButton />
      </li>
    </ul>
  );
};

export default MindMapList;
