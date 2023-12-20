import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BackLink = ({ href, styles }: { href: string; styles: string }) => {
  return (
    <div
      className={`${styles} top-[15%] left-[4%] z-20 bg-white cursor-pointer border-2 border-gray-400 rounded-full w-12 h-12 flex justify-center items-center shadow-lg shadow-slate-800`}
    >
      <Link href={href} className='text-lg text-slate-500'>
        <Image src='/back.svg' width={26} height={26} alt='copy' loading='lazy' />
      </Link>
    </div>
  );
};

export default BackLink;
