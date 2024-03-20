const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-center text-white text-[44px] md:text-[80px] lg:text-[160px] font-black uppercase leading-10 md:leading-[80px] lg:leading-[160px]">
      {children}
    </h2>
  );
};

export default Title;
