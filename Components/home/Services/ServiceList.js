import ServiceItem from './ServiceItem';

import servicesData from '@/data/home/services';

const ServiceList = () => {
  return (
    <div className="flex items center md:justify-between w-full sm:flex-wrap sm:mt-[18px] sm:justify-start sm:gap-[35px]">
      {servicesData.map((item, index) => {
        return <ServiceItem key={index} number={index+1} service={item} />;
      })}
    </div>
  );
};

export default ServiceList;
