'use client';

import ArrowRight from '@/assets/icons/ArrowRight';

import useScreenSize from '@/CustomHooks/UseScreenSize';

const ReadmoreButton = () => {
  const { width } = useScreenSize();
  return (
    <>
    {width >= 1024 && <button
        type="button"
        className="flex xl:text-[22px] lg:text-[20px] lg:gap-[20px] mt-[50px] items-center lg:py-[15px] lg:px-[31px] bg-white text-[#2b3c40] font-semibold rounded-[10px] md:text-[12px] md:gap-[13px] md:py-[12px] md:px-[19px]"
        >
        Learn More
        <ArrowRight color="#2B3C40" className="" />
      </button>}
        </>
  )
}

export default ReadmoreButton