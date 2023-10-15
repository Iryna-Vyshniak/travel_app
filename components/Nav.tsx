import { NAV_LINKS } from '@/constants';
import Link from 'next/link';

const Nav = () => {
  return (
    <ul className='hidden h-full gap-8 lg:flex'>
      {NAV_LINKS.map(({ href, key, label }) => (
        <li key={key}>
          <Link
            href={href}
            className='regular-12 flexCenter cursor-pointer pb-1.5 transition-all text-white hover:text-yellow-50'
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
