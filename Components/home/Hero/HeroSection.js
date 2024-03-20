import Image from 'next/image';

import ScrollDownButton from './ScrollDownButton';

import Glacier from '@/assets/home/Glacier.png';

const HeroSection = () => {
  return (
    <section className="flex xl:h-[1000px] lg:h-[850px] justify-between relative overflow-hidden mt-[150px] md:h-[650px] sm:h-[475px]">
      <div className="flex flex-col w-full items-center mt-[-40px] h-full">
        <h1
          className="xl:text-[260px] lg:text-[200px] lg:tracking-[10px] font-bold text-[#1588ff] xl:mt-[220px] lg:mt-[170px] lg:leading-[150px] 
                      md:text-[142px] md:tracking[6.4px] md:leading-[100px] md:mt-[150px] sm:text-[80px] sm:mt-[75px] sm:leading-[75px]"
        >
          GLACIER
        </h1>
        <p className="xl:w-[1000px] lg:w-[816px] xl:text-[26px] lg:text-[20px] text-center text-black font-medium tracking-[0.9px] z-10 xl:mt-[50px] lg:mt-[44px] md:text-[15px] md:mt-[32px] md:w-[50%] sm:w-[90%] sm:text-[10px] sm:tracking-[0.5px] sm:mt-[12px]">
          Exploring Financial Horizons: Glacier Capital expertise in wealth preservation and enhancement in the digital
          asset space
        </p>
        <ScrollDownButton />
      </div>
      <div className="absolute xl:right-[-275px] xl:top-[60px] lg:right-[-250px] lg:top-[50px] md:top-[40px] md:right-[-150px] sm:right-[-60px] sm:bottom-[165px]">
        <div className="rounded-full xl:w-[518px] xl:h-[518px] lg:w-[424px] lg:h-[424px] border-2 border-[#42a9e433] flex justify-center items-center md:w-[282px] md:h-[282px] sm:w-[124px] sm:h-[124px]">
          <div className="rounded-full xl:w-[432px] xl:h-[432px] lg:w-[353px] lg:h-[353px] border-2 border-[#42a9e433] flex justify-center items-center md:w-[235px] md:h-[235px] sm:w-[103px] sm:h-[103px]">
            <div className="rounded-full xl:w-[354px] xl:h-[354px] lg:w-[290px] lg:h-[290px] border-2 border-[#42a9e433] md:w-[192px] md:h-[192px] sm:w-[84px] sm:h-[84px]" />
          </div>
        </div>
      </div>
      <div className="absolute xl:left-[-275px] xl:top-[60px] lg:left-[-250px] lg:top-[50px] md:top-[40px] md:left-[-150px] sm:left-[-60px] sm:bottom-[165px]">
        <div className="rounded-full  xl:w-[518px] xl:h-[518px] lg:w-[424px] lg:h-[424px] border-2 border-[#42a9e433] flex justify-center items-center md:w-[282px] md:h-[282px] sm:w-[124px] sm:h-[124px]">
          <div className="rounded-full xl:w-[432px] xl:h-[432px] lg:w-[353px] lg:h-[353px] border-2 border-[#42a9e433] flex justify-center items-center md:w-[235px] md:h-[235px] sm:w-[103px] sm:h-[103px]">
            <div className="rounded-full xl:w-[354px] xl:h-[354px] lg:w-[290px] lg:h-[290px] border-2 border-[#42a9e433] md:w-[192px] md:h-[192px] sm:w-[84px] sm:h-[84px]" />
          </div>
        </div>
      </div>
      <div className="w-[50%] lg:top-[75px] absolute lg:left-[-70px] md:top-[50px] md:left-[-40px] sm:left-[0] sm:w-[51%] sm:bottom-[50px]">
        <Image src={Glacier} alt="Glacier Image" className="scale-x-[-1]" />
      </div>
      <div className="w-[50%] xl:right-[-150px] lg:top-[75px] absolute lg:right-[-70px] md:top-[50px] md:right-[-40px] sm:right-[0px] sm:w-[51%] sm:bottom-[50px]">
        <Image src={Glacier} alt="Glacier Image" />
      </div>
    </section>
  );
};

export default HeroSection;
