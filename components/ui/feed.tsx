import { InfiniteMovingCards } from "./infinite-moving";

import { FEED_ITEMS } from "@/constants";

const Feed = () => {
  return (
    <div className="pt-[6px] pb-[9px] lg:pb-4 bg-accent">
      <InfiniteMovingCards
        items={FEED_ITEMS}
        direction="right"
        speed="fast"
        pauseOnHover={false}
      />
    </div>
  );
};

export default Feed;
