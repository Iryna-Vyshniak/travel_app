'use client';
import { motion } from 'framer-motion';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NAV_LINKS } from '@/data/data';

const Nav = () => {
  const path = usePathname();

  return (
    <ul className='hidden h-full gap-8 lg:flex'>
      {NAV_LINKS.map(({ href, key, label }) => (
        <li key={key}>
          <Link
            href={href}
            className='relative regular-14 flexCenter cursor-pointer pb-1.5 text-white hover:font-bold hover:text-green-70 hover:drop-shadow-[0_1px_0.5px_rgba(0,0,0,1)] transition-all ease-in-out duration-200'
          >
            {href === path && (
              <motion.span
                layoutId='underline'
                className='absolute left-0 top-full block h-[0.0625rem] w-full bg-white'
              ></motion.span>
            )}

            {label}
          </Link>
        </li>
      ))}
      <li>
        <a
          href='mailto:irinavn2011@gmail.com'
          className='relative regular-14 flexCenter cursor-pointer pb-1.5 text-white hover:font-bold hover:text-green-70 hover:drop-shadow-[0_1px_0.5px_rgba(0,0,0,1)] transition-all ease-in-out duration-200'
        >
          Contacts
        </a>
      </li>
    </ul>
  );
};

export default Nav;
