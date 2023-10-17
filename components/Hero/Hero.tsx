import React from 'react';
import HeroTitle from './HeroTitle';

const Hero = () => {
  return (
    <section className='relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3 z-0 bg-neutral'>
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
        <video
          className={`w-full min-h-full object-cover`}
          src='https://ik.imagekit.io/lfg3p2t8y/pexels_videos_4097%20(1080p).mp4?updatedAt=1697572866503'
          autoPlay
          muted
          loop
        ></video>
      </div>

      <div className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center space-y-8 max-w-md w-full h-[727px]'>
        <HeroTitle />
      </div>
    </section>
  );
};

export default Hero;
