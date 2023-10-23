import Image from 'next/image';
import Slider from './Slider';
import Title from '../Title/Title';

const Gallery = () => {
  return (
    <section className='relative 2xl:max-container flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <Slider />

      <div className='lg:absolute lg:bottom-[-10rem] lg:right-5 z-10 flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6 mb-20 md:mb-40'>
        <div className='bg-white/30 backdrop-blur-mds p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl'>
          <Title text='Feeling Lost And Not Knowing The Way?' />
          <p className='regular-14 xl:regular-16 mt-5 text-gray-90'>
            Starting from the anxiety of the climbers when visiting a new climbing location, the
            possibility of getting lost is very large. That's why we are here for those of you who
            want to start an adventure
          </p>
          <Image src='/quote.svg' alt='camp-2' width={186} height={219} className='camp-quote' />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
