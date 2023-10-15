import Logo from './Logo';
import Socials from './Socials';
import Nav from './Nav';
import Image from 'next/image';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className='flexBetween gap-2 max-container padding-container sticky left-0 right-0 top-0 z-30 py-2 shadow-lg shadow-green-100 bg-green-90'>
      <Socials />
      <Logo />
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
