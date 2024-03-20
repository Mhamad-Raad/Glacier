'use client';

import { HiArrowNarrowRight } from 'react-icons/hi';

const ReadmoreButton = () => {
  return (
        <button
          type="button"
          className="flex xl:text-[22px] lg:text-[20px] lg:gap-[20px] gap-[10px] text-[10px] md:mt-[50px] sm:mt-[25px] justify-center items-center lg:py-[15px] lg:px-[31px] sm:px-[16px] sm:py-[6px] bg-white text-[#2b3c40] font-semibold rounded-[10px] md:text-[16px] md:gap-[13px] md:py-[12px] md:px-[19px]"
        >
          Learn More
          <HiArrowNarrowRight className="md:text-[32px]" />
        </button>
  );
}

export default ReadmoreButton