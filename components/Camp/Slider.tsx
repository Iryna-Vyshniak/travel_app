'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

import { CAMPSITES_DATA } from '@/constants';
import CampSite from './CampSite';

const Slider = () => {
  return (
    <div className='relative hide-scrollbar flex h-[420px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[520px] xl:h-[640px]'>
      <Swiper
        slidesPerView={'auto'}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className='mySwiper h-[420px] lg:h-[520px] xl:h-[640px] lg:rounded-r-5xl 2xl:rounded-5xl'
      >
        {CAMPSITES_DATA.map(({ id, backgroundImage, title, subtitle, peopleJoined }) => (
          <SwiperSlide
            key={id}
            className={`h-full w-full min-w-[1100px] lg:rounded-r-5xl 2xl:rounded-5xl`}
          >
            <CampSite
              key={id}
              backgroundImage={backgroundImage}
              title={title}
              subtitle={subtitle}
              peopleJoined={peopleJoined}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
