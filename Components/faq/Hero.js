import Logo from '@/assets/faq/Logo';

import SearchIcon from '@/assets/faq/SearchIcon';

const Hero = () => {
  return (
    <section className="relative flex items-start justify-between bg-[#1588ff] xl:pt-[80px] xl:pb-[112px] pt-[39px] pb-[49px]">
      <Logo contact={false} />
      <div className="flex flex-col items-center mt-[11px]">
        <div className="flex justify-center items-center gap-[23px] w-full">
          <div className="xl:w-[91px] lg:w-[74px] sm:h-[3px] md:h-[4px] bg-white rounded-lg sm:w-[39px]" />
          <h2 className="text-white font-bold xl:text-[30px] lg:text-[24px] md:text-[14px] sm:text-[12px]">FAQ</h2>
          <div className="xl:w-[91px] lg:w-[74px] sm:h-[3px] md:h-[4px] bg-white rounded-lg sm:w-[39px]" />
        </div>
        <h2 className="xl:text-[72px] lg:text-[64px] text-white font-bold md:leading-[75px] sm:leading-[30px] lg:mt-[10px] md:text-[36px] sm:text-[24px] md:mt-[4px] sm:mt-2">
          Help Center
        </h2>
        <p className="text-white xl:text-[24px] lg:text-[18px] tracking-[0.9px] md:mt-[10px] md:text-[14px] sm:text-[12px] sm:text-center sm:mt-1">
          Everything you need to know about Glacier
        </p>
        <div className="flex items-center sm:justify-center md:justify-start bg-white rounded-[15px] md:pl-[26px] md:py-[13px] sm:gap-[12px] md:gap-[22px] md:mt-[33px] sm:mt-[17px] xl:w-[590px] lg:w-[460px] md:w-[328px] sm:w-[191px] sm:h-[34px] md:h-[47px]">
          <SearchIcon className="mt-[2px]" />
          <input placeHolder="Search Here" className='sm:w-[100px] sm:text-[14px] md: text-[18px]'/>
        </div>
      </div>
      <Logo className="scale-x-[-1]" contact={false} />
    </section>
  );
};

export default Hero;
