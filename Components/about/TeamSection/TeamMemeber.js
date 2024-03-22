const TeamMemeber = ({ person }) => {
  return (
    <div className="xl:w-[375px] xl:h-[600px] lg:w-[275px] lg:h-[450px] relative rounded-[20px] flex flex-col justify-end items-center bg-gradient-to-b from-[#7cbdff] to-[#cfeeff] mb-[80px] md:w-[278px] md:h-[407px] sm:h-[271px]">
      <div className="bg-white md:rounded-[20px] sm:rounded-[12px] xl:w-[350px] xl:h-[127px] lg:w-[250px] lg:h-[98px] flex flex-col xl:py-[18px] lg:py-[22px] absolute md:bottom-[34px] md:w-[222px] md:py-[17px] sm:w-[149px] sm:py-[8px] sm:bottom-[17px]">
        <h2 className="xl:text-[30px] lg:text-[22px] text-[#2b3c40] text-center font-extrabold tracking-[1.2px] md:text-[16px] sm:text-[12px]">
          {person.fullName}
        </h2>
        <h3 className="xl:text-[24px] text-[20px] text-[#2b3c40] text-center font-medium md:tracking-[1px] md:text-[14px] sm:text-[12px] sm:tracking-[0.6px]">
          {person.position}
        </h3>
      </div>
      <img className="w-full h-[90%] object-contain" src={person.img} alt={`${person.img}'s image`} />
    </div>
  );
};

export default TeamMemeber;
