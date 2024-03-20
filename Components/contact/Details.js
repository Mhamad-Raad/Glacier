import Facebook from '@/assets/icons/Footer/Facebook';
import Twitter from '@/assets/icons/Footer/Twitter';
import Instagram from '@/assets/icons/Footer/Instagram';

import Logo from '@/assets/faq/Logo';

const Details = () => {
  return (
    <div className="bg-gradient-to-b from-[#1588ff] to-[#d9d9d900] sm:pt-[40px] md:pt-[52px] sm:pl-[35px] sm:pb-[100px] md:pl-[58px] rounded-[15px] flex flex-col relative xl:w-[704px] xl:h-[846px] md:w-[546px] md:h-[656px] sm:w-full">
      <h2 className="xl:text-[24px] lg:text-[20px] text-white font-bold md:text-[18px] sm:text-[14px]">Get in touch</h2>
      <p className="xl:text-[21px] md:text-[14px] text-white font-[500] mt-[10px] sm:text-[12px]">
        Let’s work together connect.
      </p>

      <h2 className="xl:text-[21px] text-[14px] text-white font-bold sm:mt-[23px] md:mt-[32px] sm:text-[14px]">Visit Us</h2>
      <p className="xl:text-[21px] lg:text-[14px] text-white font-[500] mt-[12px] sm:text-[12px]">
        Come say hello at our office HQ
      </p>
      <p className="xl:text-[21px] lg:text-[14px] text-white font-[500] mt-[12px] sm:text-[12px]">
        123 Main Street, Citytown, State Province
      </p>

      <h2 className="xl:text-[21px] text-[14px] text-white font-bold sm:mt-[23px] sm:text-[14px]">Chat to Us</h2>
      <p className="xl:text-[21px] lg:text-[14px] text-white font-[500] mt-[12px] sm:text-[12px]">
        Our friendly team is here to help.
      </p>
      <p className="xl:text-[21px] lg:text-[14px] text-white font-[500] mt-[12px] underline sm:text-[12px]">
        hello@glacier.com
      </p>

      <h2 className="xl:text-[21px] text-[14px] text-white font-bold sm:mt-[23px] sm:text-[14px]">Call us</h2>
      <p className="xl:text-[21px] lg:text-[14px] text-white font-[500] mt-[12px] sm:text-[12px]">
        Monday - Friday 8am - 5pm{' '}
      </p>
      <p className="xl:text-[21px] lg:text-[14px] text-white font-[500] mt-[12px] sm:text-[12px]">
        (+995) 555-55-55-55
      </p>

      <h2 className="xl:text-[21px] text-[14px] text-white font-bold sm:mt-[23px]">Social Media</h2>
      <div className="flex gap-[15px] mt-[12px]">
        <Facebook />
        <Twitter />
        <Instagram />
      </div>
      <Logo className="scale-x-[-1] absolute bottom-0 right-[25px]" contact={true}/>
    </div>
  );
};

export default Details;
