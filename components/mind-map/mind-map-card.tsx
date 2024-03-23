interface IMindMapCardProps {
  title: string;
  description: string;
}

const MindMapCard = ({ title, description }: IMindMapCardProps) => (
  <div className="w-[216px] h-[242px] md:w-[284px] lg:w-[504px] lg:h-[480px] px-3 py-6 md:px-6 bg-stone-900 rounded-xl md:rounded-2xl lg:rounded-3xl flex flex-col justify-between">
    <div className="md:flex justify-end">
      <p className="md:w-32 lg:w-[256px] text-primary text-xs lg:text-2xl font-normal font-messinaSans uppercase leading-[14px] lg:leading-[29px]">
        {description}
      </p>
    </div>
    <h3 className="text-primary text-[32px] lg:text-[64px] font-black uppercase leading-[32px] lg:leading-[64px]">
      {title}
    </h3>
  </div>
);

export default MindMapCard;
