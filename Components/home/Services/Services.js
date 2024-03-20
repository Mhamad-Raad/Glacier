import ReadMoreButton from './ReadMoreButton';
import ServicesList from './ServiceList';

const Services = () => {
  return (
    <section className="mt-[90px] flex flex-col xl:px-[111px] lg:px-[60px] lg:gap-[60px] md:px-[64px] md:gap-[45px] sm:px-[24px] sm:mt-[67px]">
      <div className="flex justify-between items-center sm:items-start">
        <div className="flex flex-col sm:w-[52%]">
          <div className="flex gap-[20px] items-center sm:gap-[9px]">
            <div className="h-[4px] xl:w-[87px] lg:w-[67px] bg-[#1588FF] rounded-lg md:w-[38px] sm:w-[23px] sm:h-[3px]" />
            <h2 className="xl:text-[22px] lg:text-[18px] font-[700] text-[#2b3c40] md:text-[12px] sm:text-[10px]">
              OUR SERVICES
            </h2>
          </div>
          <h2 className="xl:text-[60px] lg:text-[48px] font-extrabold text-[#333] lg:tracking-[3.2px] mt-[21px] md:text-[36px] md:tracking-[1.8px] sm:tracking-[1.2px] 
          sm:text-[24px] sm:mt-[15px]">
            WHAT WE DO
          </h2>
          <p className="xl:text-[24px] lg:text-[20px] mt-[5px] md:text-[12px] sm:mt-[5px] sm:text-[10px] sm:w-full">
            At Glacier, our mission is to empower businesses and individuals
          </p>
        </div>
        <ReadMoreButton />
      </div>
      <ServicesList />
    </section>
  );
};

export default Services;
