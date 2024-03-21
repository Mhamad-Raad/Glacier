import Link from 'next/link';

import CloseButton from '@/assets/Layout/CloseIcon';
import SocialArrow from '@/assets/Layout/SocialArrow';

const MobileNav = ({ clickHandler }) => {
  return (
    <div className="md:pt-[45px] sm:pt-[25px] sm:p-[20px] flex flex-col items-between justify-between h-[90%]">
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <h2 className="md:text-[15px] sm:text-[10px] font-[500] md:tracking-[0.7px] uppercase">
            <span className="md:text-[15px] sm:text-[10px] font-[700] md:tracking-[0.7px] uppercase">Glacier</span>{' '}
            Capital Management
          </h2>
            <button type="button" onClick={clickHandler}>
              <CloseButton />
            </button>
        </div>
        <div className="flex flex-col gap-[10px] mt-[50px]">
          <Link className="md:text-[64px] sm:text-[32px] text-[#2b3c40] font-[500]" href="/" onClick={clickHandler}>
            Home
          </Link>
          <Link
            className="md:text-[64px] sm:text-[32px] text-[#2b3c40] font-[500]"
            href="/about"
            onClick={clickHandler}
          >
            About Us
          </Link>
          <Link
            className="md:text-[64px] sm:text-[32px] text-[#2b3c40] font-[500]"
            href="/contact"
            onClick={clickHandler}
          >
            Contact Us
          </Link>
          <Link
            className="md:text-[64px] sm:text-[32px] text-[#2b3c40] font-[500]"
            href="/terms-and-services"
            onClick={clickHandler}
          >
            Terms & Services
          </Link>
          <Link
            className="md:text-[64px] sm:text-[32px] text-[#2b3c40] font-[500]"
            href="/privacy-policy"
            onClick={clickHandler}
          >
            Privacy Policy
          </Link>
          <Link
            className="md:text-[64px] sm:text-[32px] text-[#2b3c40] font-[500]"
            href="/faq"
            onClick={clickHandler}
          >
            FAQ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
