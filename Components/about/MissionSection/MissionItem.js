const MissionItem = ({ position, title }) => {
  return (
    <div
      className={`xl:w-[269px] xl:h-[269px] lg:w-[209px] lg:h-[209px] px-[20px] bg-gradient-to-br from-[#1588ff] to-[#42a9e480] rounded-[15px] absolute flex ${position} justify-center items-center leading-6 md:w-[142px] md:h-[142px] sm:w-[122px] sm:h-[122px]`}
    >
      <h1 className="text-white xl:text-[32px] lg:text-[24px] text-center font-bold lg:tracking-[1.2px] md:text-[18px] md:tracking-[0.7px] xl:leading-[40px] md:leading-[20px] sm:leading-[18px]">
        {title}
      </h1>
    </div>
  );
};

export default MissionItem;
