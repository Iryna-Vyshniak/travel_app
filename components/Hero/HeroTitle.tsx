'use client';
import { motion } from 'framer-motion';
import MainTitle from '../../ui/Title/MainTitle';

const HeroTitle = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
      className='before:fixed  before:top-[22%] before-left-[50%] before:-translate-x-1/2 before:-translate-y-1/2 before:z-[-1] before:content-ponteM md:before:content-ponteT lg:before:content-ponteD  before:drop-shadow-[0_1px_0.5px_rgba(0,0,20,1)] before:opacity-50'
    >
      <MainTitle text='Unisciti all’avventura!' />
      <div className='mt-6 py-6'>
        <p className='text-[26px] md:text-[42px] text-white font-black text-center drop-shadow-[0_1px_0.5px_rgba(0,0,20,1)]'>
          Welcome to
          <span className='ml-2 bg-clip-text text-transparent bg-gradient-to-r from-green-100 via-green-80 to-green-70 drop-shadow-[0_1px_0.5px_rgba(255,255,255,1)]'>
            PonteChianale
          </span>
          !
        </p>
        <p className='text-[26px] md:text-[32px] text-green-70 font-black text-center drop-shadow-[0_1px_0.5px_rgba(0,0,20,1)]'>
          Jump right in and explore our many campgrounds!
        </p>
      </div>
    </motion.div>
  );
};

export default HeroTitle;
