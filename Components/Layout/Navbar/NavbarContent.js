'use client';

import { motion } from 'framer-motion';

import MobileNav from './MobileNav';

const NavbarContent = ({ clickHandler }) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: -250 }}
      animate={{ y: -125, opacity: 1 }}
      exit={{ opacity: 0, y: -250, duration: 10000 }}
      transition={{
        ease: 'linear',
        duration: 0.3,
      }}
      className='w-full h-[102vh] absolute left-0 top-[125px] bg-white z-40'
    >
      <MobileNav clickHandler={clickHandler} />
    </motion.div>
  );
};

export default NavbarContent;
