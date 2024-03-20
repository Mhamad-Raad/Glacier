import AboutList from './AboutList';

import Underline from '@/assets/about/Underline';

const AboutUs = () => {
  return (
    <section className="lg:mt-[185px] xl:px-[111px] md:px-[60px] xl:py-[90px] py-[75px] flex flex-col bg-[#1588ff] md:mt-[125px] sm:mt-[80px] sm:px-[40px]">
      <div className="flex flex-col justify-center items-center">
        <h2 className="xl:text-[60px] md:text-[48px] text-center font-extrabold text-white md:tracking-[3.2px] sm:text-[24px] sm:tracking-[1.2px]">
          We do things{' '}
          <span className="relative xl:text-[60px] md:text-[48px] text-center font-extrabold text-white md:tracking-[3.2px] sm:text-[24px] sm:tracking-[1.2px]">
            differently
            <div className="xl:ml-[63%] ml-[60%]">
              <Underline className="md:ml-[-33px] sm:ml-[-8px]" />
            </div>
          </span>
        </h2>
      </div>
      <AboutList />
    </section>
  );
};

export default AboutUs;
