import React from 'react';
import HeroTitle from './HeroTitle';

const Hero = () => {
  return (
    <div className='relative top-0 left-0 w-full min-h-screen flex flex-col items-center justify-center text-center py-0 z-0'>
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden bg-cover bg-fixed bg-center bg-no-repeat bg-hero'>
        <div className='absolute bottom-0 left-0 overflow-hidden transform translate-y-0 scale-400 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-preserve-3d z-2 w-full mix-blend-screen mt-[-40vw] inline-block'>
          <video
            className={`w-full h-full object-cover border-none`}
            src='https://ik.imagekit.io/irinavn2011/clouds.mp4?updatedAt=1697803523507'
            autoPlay
            muted
            loop
          ></video>
        </div>
      </div>
      <div className='absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center space-y-8 max-w-md w-full h-auto'>
        <HeroTitle />
      </div>
    </div>
  );
};

export default Hero;
