import Image from 'next/image';

import Logo from '@/assets/privacy/logo.png';

const Navigation = ({ position }) => {
  return (
    <section className="flex flex-col w-1/3 items-end hide-mobile">
      <Image alt="Glacier Logo" src={Logo} />
      <h2
        className={`lg:text-[20px] md:text-[16px] ${
          position < 300 ? 'text-[#2b3c40]' : 'text-[#00000080]'
        }  font-[600] tracking-[1px] mt-[73px]`}
      >
        1. Our Agreement
      </h2>
      <h2
        className={`lg:text-[20px] md:text-[16px] ${
          position < 600 && position > 300 ? 'text-[#2b3c40]' : 'text-[#00000080]'
        } text-right font-[600] tracking-[1px] mt-[41px]`}
      >
        2. Our Services
        <br /> & Paid Subscription
      </h2>
      <h2 className="xl:text-[24px] lg:text-[20px] text-[#00000080] font-[600] tracking-[1px] mt-[41px] md:text-[16px]">
        3. Terms of Glacier
      </h2>
      <h2 className="xl:text-[24px] lg:text-[20px] text-[#00000080] font-[600] tracking-[1px] mt-[41px] md:text-[16px]">
        4. Rights we Grant you
      </h2>
      <h2 className="xl:text-[24px] lg:text-[20px] text-[#00000080] font-[600] tracking-[1px] mt-[41px] md:text-[16px]">
        5. 3rd Party Application
      </h2>
      <h2 className="xl:text-[24px] lg:text-[20px] text-[#00000080] font-[600] tracking-[1px] mt-[41px] md:text-[16px]">
        6. Rights you grant us
      </h2>
    </section>
  );
};

export default Navigation;
