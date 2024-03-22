import Image from 'next/image';

import ScrollDownButton from './ScrollDownButton';

import Glacier from '@/assets/home/Glacier.png';

const HeroSection = () => {
  return (
    <section className="flex xl:h-[1000px] lg:h-[750px] justify-between relative overflow-hidden mt-[150px] md:h-[650px] sm:h-[325px]">
      <div className="flex flex-col w-full items-center mt-[-40px] h-full">
        <h1
          className="xl:text-[200px] lg:text-[160px] lg:tracking-[10px] font-bold text-[#1588ff] xl:mt-[220px] lg:mt-[125px] lg:leading-[150px] 
                      md:text-[120px] md:tracking[6.4px] md:leading-[100px] md:mt-[75px] sm:text-[56px] sm:mt-[25px] sm:leading-[75px]"
        >
          GLACIER
        </h1>
        <p className="xl:w-[55%] lg:w-[70%x] xl:text-[26px] lg:text-[20px] text-center text-black font-medium tracking-[0.9px] z-10 xl:mt-[50px] lg:mt-[25px] md:text-[15px] md:mt-[40px] md:w-[60%] sm:w-[65%] sm:text-[10px] sm:tracking-[0.5px] sm:mt-[5px]">
          A glacier is a large, perennial mass of ice that forms on land and moves under the influence of gravity.
        </p>
        <ScrollDownButton />
      </div>
      <div className="absolute xl:right-[-275px] xl:top-[140px] lg:right-[-250px] lg:top-[220px] md:top-[140px] md:right-[-150px] sm:right-[-60px] sm:bottom-[100px]">
        <div className="rounded-full xl:w-[518px] xl:h-[518px] lg:w-[424px] lg:h-[424px] border-2 border-[#42a9e433] flex justify-center items-center md:w-[282px] md:h-[282px] sm:w-[124px] sm:h-[124px]">
          <div className="rounded-full xl:w-[432px] xl:h-[432px] lg:w-[353px] lg:h-[353px] border-2 border-[#42a9e433] flex justify-center items-center md:w-[235px] md:h-[235px] sm:w-[103px] sm:h-[103px]">
            <div className="rounded-full xl:w-[354px] xl:h-[354px] lg:w-[290px] lg:h-[290px] border-2 border-[#42a9e433] md:w-[192px] md:h-[192px] sm:w-[84px] sm:h-[84px]" />
          </div>
        </div>
      </div>
      <div className="absolute xl:left-[-275px] xl:top-[140px] lg:left-[-250px] lg:top-[220px] md:top-[140px] md:left-[-150px] sm:left-[-60px] sm:bottom-[100px]">
        <div className="rounded-full  xl:w-[518px] xl:h-[518px] lg:w-[424px] lg:h-[424px] border-2 border-[#42a9e433] flex justify-center items-center md:w-[282px] md:h-[282px] sm:w-[124px] sm:h-[124px]">
          <div className="rounded-full xl:w-[432px] xl:h-[432px] lg:w-[353px] lg:h-[353px] border-2 border-[#42a9e433] flex justify-center items-center md:w-[235px] md:h-[235px] sm:w-[103px] sm:h-[103px]">
            <div className="rounded-full xl:w-[354px] xl:h-[354px] lg:w-[290px] lg:h-[290px] border-2 border-[#42a9e433] md:w-[192px] md:h-[192px] sm:w-[84px] sm:h-[84px]" />
          </div>
        </div>
      </div>
      <div className="w-[50%] lg:bottom-[50px] absolute lg:left-[-70px] md:bottom-[75px] md:left-[-40px] sm:left-[0] sm:w-[51%] sm:bottom-[0px]">
        <Image src={Glacier} alt="Glacier Image" className="scale-x-[-1]" />
      </div>
      <div className="w-[50%] lg:bottom-[50px] absolute lg:right-[-70px] md:bottom-[75px] md:right-[-40px] sm:right-[0px] sm:w-[51%] sm:bottom-[0px]">
        <Image src={Glacier} alt="Glacier Image" />
      </div>
    </section>
  );
};

export default HeroSection;
