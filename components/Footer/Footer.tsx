import Link from 'next/link';

import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants';
import FooterColumn from './FooterColumn';
import Logo from '../Logo';
import Socials from '../Socials';
import Contacts from '../Contacts';

const Footer = () => {
  return (
    <footer className='flexCenter mt-24'>
      <div className='padding-container max-container flexCenter w-full flex-col gap-14'>
        <div className='w-full h-[722px] bg-forest bg-contain bg-no-repeat' />
        <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row'>
          <Logo />

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title} key={columns.title}>
                <ul className='regular-14 flex flex-col gap-4 text-gray-30'>
                  {columns.links.map((link) => (
                    <Link href='/' key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className='flex flex-col gap-5'>
              <FooterColumn title={FOOTER_CONTACT_INFO.title} key={FOOTER_CONTACT_INFO.title}>
                <Contacts />
              </FooterColumn>
            </div>

            <FooterColumn title={SOCIALS.title} key={SOCIALS.title}>
              <Socials />
            </FooterColumn>
          </div>
        </div>

        <div className='border bg-gray-20' />
        <p className='regular-14 w-full text-center text-gray-30'>
          2023 PonteChianale | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
