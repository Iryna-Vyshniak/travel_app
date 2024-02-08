'use client';

import { Variants, motion } from 'framer-motion';
import Image from 'next/image';

import { MenuItem } from './MenuItem';
import { NAV_LINKS } from '@/data/data';

const variants: Variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variantsAnimation: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const Navigation = ({ onClick }: { onClick: () => void }) => {
  return (
    <motion.ul
      variants={variants}
      className='absolute top-[100px] right-0 flexCenter flex-col w-full p-4'
    >
      {NAV_LINKS.map((i) => (
        <MenuItem i={i} key={i.key} onClick={onClick} variants={variantsAnimation} />
      ))}
      <motion.li
        variants={variantsAnimation}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className='cursor-pointer list-none flexCenter mb-5'
      >
        <div className={`w-[40px] h-[40px] rounded-full mr-2 flexCenter border-2 border-[#84cc16]`}>
          <Image src='/services.svg' alt='icon contacts' width={22} height={22} loading='lazy' />
        </div>
        <a
          href='mailto:irinavn2011@gmail.com'
          className='relative regular-14 flexCenter cursor-pointer pb-1.5 text-green-90'
        >
          <span className='flexCenter w-[100px] h-[40px] p-4 text-green-90 text-base'>
            Contacts
          </span>
        </a>
      </motion.li>
    </motion.ul>
  );
};
