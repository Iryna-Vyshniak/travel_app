import { SOCIALS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

const Socials = () => {
  return (
    <div className='hidden h-full gap-8 xl:flexCenter'>
      <ul className='flexCenter gap-8'>
        {SOCIALS.links.map((link) => (
          <li key={link}>
            <Link
              href='/'
              key={link}
              className='flexCenter w-[28px] h-[28px] rounded-full bg-green-50 cursor-pointer transition-all hover:bg-yellow-50'
            >
              <Image src={link} alt='social link' width={16} height={16} />
            </Link>
          </li>
        ))}
      </ul>
      <ul className='flexCenter gap-8'>
        <li>
          <a
            href='mailto:info@ponte.com'
            lang='en'
            className='regular-12 flexCenter cursor-pointer pb-1.5 transition-all text-white hover:text-yellow-50'
          >
            info@ponte.com
          </a>
        </li>
        <li>
          <a
            href='tel:+080055526233'
            className='regular-12 flexCenter cursor-pointer pb-1.5 transition-all text-white hover:text-yellow-50'
          >
            +0 800 555 262 33
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
