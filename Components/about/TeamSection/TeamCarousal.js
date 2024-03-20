'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import TeamMemeber from './TeamMemeber';

import TeamData from '@/data/about/TeamMembers';
import useScreenSize from '@/CustomHooks/UseScreenSize';

import 'swiper/css/pagination';
import 'swiper/css';

const TeamCarousal = () => {
  const { width } = useScreenSize();

  return (
    <Swiper
      className="mySwiper special"
      slidesPerView={width < 1024 ? 2 : 3}
      loop={true}
      spaceBetween={width < 1024 ? 15 : 30}
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      centeredSlides={width < 1024 ? false : true}
      pagination={true}
    >
      {TeamData.map((person, index) => (
        <SwiperSlide key={index}>
          <TeamMemeber person={person} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TeamCarousal;
