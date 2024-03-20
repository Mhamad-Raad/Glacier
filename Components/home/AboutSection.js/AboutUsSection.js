import Image from 'next/image';

import Scratch from '@/assets/home/Scratch.png';

import ReadmoreButton from './ReadmoreButton';

const AboutUsSection = () => {
  return (
    <section
      className="relative overflow-hidden bg-[#1588ff] w-full flex flex-col lg:py-[111px] justify-center items-center md:py-[78px] sm:py-[32px]"
      id="about"
    >
      <Image
        src={Scratch}
        alt=""
        className="w-full lg:h-3/4 absolute lg:bottom-[100px] left-[10px] md:bottom-0 md:h-[65%]"
      />
      <Image
        src={Scratch}
        alt=""
        className="w-full lg:h-3/4 absolute lg:bottom-[100px] left-[50px] md:bottom-0 md:h-[65%]"
      />
      <div className="flex justify-center items-center lg:gap-[22px] w-full md:gap-[12px] sm:gap-[10px]">
        <div className="xl:w-[99px] xl:h-[6px] lg:w-[74px] h-[4px] bg-white rounded-lg md:w-[43px] sm:w-[23px] sm:h-[2px]" />
        <h2 className="text-white font-bold xl:text-[32px] lg:text-[24px] md:text-[12px] sm:text-[10px] ">ABOUT US</h2>
        <div className="xl:w-[99px] xl:h-[6px] lg:w-[74px] h-[4px] bg-white rounded-lg md:w-[43px] sm:w-[23px] sm:h-[2px]" />
      </div>
      <h2 className="xl:text-[78px] lg:text-[64px] text-white font-extrabold lg:tracking-[3.2px] lg:mt-[34px] md:text-[36px] md:tracking-[1.8px] md:mt-[19px] sm:text-[24px] sm:tracking-[1.2px] sm:mt-[11px]">
        KNOW WHO WE ARE
      </h2>
      <p className="xl:text-[30px] lg:text-[24px] text-white text-center xl:w-[1000px] lg:w-[80%] font-Poppins mt-[30px] md:text-[14px] md:w-[53%] md:mt-[25px] sm:text-[10px] sm:w-[75%] sm:mt-[11px]">
        We are a team of passionate people whose goal is to improve everyone's life through disruptive products. We build
      </p>
      <ReadmoreButton />
    </section>
  );
};

export default AboutUsSection;
