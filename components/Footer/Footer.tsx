import Link from 'next/link';

import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants';
import FooterColumn from './FooterColumn';
import Logo from '../Header/Logo';
import Socials from '../Socials';
import Contacts from '../Contacts';
import Container from '../Container';

const Footer = () => {
  return (
    <footer className='w-screen overflow-hidden bg-cover bg-fixed bg-center bg-no-repeat bg-activity'>
      <Container variant='padding-container max-container flexCenter w-full flex-col gap-2 py-8'>
        <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row py-2'>
          <Logo />

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title} key={columns.title}>
                <ul className='regular-14 flex flex-col gap-4 text-gray-30'>
                  {columns.links.map((link) => (
                    <Link href='/' key={link} className='text-white'>
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

        <div className='border bg-gray-200 w-full' />
        <p className='py-2 regular-14 w-full text-center text-white'>
          2023 PonteChianale | All rights reserved
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
