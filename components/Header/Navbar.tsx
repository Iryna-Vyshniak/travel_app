import Logo from './Logo';
import Socials from '../Socials/Socials';
import Nav from './Nav';
import Button from '../../ui/Button/Button';
import Contacts from '../Contacts/Contacts';
import MobSidebar from '../MobSidebar/MobSidebar';

const Navbar = () => {
  return (
    <nav className='relative flexBetween gap-2 max-container padding-container py-2'>
      <div className='flexCenter flex-row-reverse 2xl:flex-row'>
        <div className='hidden h-full gap-8 xl:flexCenter'>
          <Socials text='nav' />
          <Contacts text='nav' />
        </div>
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

      <MobSidebar />
    </nav>
  );
};

export default Navbar;
