'use client';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface IData {
  name: string;
  address: string;
  price: number;
  description: string;
  primaryImages: string;
  id: string;
  pet: boolean;
  numberOfPersons: number;
}

const CampCard = ({
  data: { name, address, price, description, primaryImages, id, pet, numberOfPersons },
}: {
  data: IData;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <li
      ref={ref}
      className='card m-4 rounded-2xl lg:rounded-5xl shadow-lg shadow-slate-400'
      style={{
        transform: isInView ? 'none' : 'translateY(200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
    >
      <Link href={`/camping/${id}`} className='w-full overflow-hidden'>
        <figure className='relative thumb overflow-hidden mb-4'>
          <Image
            src={primaryImages}
            loading='lazy'
            width={316}
            height={304}
            alt='Camp'
            className='absolute inset-0 h-full w-full object-cover rounded-tr-2xl lg:rounded-tr-5xl rounded-tl-2xl lg:rounded-tl-5xl'
          />
        </figure>
        <div className='flex flex-col gap-2 p-4'>
          <span className='inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs text-center max-w-[7.5rem]'>
            Highlight
          </span>
          <h3 className='title-image text-green-800 font-bold'>{name}</h3>
          <p className='text-base'>{address}</p>
          <div className='flex items-center justify-between border-t w-full pt-2'>
            <p className='text-base'>${price}/per day</p>
            <div className='flex items-center gap-1'>
              <p className='text-base text-green-800 font-bold'>{numberOfPersons}</p>
              <Image
                src='/person-card.svg'
                alt="person's icon"
                width={15}
                height={21}
                loading='lazy'
              />
              {pet && (
                <Image src='/pet.svg' alt="pet's icon" width={18} height={21} loading='lazy' />
              )}
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CampCard;
