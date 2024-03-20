'use client';

import { Link } from 'react-scroll';

import ArrowDown from '@/assets/icons/ArrowDown';
import SmallTouchDown from '@/assets/icons/smallScreen/SmallTouchDown';
import SmallArrowDown from '@/assets/icons/smallScreen/SmallArrowDown';

import useScreenSize from '@/CustomHooks/UseScreenSize';

export default function ScrollDownButton() {
  const { width } = useScreenSize();
  return (
    <>
      <Link
        type="button"
        to="about"
        ignoreCancelEvents={true}
        smooth={true}
        duration={750}
        className="xl:w-[80px] xl:h-[80px] md:w-[70px] md:h-[70px] rounded-[50%] border-[1px] border-black flex flex-col items-center justify-center md:gap-[10px] lg:mt-[200px] md:mt-[100px] sm:w-[40px] sm:h-[40px] sm:mt-[80px] sm:gap-[5px] z-[15]"
      >
        {width >= 1024 ? (
          <>
            <div className="xl:w-[20px] xl:h-[26px] md:w-[14px] md:h-[20px] border-[1px] border-black rounded-[42%] flex items-start justify-center">
              <div className="xl:w-[4px] xl:h-[6px] w-[2px] h-[4px] border-[1px] border-black mt-[2px]" />
            </div>
            <ArrowDown />
          </>
        ) : (
          <>
            <SmallTouchDown />
            <SmallArrowDown />
          </>
        )}
      </Link>
      <p className="text-[#2b3c40] xl:text-[18px] lg:text-[14px] tracking-[0.7px] font-medium mt-[13px] md:text-[12px] sm:text-[10px] sm:mt-[5px]">
        EXPLORE MORE
      </p>
    </>
  );
}
