import Link from 'next/link';

import CloseButton from '@/assets/Layout/CloseIcon';
import SocialArrow from '@/assets/Layout/SocialArrow';

const MobileNav = ({ clickHandler }) => {
  return (
    <div className="md:pt-[45px] md:pl-[47px] sm:pt-[25px] sm:pl-[26px] flex flex-col items-between justify-between h-[90%]">
      <div className="flex flex-col">
        <div className="flex items-center justify-between pr-[25px]">
          <h2 className="md:text-[15px] sm:text-[10px] font-[500] md:tracking-[0.7px] uppercase">
            <span className="md:text-[15px] sm:text-[10px] font-[700] md:tracking-[0.7px] uppercase">Glacier</span>{' '}
            Capital Management
          </h2>
          <div className="flex items-center md:gap-[20px] sm:gap-[12px]">
            <h2 className="md:text-[20px] sm:text-[14px] font-[600]">Close</h2>
            <button type="button" onClick={clickHandler}>
              <CloseButton />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-[10px] mt-[50px]">
          <Link className="md:text-[64px] sm:text-[48px] text-[#2b3c40] font-[500]" href="/" onClick={clickHandler}>
            Home
          </Link>
          <Link
            className="md:text-[64px] sm:text-[48px] text-[#2b3c40] font-[500]"
            href="/about"
            onClick={clickHandler}
          >
            About Us
          </Link>
          <Link
            className="md:text-[64px] sm:text-[48px] text-[#2b3c40] font-[500]"
            href="/contact"
            onClick={clickHandler}
          >
            Contact Us
          </Link>
          <Link
            className="md:text-[64px] sm:text-[48px] text-[#2b3c40] font-[500]"
            href="/terms-and-services"
            onClick={clickHandler}
          >
            Terms & Services
          </Link>
          <Link
            className="md:text-[64px] sm:text-[48px] text-[#2b3c40] font-[500]"
            href="/privacy-policy"
            onClick={clickHandler}
          >
            Privacy Policy
          </Link>
          <Link
            className="md:text-[64px] sm:text-[48px] text-[#2b3c40] font-[500]"
            href="/faq"
            onClick={clickHandler}
          >
            FAQ
          </Link>
        </div>
      </div>

      <div className="flex items-end justify-between md:pr-[50px] sm:pr-[30px]">
        <h3 className="md:text-[20px] sm:text-[14px] text-[#2b3c40] font-[500]">contact@glacier.agency</h3>
        <div className="flex flex-col w-[110px] gap-[5px]">
          <a className="flex items-center justify-between" target="_blank">
            <p className="md:text-[20px] sm:text-[14px] text-[#2b3c40] font-[500]">Facebook</p>
            <SocialArrow />
          </a>
          <a className="flex items-center justify-between" target="_blank">
            <p className="md:text-[20px] sm:text-[14px] text-[#2b3c40] font-[500]">Twitter</p>
            <SocialArrow />
          </a>
          <a className="flex items-center justify-between" target="_blank">
            <p className="md:text-[20px] sm:text-[14px] text-[#2b3c40] font-[500]">Instagram</p>
            <SocialArrow />
          </a>
          <a className="flex items-center justify-between" target="_blank">
            <p className="md:text-[20px] sm:text-[14px] text-[#2b3c40] font-[500]">Linkedin</p>
            <SocialArrow />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
