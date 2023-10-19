import { SOCIALS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

const Socials = () => {
  return (
    <div className='hidden h-full gap-8 xl:flexCenter'>
      <ul className='hidden 2xl:flexCenter gap-8'>
        {SOCIALS.links.map((link) => (
          <li key={link}>
            <Link
              href='/'
              key={link}
              className='flexCenter w-[28px] h-[28px] rounded-full cursor-pointer text-white hover:bg-green-60 hover:text-green-50 shadow-lg shadow-green-90 hover:shadow-md transition-all ease-in-out duration-200'
            >
              <Image
                src={link}
                alt='social link'
                width={16}
                height={16}
                className='hover:fill-[#021902]'
              />
            </Link>
          </li>
        ))}
      </ul>
      <ul className='flexCenter gap-8'>
        <li>
          <a
            href='mailto:info@ponte.com'
            lang='en'
            className='regular-14 flexCenter cursor-pointer pb-1.5 text-white hover:font-bold hover:text-green-50 hover:drop-shadow-[0_1px_0.5px_rgba(0,0,0,1)] transition-all ease-in-out duration-200'
          >
            info@ponte.com
          </a>
        </li>
        <li>
          <a
            href='tel:+080055526233'
            className='regular-14 flexCenter cursor-pointer pb-1.5 text-white hover:font-bold hover:text-green-50 hover:drop-shadow-[0_1px_0.5px_rgba(0,0,0,1)] transition-all ease-in-out duration-200'
          >
            +0 800 555 262 33
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
