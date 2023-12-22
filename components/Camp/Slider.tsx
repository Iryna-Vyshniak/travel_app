'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

import CampSite from './CampSite';
import { CAMPSITES_DATA } from '@/data/data';

const Slider = () => {
  return (
    <div className='relative hide-scrollbar flex h-[420px] w-full flexCenter gap-8 overflow-x-auto lg:h-[520px] xl:h-[640px] rounded-2xl lg:rounded-5xl shadow-lg shadow-orange-950'>
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
        className='mySwiper w-full h-[420px] lg:h-[520px] xl:h-[640px] rounded-2xl lg:rounded-5xl'
      >
        {CAMPSITES_DATA.map(({ id, backgroundImage, title, subtitle, peopleJoined }, idx) => (
          <SwiperSlide key={id} className={`h-full w-full rounded-2xl lg:rounded-5xl`}>
            <CampSite
              idx={idx}
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
