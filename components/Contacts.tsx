import { FOOTER_CONTACT_INFO } from '@/constants';
import Link from 'next/link';

type Props = {
  text?: string;
};

const Contacts = ({ text }: Props) => {
  return (
    <ul className={text ? 'flexCenter gap-8' : 'flex flex-col gap-5'}>
      {FOOTER_CONTACT_INFO.links.map((link) => (
        <Link href={link.href} key={link.label} className='flex gap-4 md:flex-col lg:flex-row'>
          {text ? (
            <p className='regular-14 flexCenter cursor-pointer pb-1.5 text-white hover:font-bold hover:text-green-50 hover:drop-shadow-[0_1px_0.5px_rgba(0,0,0,1)] transition-all ease-in-out duration-200'>
              {link.value}
            </p>
          ) : (
            <>
              <p className='whitespace-nowrap'>{link.label}:</p>
              <p className='medium-14 whitespace-nowrap text-blue-70'>{link.value}</p>
            </>
          )}
        </Link>
      ))}
    </ul>
  );
};

export default Contacts;
