const AboutItem = ({ title1, title2, description }) => {
  return (
    <div
      className="flex flex-col items-start justify-start xl:w-[362px] lg:w-[275px] md:w-[185px] sm:w-[156px] md:mt-0 sm:mt-[30px] lg:h-[160px] sm:h-[120px] md:h-[140px] xl:h-[240px]"
    >
      <h2 className="text-white xl:text-[58px] lg:text-[48px] font-bold lg:tracking-[2.4px] md:text-[26px] sm:tracking-[1.2px] sm:text-[24px] lg:leading-[40px]">
        {title1}
      </h2>
      <h3 className="text-white xl:text-[28px] font-bold lg:text-[20px] md:text-[14px] sm:text-[12px] lg:mt-[17px]">{title2}</h3>
      <p className="text-white xl:text-[22px] lg:text-[16px] md:text-[12px] sm:text-[10px]">{description}</p>
    </div>
  );
};

export default AboutItem;
