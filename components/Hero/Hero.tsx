'use client';
import Link from 'next/link';
import HeroTitle from './HeroTitle';

const Hero = () => {
  return (
    <>
      <div className='absolute bottom-0 left-0 overflow-hidden z-2 w-full mix-blend-screen mt-[-50vw]'>
        <video
          className={`w-full h-full object-cover border-none`}
          src='https://ik.imagekit.io/irinavn2011/clouds.mp4?updatedAt=1697803523507'
          autoPlay
          muted
          loop
        ></video>
      </div>

      <div className='absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center space-y-8 max-w-md w-full'>
        <HeroTitle />
        <Link
          href='/discover'
          className='w-[200px] h-10 text-white text-base bg-gradient-to-br to-green-60 via-green-90 from-green-80 bg-size-200 hover:bg-gradient-to-tl cursor-pointer rounded-tl-2xl rounded-br-2xl border-green-50 px-8 py-2 shadow-lg hover:shadow-md shadow-green-90 transition-all duration-500 ease-linear'
        >
          Discover more
        </Link>
      </div>
    </>
  );
};

export default Hero;
