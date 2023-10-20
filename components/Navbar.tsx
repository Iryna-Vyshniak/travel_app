import Logo from './Logo';
import Socials from './Socials';
import Nav from './Nav';
import Image from 'next/image';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className='flexBetween gap-2 max-container padding-container py-2'>
      <div className='flexCenter flex-row-reverse 2xl:flex-row'>
        <Socials />
        <div className='ml-0 mr-5 2xl:hidden'>
          <Logo />
        </div>
      </div>
      <div className='hidden 2xl:inline-block'>
        <Logo />
      </div>

      <Nav />

      <div className='lg:flexCenter hidden'>
        <Button type='button' title='Login' icon='/user.svg' variant='btn_green' />
      </div>

      <Image
        src='menu.svg'
        alt='menu'
        width={32}
        height={32}
        className='inline-block cursor-pointer lg:hidden'
      />
    </nav>
  );
};

export default Navbar;
