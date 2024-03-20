'use client';

import { Link } from 'react-scroll';

import { FaArrowDown } from 'react-icons/fa';



export default function ScrollDownButton() {
  return (
    <>
      <Link
        type="button"
        to="about"
        ignoreCancelEvents={true}
        smooth={true}
        duration={750}
        offset={-128}
        className="xl:w-[80px] xl:h-[80px] lg:w-[60px] lg:h-[50px] md:w-[50px] md:h-[50px] rounded-[50%] border-[1px] border-black flex flex-col items-center justify-center lg:mt-[100px] md:mt-[100px] sm:w-[40px] sm:h-[40px] sm:mt-[60px] sm:gap-[5px] z-[15] animate-bounce"
      >
        <FaArrowDown className="lg:text-[20px]" />
      </Link>
      <p className="text-[#2b3c40] xl:text-[18px] lg:text-[15px] tracking-[0.7px] font-medium mt-[13px] md:text-[12px] sm:text-[10px] sm:mt-[5px]">
        EXPLORE MORE
      </p>
    </>
  );
}
