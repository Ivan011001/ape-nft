import { InfiniteMovingCards } from "../ui/infinite-moving";

import { FEED_ITEMS } from "@/constants";

const Feed = () => {
  return (
    <div className="pt-[6px] pb-[9px] lg:pb-4 bg-rose-500">
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
