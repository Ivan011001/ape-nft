const ContactDescription = () => {
  return (
    <div className="flex flex-col items-center gap-y-4 md:gap-y-6">
      <svg className="w-9 h-9 fill-white">
        <use xlinkHref="/icons/sprite.svg#icon-cross"></use>
      </svg>
      <p className="md:w-[397px] lg:w-[581px] text-center text-white text-base lg:text-2xl font-normal font-messinaSans uppercase leading-[19px] lg:leading-[29px]">
        Join the YACHT APE community to be one of the first to receive our
        limited edition NFT
      </p>
    </div>
  );
};

export default ContactDescription;
