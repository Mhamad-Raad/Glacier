import Image from 'next/image';

import BenifitItem from './BenifitItem';

import BenifitsData from '@/data/about/BenifitsData';

import VLine from '@/assets/about/VLine.png';

const BenifitList = () => {
  return (
    <div className="flex md:flex-row sm:flex-col lg:gap-[69px] md:py-[66px] md:px-[40px] mt-[25px] bg-gradient-to-br from-[#1588ff] to-[#cfeeff] rounded-[15px] z-10 md:gap-[50px] sm:py-[53px] sm:px-[51px] sm:gap-[30px]">
      <div className="flex flex-col gap-[50px] justify-between md:w-[50%]">
        <BenifitItem info={BenifitsData[0]} />
        <BenifitItem info={BenifitsData[1]} />
      </div>
      <Image
        src={VLine}
        alt=""
        className="md:w-[8px] md:h-[250px] sm:w-0 sm:h-0 lg:w-[13px] lg:h-[508px] lg:mt-[25px]"
      />
      <div className="flex flex-col justify-between sm:gap-[55px] md:w-[50%]">
        <BenifitItem info={BenifitsData[2]} />
      </div>
    </div>
  );
};

export default BenifitList;
