import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DesktopNav = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-end lg:gap-[50px] w-full">
      <Link
        className={`xl:text-[20px] lg:text-[16px] md:text-[14px] text-[#2b3c40] font-[600] ${
          pathname === '/' ? 'pb-[5px] border-b-[2px] border-[#fed630]' : ''
        }`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`xl:text-[20px] lg:text-[16px] md:text-[14px] text-[#2b3c40] font-[600] ${
          pathname === '/about' ? 'pb-[5px] border-b-[2px] border-[#fed630]' : ''
        }`}
        href="/about"
      >
        About Us
      </Link>
      <Link
        className={`xl:text-[20px] lg:text-[16px] md:text-[14px] text-[#2b3c40] font-[600] ${
          pathname === '/contact' ? 'pb-[5px] border-b-[2px] border-[#fed630]' : ''
        }`}
        href="/contact"
      >
        Contact
      </Link>
      <Link
        className={`xl:text-[20px] lg:text-[16px] md:text-[14px] text-[#2b3c40] font-[600] ${
          pathname === '/faq' ? 'pb-[5px] border-b-[2px] border-[#fed630]' : ''
        }`}
        href="/faq"
      >
        FAQ
      </Link>
      <Link
        className={`xl:text-[20px] lg:text-[16px] md:text-[14px] text-[#2b3c40] font-[600] ${
          pathname === '/terms-and-services' ? 'pb-[5px] border-b-[2px] border-[#fed630]' : ''
        }`}
        href="/terms-and-services"
      >
        Terms of Service
      </Link>
      <Link
        className={`xl:text-[20px] lg:text-[16px] md:text-[14px] text-[#2b3c40] font-[600]  ${
          pathname === '/privacy-policy' ? 'pb-[5px] border-b-[2px] border-[#fed630]' : ''
        }`}
        href="/privacy-policy"
      >
        Privacy Policy
      </Link>
    </div>
  );
};

export default DesktopNav;
