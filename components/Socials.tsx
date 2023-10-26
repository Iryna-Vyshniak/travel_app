import { SOCIALS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  text?: string;
};

const Socials = ({ text }: Props) => {
  return (
    <ul className={text ? 'hidden 2xl:flexCenter gap-8' : 'flexCenter gap-5'}>
      {SOCIALS.links.map((link) => (
        <li key={link}>
          <Link
            href='/'
            key={link}
            className={
              text
                ? 'bg-transparent flexCenter w-[28px] h-[28px] rounded-full cursor-pointer hover:bg-green-60/30 shadow-lg shadow-green-90 hover:shadow-md transition-all ease-in-out duration-200'
                : 'bg-green-60 flexCenter w-[28px] h-[28px] rounded-full cursor-pointer hover:bg-green-60/30 shadow-lg shadow-green-90 hover:shadow-md transition-all ease-in-out duration-200'
            }
          >
            <Image
              src={link}
              alt='social link'
              width={16}
              height={16}
              loading='lazy'
              className='hover:fill-[#021902]'
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
