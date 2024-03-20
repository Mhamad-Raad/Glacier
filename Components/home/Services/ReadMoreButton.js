'use client';

import { HiArrowNarrowRight } from 'react-icons/hi';

const ReadMoreButton = () => {
  return (
    <button
      type="button"
      className="lg:text-[20px] flex lg:gap-[20px] mt-[31px] items-center lg:py-[15px] lg:px-[31px] md:bg-[#1588ff] md:text-white font-semibold rounded-[10px] 
          md:py-[12px] md:px-[19px] md:gap-[13px] md:text-[12px] sm:mt-[10px] sm:bg-white sm:text-[#1588ff] sm:border-[#1588ff] sm:border-2 -[#1588ff] sm:text-[10px] sm:p-[9px] 
          sm:gap-[6px]"
    >
      Learn More
      <HiArrowNarrowRight className="md:text-[32px]" />
    </button>
  );
};

export default ReadMoreButton;
