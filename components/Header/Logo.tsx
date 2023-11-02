import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/' className='w-[100px] h-[82px]'>
      <Image
        src='/ponte.png'
        alt='travel logo'
        width={100}
        height={100}
        loading='lazy'
        className='w-[80px] h-[80px] filter drop-shadow-2 offset-x-2 offset-y-2 shadow-green-90'
      />
    </Link>
  );
};

export default Logo;
