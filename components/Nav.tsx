import { NAV_LINKS } from '@/constants';
import Link from 'next/link';

const Nav = () => {
  return (
    <ul className='hidden h-full gap-8 lg:flex'>
      {NAV_LINKS.map(({ href, key, label }) => (
        <li key={key}>
          <Link
            href={href}
            className='regular-14 flexCenter cursor-pointer pb-1.5 text-white hover:font-bold hover:text-green-50 hover:drop-shadow-[0_1px_0.5px_rgba(0,0,0,1)] transition-all ease-in-out duration-200'
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
