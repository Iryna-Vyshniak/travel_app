'use client';
import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';
import { NAV_LINKS } from '@/constants';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ onClick }: { onClick: () => void }) => (
  <motion.ul
    variants={variants}
    className='absolute top-[100px] right-0 flexCenter flex-col w-full p-4'
  >
    {NAV_LINKS.map((i) => (
      <MenuItem i={i} key={i.key} onClick={onClick} />
    ))}
  </motion.ul>
);
