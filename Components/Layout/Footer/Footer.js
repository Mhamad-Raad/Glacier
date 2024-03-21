import Link from 'next/link';
import Image from 'next/image';

import Facebook from '@/assets/icons/Footer/Facebook';
import Twitter from '@/assets/icons/Footer/Twitter';
import Instagram from '@/assets/icons/Footer/Instagram';

import Logo from '@/assets/Layout/Logo.png';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-start mt-[75px] md:px-[74px] md:pt-[42px] md:pb-[25px] bg-[#1588ff] w-full z-10 relative sm:px-[16px] sm:pt-[29px] sm:pb-[11px] overflow-hidden">
      <div className="flex justify-between md:items-center w-full gap-[10px] sm:items-start">
        <div className="flex sm:flex-col md:flex-row">
          <div className="flex flex-col">
            <h1 className="xl:text-[86px] lg:text-[80px] lg:tracking-[6.4px] text-white font-[800] md:leading-[60px] md:text-[64px] md:tracking-[3.2px] sm:text-[32px] sm:tracking-[1.6px] sm:leading-[30px]">
              GLACIER
            </h1>
            <p className="text-white font-[500] max-w-[400px] text-left xl:text-[18px] md:text-[12px] xl:max-w-[600px] sm:text-[8px] sm:mt-[7px]">
              At Glacier, our mission is to empower businesses and individuals
            </p>
          </div>
          <div className="flex sm:mt-[19px] sm:gap-[25px] md:ml-[55px]">
            <div className="flex flex-col lg:gap-[10px] md:gap-[6px] md:max-w-[300px]">
              <h3 className="text-white font-[500] md:text-[14px] xl:text-[24px] sm:text-[10px]">OUR CONTACTS</h3>
              <p className="text-white xl:text-[20px] md:text-[12px] sm:text-[10px]">Email: hamaraad883@gmail.com</p>
              <p className="text-white xl:text-[20px] md:text-[12px] sm:text-[10px]">
                Address: Remote, Kurdistan, Sulaimaniyah
              </p>
              <p className="text-white xl:text-[20px] md:text-[12px] sm:text-[10px]">Phone: (+964) 770 184 4913</p>
              <div className="flex gap-[15px] sm:mt-[9px]">
                <Facebook />
                <Twitter />
                <Instagram />
              </div>
            </div>
            <div className="flex flex-col lg:gap-[10px] md:gap-[6px] font-black">
              <h3 className="text-white font-[500] xl:text-[24px] md:text-[14px] sm:text-[10px] lg:text-[18px]">
                Links
              </h3>
              <Link href="/" className="text-white xl:text-[20px] lg:text-[16px] md:text-[14px] sm:text-[10px]">
                Home
              </Link>
              <Link href="/about" className="text-white xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[10px]">
                About Us
              </Link>
              <Link href="/faq" className="text-white xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[10px]">
                FAQ
              </Link>
              <Link href="/contact" className="text-white xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[10px]">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center bg-white xl:w-[225px] xl:h-[225px] lg:w-[200px] lg:h-[200px] rounded-full md:w-[104px] md:h-[104px] sm:w-[60px] sm:h-[60px]">
            <Image
              alt=""
              className="lg:w-2/3 lg:h-2/3 md:w-[70%] md:h-[70%] xl:w-[75%] xl:h-[75%] sm:w-[60%] sm:h-[60%]"
              src={Logo}
            />
          </div>
        </div>
      </div>
      <div className="w-full md:mt-[50px] sm:mt-[20px]">
        <p className="border-t-2 border-white text-white text-center xl:text-[20px] text-[16px] font-[500] md:pt-[15px] sm:pt-[10px] sm:text-[8px]">
          This site and all its content is a property of GLACIER.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
