'use client';
import Image from 'next/image';
import { ABOUT } from '@/constants';
import Container from '../Container';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export const popup = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.1,
    },
  },
  exit: {
    opacity: 0,
  },
};

const About = () => {
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [showDescription, setShowDescription] = useState<{ [key: string]: boolean }>({});

  const toggleShow = (id: string) => {
    // Якщо попап вже відкритий і натискається на той самий => close
    if (activePopup === id) {
      setActivePopup(null);
      setShowDescription((prevState) => ({ ...prevState, [id]: false }));
    } else {
      // Якщо натискається новий попап, close old and open new
      setActivePopup(id);
      setShowDescription({ [id]: true });
    }
  };

  return (
    <Container>
      <div className='flexCenter flex-col xl:justify-between xl:flex-row gap-x-5'>
        <ul className='relative flexCenter flex-wrap gap-4'>
          {ABOUT.map(({ label, id, name }) => (
            <li
              key={id}
              className='flexCenter flex-col gap-2 px-6 pt-10 pb-8 w-60 h-[12.5rem] group relative cursor-pointer overflow-hidden p-2 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:max-w-xs sm:rounded-lg sm:px-10 hover-[14rem]'
              onClick={() => toggleShow(id)}
            >
              <span className='absolute top-10 z-0 h-20 w-20 rounded-full ring-1 ring-gray-900/5 bg-gray-5 transition-all duration-300 group-hover:scale-[10]'></span>
              <div className='relative w-[4.5rem] h-[4.5rem]'>
                <Image
                  src={label}
                  alt='name'
                  sizes='64px'
                  loading='lazy'
                  fill
                  className='object-contain'
                />
              </div>
              <div className='relative grow'>
                <h3 className='max-w-full uppercase text-base text-gray-30'>{name}</h3>
                <button
                  onClick={() => toggleShow(id)}
                  type='button'
                  className='opacity-0 group-hover:opacity-100 text-green-80'
                >
                  Click to read more
                </button>
              </div>
            </li>
          ))}
        </ul>

        {ABOUT.map(
          ({ id, description }) =>
            showDescription[id] && (
              <AnimatePresence key={`popup-${id}`}>
                <motion.div
                  variants={popup}
                  initial={'initial'}
                  animate={'animate'}
                  exit={'exit'}
                  onClick={() => toggleShow(id)}
                  className='absolute top-5 md:-bottom-[2] right-5 z-30 p-5 rounded-md bg-gray-5 text-gray-30 shadow-2xl shadow-slate-400 backdrop-blur-mdx'
                >
                  <p>{description}</p>
                </motion.div>
              </AnimatePresence>
            )
        )}
      </div>
    </Container>
  );
};

export default About;
