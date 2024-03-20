import AboutItem from './AboutItem';

import aboutData from '@/data/about/AboutData';

const AboutList = () => {
  return (
    <div className="flex items-center justify-between lg:mt-[80px] md:mt-[52px] flex-wrap">
      {aboutData.map((item, index) => (
        <AboutItem key={index} title1={item.title1} title2={item.title2} description={item.description} />
      ))}
    </div>
  );
};

export default AboutList;
