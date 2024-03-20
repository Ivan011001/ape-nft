import Pagination from "./ui/pagination";
import Section from "./ui/section";
import Title from "./ui/title";

const CARDS = [
  {
    title: "Yape Drop",
    description:
      "All owners of APE NFTs and all future collections will receive a percentage of sales based on the number of NFTs they own",
  },

  {
    title: "New Collection",
    description:
      "Launch of the 2nd YACHT Collection Releasing the first version of the Ape Slam Game",
  },

  {
    title: "Token",
    description:
      "Launch your own token, the proceeds of which will go to a global fund to LAUNCH YACHT CLUB AND PROMOTE it",
  },
];

const MindMap = () => {
  return (
    <Section>
      <div className="mb-6 md:mb-10 lg:mb-20">
        <Title>Mind Map</Title>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(284px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(504px,1fr))] gap-x-6 gap-y-6"
        style={{ gridAutoFlow: "row" }}
      >
        {CARDS.map((card, index) => (
          <div
            key={index}
            className="w-[216px] h-[242px] md:w-[284px] lg:w-[504px] lg:h-[480px] px-3 py-6 md:px-6 bg-stone-900 rounded-xl md:rounded-2xl lg:rounded-3xl flex flex-col justify-between"
          >
            <div className="md:flex justify-end">
              <p className="md:w-32 lg:w-[256px] text-white text-xs lg:text-2xl font-normal font-messinaSans uppercase leading-[14px] lg:leading-[29px] float-right">
                {card.description}
              </p>
            </div>

            <h3 className="text-white text-[32px] lg:text-[64px] font-black uppercase leading-[32px] lg:leading-[64px]">
              {card.title}
            </h3>
          </div>
        ))}

        <button className="w-[216px] h-[242px] md:w-[284px] lg:w-[504px] lg:h-[480px] px-3 py-6 md:px-6 bg-rose-500 rounded-xl md:rounded-2xl lg:rounded-3xl flex flex-col justify-between items-start text-start">
          <svg className="w-12 h-12 lg:w-16 lg:h-16 self-end">
            <use xlinkHref="/icons/sprite.svg#icon-up-left"></use>
          </svg>

          <h3 className="text-white text-[32px] lg:text-[64px] font-black uppercase leading-[32px] lg:leading-[64px]">
            Learn <br className="hidden lg:block" />
            more <br className="hidden lg:block" />
            in mind map
          </h3>
        </button>
      </div>

      <div className="md:hidden">
        <Pagination />
      </div>
    </Section>
  );
};

export default MindMap;
