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
        className='w-[80px] h-[80px]'
      />
    </Link>
  );
};

export default Logo;
