import { InfiniteMovingCards } from "./infinite-moving";

const FEED_ITEMS = [
  { content: "Have no limits" },
  {
    content: (
      <svg className="fill-white w-9 h-9">
        <use xlinkHref="/icons/sprite.svg#icon-cross"></use>
      </svg>
    ),
  },
  { content: "Destroy stereotypes" },
  {
    content: (
      <svg className="fill-white w-9 h-9">
        <use xlinkHref="/icons/sprite.svg#icon-cross"></use>
      </svg>
    ),
  },
  { content: "Break rules" },
  {
    content: (
      <svg className="fill-white w-9 h-9">
        <use xlinkHref="/icons/sprite.svg#icon-cross"></use>
      </svg>
    ),
  },
];

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
