import AboutList from './AboutList';

import Underline from '@/assets/about/Underline';

const AboutUs = () => {
  return (
    <section className="lg:mt-[185px] xl:px-[111px] md:px-[60px] xl:py-[90px] py-[75px] flex flex-col items-center bg-[#1588ff] md:mt-[125px] sm:mt-[80px] sm:px-[20px]">
      <div className='flex flex-col items-end justify-center'>
        <h2 className="xl:text-[60px] md:text-[32px] text-center font-extrabold text-white md:tracking-[3.2px] sm:text-[18px] sm:tracking-[1.2px] flex">
          We do things differently
        </h2>
          <Underline className="xl:w-[360px] md:w-[230px] sm:w-[120px]"/>
      </div>
      <AboutList />
    </section>
  );
};

export default AboutUs;
