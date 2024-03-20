'use client';

import { motion } from 'framer-motion';

import MobileNav from './MobileNav';
import useScreenSize from '@/CustomHooks/UseScreenSize';


const NavbarContent = ({ clickHandler }) => {
  const { width } = useScreenSize();

  return (
    <motion.div
      initial={{ opacity: 0, y: -150 }}
      animate={{ y: -100, opacity: 1 }}
      exit={{ opacity: 0, y: -150, duration: 10000 }}
      transition={{
        ease: 'linear',
        duration: 0.3,
      }}
      className={`w-full h-[102vh] absolute left-0 top-[125px] bg-white z-40 ${width <= 1024 ? 'pt-0' : 'pt-[50px]'}`}
    >
      <MobileNav clickHandler={clickHandler} />
    </motion.div>
  );
};

export default NavbarContent;
