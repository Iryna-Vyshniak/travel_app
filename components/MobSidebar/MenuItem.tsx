'use client';

import { Variants, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { COLORS } from '@/constants/colors';

interface IProp {
  href: string;
  label: string;
  key: string;
  icon: string;
}

export const MenuItem = ({
  i: { key, href, icon, label },
  variants,
  onClick,
}: {
  i: IProp;
  onClick: () => void;
  variants: Variants;
}) => {
  const style = { border: `2px solid ${COLORS[parseInt(key)]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className='cursor-pointer list-none flexCenter mb-5'
    >
      <div className='w-[40px] h-[40px] rounded-full mr-2 flexCenter' style={style}>
        <Image src={icon} alt='icon `${i.href}`' width={22} height={22} loading='lazy' />
      </div>
      <Link
        href={href}
        onClick={onClick}
        className='relative regular-14 flexCenter cursor-pointer pb-1.5 text-green-90'
      >
        <span className='flexCenter w-[100px] h-[40px] p-4 text-green-90 text-base'>{label}</span>
      </Link>
    </motion.li>
  );
};
