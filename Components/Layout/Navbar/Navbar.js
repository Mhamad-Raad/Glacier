'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';
import DesktopNav from './DesktopNav';

import useScreenSize from '@/CustomHooks/UseScreenSize';

import NavIcon from '../../../assets/icons/Navbar/NavIcon';
import Link from 'next/link';

import NavbarContent from './NavbarContent';
import Logo from '../../../assets/Logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { width } = useScreenSize();

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'scroll';
    return () => (document.body.style.overflow = 'scroll');
  });

  return (
    <nav className="w-full z-20 md:px-[25px] md:py-[15px] sm:px-[24px] sm:py-[26px] fixed top-0 bg-white">
      <div className="flex items-center justify-between gap-[18px] w-full">
        <div className="h-[75px] flex justify-between items-center bg-transparent">
          <Link className="text-[24px] text-[#2b3c40] font-[500]" href="/">
            <div className="flex items-center gap-[18px]">
              <Image alt="Glacier Logo" title="Glacier Logo" src={Logo} className="w-[52px] h-[66px]" />
              <div className="flex flex-col">
                <h3 className="text-[17px] font-bold tracking-[0.9px] uppercase text-black ">Glacier</h3>
                <h3 className="text-[17px] font-bold tracking-[0.9px] uppercase text-black leading-[15px]">Capital</h3>
              </div>
            </div>
          </Link>
        </div>
        {width >= 1024 ? (
          <DesktopNav />
        ) : (
          <div className="flex items-center space-x-4">
            <button type="button" className="cursor-pointer" onClick={handleMenuClick}>
              <NavIcon />
            </button>
          </div>
        )}
      </div>
      <AnimatePresence>{isMenuOpen && <NavbarContent clickHandler={handleMenuClick} />}</AnimatePresence>
    </nav>
  );
};

export default Navbar;
