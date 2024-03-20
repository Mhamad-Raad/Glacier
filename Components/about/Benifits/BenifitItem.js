const BenifitItem = ({ info }) => {
  return (
    <div className="flex gap-[15px]">
      <div className="rounded-full lg:w-[30px] lg:h-[30px] bg-white flex items-center justify-center xl:mt-[7px] mt-[4px] md:w-[21px] md:h-[21px] sm:w-[18px] sm:h-[18px]">
        <div className="rounded-full lg:w-[30px] lg:h-[30px] bg-white flex items-center justify-center md:w-[21px] md:h-[21px] sm:w-[18px] sm:h-[18px]">
          <div className="rounded-full lg:w-[20px] lg:h-[20px] bg-[#369Aff] md:w-[13px] md:h-[13px] sm:w-[12px] sm:h-[12px]" />
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="xl:text-[28px] lg:text-[24px] text-white font-bold sm:text-[14px]">{info.title}</h2>
        <p className="text-white font-medium sm:text-[11px] lg:text-[17px] xl:text-[20px]">{info.description}</p>
      </div>
    </div>
  );
};

export default BenifitItem;
