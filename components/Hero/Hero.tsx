'use client';
import React, { useEffect, useState } from 'react';
import HeroTitle from './HeroTitle';
import Container from '../Container';

const Hero = () => {
  // const [topValue, setTopValue] = useState('55%');
  // const [screenHeight, setScreenHeight] = useState(
  //   typeof window !== 'undefined' ? window.innerHeight : 0
  // );

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const handleResize = () => {
  //       setScreenHeight(window.innerHeight);
  //     };

  //     window.addEventListener('resize', handleResize);

  //     return () => {
  //       window.removeEventListener('resize', handleResize);
  //     };
  //   }
  // }, []);

  // useEffect(() => {
  //   if (screenHeight < 900) {
  //     setTopValue('60%');
  //   } else {
  //     setTopValue('55%');
  //   }
  // }, [screenHeight]);

  // const containerClassName = `absolute top-[${topValue}] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center space-y-8 max-w-md w-full h-auto`;
  const containerClassName = `absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center space-y-8 max-w-md w-full h-auto`;

  return (
    <Container variant='relative top-0 left-0 w-full min-h-screen flex flex-col items-center justify-center text-center z-0'>
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
      <div className={containerClassName}>
        <HeroTitle />
      </div>
    </Container>
  );
};

export default Hero;
