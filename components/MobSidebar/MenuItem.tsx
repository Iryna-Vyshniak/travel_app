'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { COLORS } from '@/constants/colors';

interface IProp {
  href: string;
  label: string;
  key: string;
  icon: string;
}

const variants = {
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

export const MenuItem = ({ i }: { i: IProp }) => {
  const style = { border: `2px solid ${COLORS[parseInt(i.key)]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className='cursor-pointer list-none flexCenter mb-5'
    >
      <Link
        href={i.href}
        className='relative regular-14 flexCenter cursor-pointer pb-1.5 text-white'
      >
        <div className='w-[40px] h-[40px] rounded-full mr-5 flexCenter' style={style}>
          <Image src={i.icon} alt='icon `${i.href}`' width={22} height={22} loading='lazy' />
        </div>
        <div
          className='flexCenter w-[200px] h-[40px] p-4 rounded-md text-green-90 text-base'
          style={style}
        >
          {i.label}
        </div>
      </Link>
    </motion.li>
  );
};
