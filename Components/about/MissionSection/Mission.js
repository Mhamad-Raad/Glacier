import MissionItem from './MissionItem';

const Mission = () => {
  return (
    <section className="flex md:flex-row sm:flex-col sm:items-center md:justify-between md:items-start xl:px-[111px] md:px-[60px] sm:px-[24px] md:mt-[193px] sm:mt-[50px]">
      <div className="lg:w-[61%] md:w-[75%]">
        <div className="flex md:gap-[16px] items-center sm:gap-[10px]">
          <div className="md:h-[4px] xl:w-[94px] lg:w-[74px] bg-[#1588ff] rounded-lg md:w-[51px] sm:w-[23px] sm:h-[3px]" />
          <h2 className="xl:text-[28px] md:text-[18px] font-[700] text-[#2b3c40] sm:text-[10px]">Our Mission</h2>
        </div>
        <h2 className="xl:text-[58px] lg:text-[48px] font-extrabold text-[#333] md:tracking-[3.2px] mt-[10px] md:text-[32px] sm:text-[20px] sm:tracking-[1px]">
          Navigating Digital Wealth with Glacier Capital
        </h2>
        <p className="xl:text-[24px] lg:text-[20px] mt-[20px] xl:w-[80%] md:w-[86%] md:text-[15px] sm:text-[10px] sm:w-full">
          Glacier Capital's mission is to lead the way in digital asset management through innovation, security, and
          client-centric solutions. We are dedicated to pioneering new approaches, ensuring the highest standards of
          security and compliance, and tailoring strategies to meet the unique goals of each client. Our global
          perspective, combined with local expertise, allows us to provide comprehensive solutions for both local and
          global markets.
        </p>
      </div>

      <div className="relative md:mt-0 sm:mt-[75px]">
        <MissionItem
          position="xl:top-[25px] lg:top-[20px] md:left-[-40px] md:top-[20px] sm:top-[10px] sm:left-[-20px]"
          title="Innovation"
        />
        <MissionItem
          position="xl:top-[325px] lg:top-[260px] md:left-[-40px] md:top-[182px] sm:top-[146px] sm:left-[-20px]"
          title="Personalization"
        />
        <MissionItem
          position="xl:top-[-100px] lg:top-[-90px] lg:right-[-20px] md:top-[-50px] md:right-[-10px] sm:right-[-20px] sm:top-[-50px]"
          title="Compliance"
        />
        <MissionItem
          position="xl:top-[210px] lg:top-[150px] lg:right-[-20px] md:top-[110px] md:right-[-10px] sm:right-[-20px] sm:top-[86px]"
          title="Global 
Insight"
        />
        <div className="rounded-full xl:w-[507px] xl:h-[507px] lg:w-[394px] lg:h-[394px] border-2 border-[#42a9e433] flex justify-center items-center md:w-[266px] md:h-[266px] sm:w-[227px] sm:h-[227px]">
          <div className="rounded-full xl:w-[430px] xl:h-[430px] lg:w-[334px] lg:h-[334px] border-2 border-[#42a9e433] flex justify-center items-center md:w-[225px] md:h-[225px] sm:w-[193px] sm:h-[193px]">
            <div className="rounded-full xl:w-[348px] xl:h-[348px] lg:w-[270px] lg:h-[270px] border-2 border-[#42a9e433] md:w-[183px] md:h-[183px] sm:w-[153px] sm:h-[153px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
