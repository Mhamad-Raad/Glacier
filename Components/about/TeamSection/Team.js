import TeamCarousal from './TeamCarousal';

const Team = () => {
  return (
    <section className="flex flex-col xl:px-[111px] md:px-[60px] md:mt-[148px] sm:px-[24px] sm:mt-[100px]">
      <div className="lg:w-[60%] md:w-[80%]">
        <div className="flex md:gap-[16px] items-center sm:gap-[10px]">
          <div className="md:h-[4px] xl:w-[94px] lg:w-[74px] bg-[#1588ff] rounded-lg md:w-[50px] sm:w-[23px] sm:h-[3px]" />
          <h2 className="xl:text-[24px] md:text-[18px] font-[700] text-[#2b3c40] sm:text-[10px]">Team Members</h2>
        </div>
        <h2 className="xl:text-[60px] lg:text-[48px] font-extrabold text-[#333] lg:tracking-[3.2px] mt-[10px] md:text-[32px] md:tracking-[1.6px] sm:text-[24px] sm:tracking-[1.2px]">
          Our Team
        </h2>
        <p className="mt-[20px] xl:text-[24px] sm:text-[8px] md:text-[18px]">
          Meet our team that consists of highly intelligent and high value leaders
        </p>
      </div>
      <div className="mt-[37px]">
        <TeamCarousal />
      </div>
    </section>
  );
};

export default Team;
