import BenifitList from '@/Components/about/Benifits/BenifitList';

import Logo from '@/assets/about/Logo';

const Benifits = () => {
  return (
    <section className="flex flex-col relative mt-[100px] xl:px-[111px] md:px-[60px] sm:px-[24px] mb-[100px]">
      <h2 className="xl:text-[60px] lg:text-[48px] text-[#2b3c40] font-[600] md:text-[37px] sm:text-[24px]">
        Benefits of our services
      </h2>
      <p className="xl:text-[24px] lg:text-[20px] md:text-[14px] sm:text-[12px]">
        Explore How Glacier services Empower Positive Change
      </p>
      <Logo className="absolute top-[-90px] right-[60px] z-0 sm:w-0" />
      <BenifitList />
    </section>
  );
};

export default Benifits;
