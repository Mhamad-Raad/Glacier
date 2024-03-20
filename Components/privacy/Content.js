'use client';

import { useRef, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import Image from 'next/image';

import PDFIcon from '@/assets/privacy/PDFIcon';

import { Paragraph1, Paragraph2 } from '@/data/privacy/ParagraphData';
import Navigation from './Navigation';

import Logo from '@/assets/terms/logo.png';

const Content = () => {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(0);

  const { scrollY } = useScroll({
    container: containerRef,
  });

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 0 && latest < 300) {
      if (position > 300) {
        setPosition(latest);
      }
    } else if (latest > 300 && latest < 650) {
      if (position > 650 || position < 300) setPosition(latest);
    }
  });

  return (
    <div className="flex justify-between gap-[74px]">
      <Navigation position={position} />
      <section className="flex flex-col w-full relative">
        <div className="flex justify-between items-center hide-mobile">
          <div className="flex flex-col">
            <h3 className="xl:text-[60px] lg:text-[48px] text-[#00000080] tracking-[2.4px] leading-[40px] md:text-[36px]">
              Glacier
            </h3>
            <h3 className="xl:text-[60px] lg:text-[48px] text-[#2b3c40] font-[600] tracking-[2.4px] leading-[40px] lg:mt-[25px] md:text-[36px] md:mt-[15px]">
              Terms of Service
            </h3>
          </div>
          <div className="flex flex-col items-end">
            <p className="xl:text-[22px] lg:text-[18px] font-[500] tracking-[0.9px] mt-[7px] md:text-[14px]">
              Last Updated: 26/8/2023
            </p>
            <button
              type="button"
              className="flex items-center gap-[18px] border-[2px] border-[#1588ff] bg-transparent rounded-[15px] py-[10px] px-[20px] mt-[35px]"
            >
              <PDFIcon />
              <p className="xl:text-[22px] lg:text-[18px] text-[#1588ff] font-[500] tracking-[0.9px] md:text-[14px]">
                Download as PDF
              </p>
            </button>
          </div>
        </div>
        <div className="hide-desktop flex flex-col gap-[24px]">
          <button
            type="button"
            className="flex items-center gap-[11px] border-[2px] border-[#1588ff] bg-transparent rounded-[15px] py-[13px] px-[15px] w-[151px]"
          >
            <PDFIcon />
            <p className="text-[10px] text-[#1588ff] font-[500]">Download as PDF</p>
          </button>
          <div className="flex items-center gap-[23px]">
            <Image alt="Glacier Logo" src={Logo} className="w-[40px] h-[60px]" />
            <div className="flex flex-col gap-[6px]">
              <h3 className="text-[#00000080] tracking-[1.2px] leading-[25px] text-[24px]">Glacier</h3>
              <h3 className="tracking-[1.2px] leading-[25px] text-[24px] text-[#2b3c40] font-[600]">Privacy Policy</h3>
            </div>
          </div>
          <p className="xl:text-[22px] lg:text-[18px] font-[500] tracking-[0.9px] mt-[7px] md:text-[14px]">
            Last Updated: 26/8/2023
          </p>
        </div>
        <div
          className="flex flex-col md:mt-[72px] md:pr-[50px] md:h-[600px] md:overflow-scroll md:special-scroll-bar sm:mt-[21px]"
          ref={containerRef}
        >
          <h2 className="xl:text-[24px] lg:text-[20px] sm:text-[14px] text-[#2b3c40] font-[600] tracking-[1px]">
            1. Our Agreement
          </h2>
          <p className="text-[#000000bf] tracking-[0.9px] md:mt-[31px] sm:mt-[14px] text-justify lg:text-[18px] md:text-[14px] xl:text-[21px] sm:text-[12px]">
            {Paragraph1}
          </p>
          <p className="text-[#000000bf] tracking-[0.9px] text-justify lg:text-[18px] md:text-[14px] xl:text-[21px] sm:text-[12px]">
            {Paragraph2}
          </p>
          <h2 className="xl:text-[24px] text-[20px] text-[#2b3c40] font-[600] tracking-[1px] mt-[31px] lg:text-[20px] sm:text-[14px]">
            2. Our Services & Paid Subscription
          </h2>
          <p className="text-[#000000bf] tracking-[0.9px] mt-[31px] text-justify lg:text-[18px] md:text-[14px] xl:text-[21px] sm:text-[12px]">
            {Paragraph1}
          </p>
          <p className="text-[#000000bf] tracking-[0.9px] text-justify lg:text-[18px] md:text-[14px] xl:text-[21px] sm:text-[12px]">
            {Paragraph2}
          </p>
        </div>
        <div className="md:w-full md:h-[200px] absolute bottom-[-5px] left-0 bg-gradient-to-b from-[#ffffff00] to-[#ffffffe6] z-10" />
      </section>
    </div>
  );
};

export default Content;
