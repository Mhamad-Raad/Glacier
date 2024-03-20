import Image from 'next/image';

import Ice from '@/assets/home/Ice.png';

const ServiceItem = ({number, service}) => {
  return (
    <div className="relative flex flex-col items-start justify-start lg:max-w-[280px] md:max-w-[165px] sm:max-w-[160px]">
      <div className="relative flex flex-col">
        <h2 className="lg:ml-[40px] lg:text-[90px] font-extrabold text-[#2b3c40] z-10 md:text-[48px] md:ml-[30px] sm:text-[36px] sm:ml-[10px]">
          {number}
        </h2>
        <Image
          src={Ice}
          alt=""
          className="z-0 lg:mt-[-55px] xl:w-[128px] xl:h-[70px] lg:w-[123px] lg:h-[66px] md:w-[85px] md:h-[40px] md:mt-[-30px] sm:w-[42px] sm:h-[30px] sm:mt-[-23px]"
        />
      </div>
      <h2
        className="xl:text-[24px] lg:text-[20px] font-[800] tracking-[1px] lg:leading-5 text-[#2b3c40] lg:mt-[33px] md:mt-[23px] md:text-[14px] md:tracking-[0.7px] md:leading-3
      sm:text-[13px] sm:mt-[10px]"
      >
        {service.title}
      </h2>
      <p className="xl:text-[16px] lg:text-[14px] text-[#2b3c40] mt-[10px] md:text-[12px] sm:text-[12px] sm:mt-[2px] md:mt-[8px]">
        {service.desc}
      </p>
    </div>
  );
};

export default ServiceItem;
