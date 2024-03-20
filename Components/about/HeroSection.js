import Image from 'next/image';

import Hero from '@/assets/about/Hero.png';
import TitleUnderline from '@/assets/about/TitleUnderline';

const HeroSection = () => {
  return (
    <section className="xl:px-[111px] md:px-[60px] sm:pl-[24px] sm:pr-[10px] mt-[180px] relative flex items-center justify-between ">
      <div className="absolute xl:left-[-260px] lg:left-[-220px] md:top-[100px] md:left-[-140px] sm:top-[30px] sm:left-[-105px]">
        <div className="rounded-full xl:w-[574px] xl:h-[574px] lg:w-[448px] lg:h-[448px] border-2 border-[#42a9e433] flex justify-center items-center md:w-[304px] md:h-[304px] sm:w-[178px] sm:h-[178px]">
          <div className="rounded-full xl:w-[479px] xl:h-[479px] lg:w-[374px] lg:h-[374px] border-2 border-[#42a9e433] flex justify-center items-center md:w-[254px] md:h-[254px] sm:w-[148px] sm:h-[148px]">
            <div className="rounded-full xl:w-[393px] xl:h-[393px] lg:w-[306px] lg:h-[306px] border-2 border-[#42a9e433] md:w-[208px] md:h-[208px] sm:w-[122px] sm:h-[122px]" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:w-[55%] sm:w-[205px]">
        <div className="w-full">
          <h1 className="text-[#1588ff] xl:text-[200px] lg:text-[128px] font-extrabold lg:tracking-[2px] lg:leading-[100px] text-left md:text-[96px] md:tracking-[1px] xl:leading-[160px] md:leading-[70px] sm:text-[32px] sm:tracking-[1.6px] sm:leading-[30px]">
            We are
          </h1>
          <h1 className="text-[#1588ff] xl:text-[200px] lg:text-[128px] font-extrabold lg:tracking-[2px] lg:leading-[100px] md:text-center md:text-[96px] xl:ml-[150px] md:ml-[50px] md:tracking-[1px] md:leading-[70px] xl:leading-[160px] sm:text-[32px] sm:tracking-[1.6px] sm:leading-[30px] sm:text-left sm:ml-[40px]">
            Glacier.
          </h1>
          <TitleUnderline className="lg:ml-[-10px] xl:ml-[290px] md:ml-[-60px] sm:ml-[-45px]" />
        </div>
        <p className="lg:mt-[87px] xl:text-[28px] lg:text-[20px] md:text-[14px] md:mt-[40px] sm:mt-[23px] sm:text-[10px]">
          Glacier Capital, based in Dubai, is a leading force in digital asset management. Founded in 2023, we quickly
          became crypto asset management leaders, driven by innovation, integrity, and transparency. We operate under
          Dubai's strict Virtual Assets Regulatory Authority (VARA) oversight, holding VARA's pre-approval, a testament
          to our commitment to compliance. Our goal is clear: to unlock digital economy opportunities for our clients,
          guided by our belief in the transformative potential of cryptocurrencies and blockchain technology.
        </p>
      </div>
      <div className="xl:w-[524px] xl:h-[600px] lg:w-[408px] lg:h-[453px] relative bg-gradient-to-br from-[#1588ff] to-[#cfeeff] md:rounded-tr-[175px] md:rounded-bl-[175px] md:mr-[31px] md:h-[400px] md:w-[350px] sm:w-[150px] sm:h-[160px] sm:rounded-tr-[60px] sm:rounded-bl-[60px] sm:mr-[20px] lg:mt-[-125px] xl:mt-[-250px]">
        <Image
          src={Hero}
          className="absolute md:w-full md:h-full md:rounded-tr-[175px] md:rounded-bl-[175px] md:bottom-[28px] md:left-[31px] sm:w-[150px] sm:h-[160px] sm:rounded-tr-[60px] sm:rounded-bl-[60px] sm:left-[20px] sm:bottom-[18px]"
          alt=""
        />
      </div>
    </section>
  );
};

export default HeroSection;
