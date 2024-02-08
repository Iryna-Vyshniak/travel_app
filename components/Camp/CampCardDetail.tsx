'use client';
import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { BOOKING } from '@/mock/mock';
import Spinner from '../Spinner/Spinner';
import BackLink from '../../ui/BackLink/BackLink';

const DynamicMap = dynamic(async () => await import('@/components/Map/CampMap'), {
  loading: () => <Spinner />,
  ssr: false,
});

interface IProps {
  params: string;
}

type IData = {
  name: string;
  address: string;
  price: number;
  description: string;
  primaryImages: string;
  secondaryImages: string;
  id: string;
  pet: boolean;
  numberOfPersons: number;
  fullDescription: string;
  stars: number;
  reviews: number;
  tags: string[];
  position: [number, number];
};

const CampCardDetail = ({ params }: IProps) => {
  const [shareLinkCopied, setShareLinkCopied] = useState(false);
  const [campData, setCampData] = useState<IData | null>(null);

  const data = (id: string) => {
    const dataCard = BOOKING.filter((camp) => camp.id === id);
    return dataCard;
  };

  useEffect(() => {
    const filteredData = data(params);
    if (filteredData.length === 1) {
      const data = filteredData[0];
      const positionTuple: [number, number] = [data.position[0], data.position[1]];
      const campDataWithTuplePosition: IData = {
        ...data,
        position: positionTuple,
      };

      setCampData(campDataWithTuplePosition);
    }
  }, [params]);

  return (
    <div className='flexCenter flex-col'>
      {campData && (
        <>
          <div
            className='fixed top-0 left-0 w-screen overflow-hidden h-[320px] lg:h-[520px] 2xl:h-[620px]'
            style={{
              background: `url(${campData.primaryImages}) bottom center no-repeat`,
              backgroundSize: 'cover',
            }}
          ></div>
          <div className='fixed top-0 left-0 w-screen overflow-hidden h-[320px] lg:h-[520px] 2xl:h-[620px] bg-slate-900/60 shadow-inner shadow-slate-800'></div>

          <BackLink href='/camping' styles='fixed' />
          <div
            className='fixed top-[15%] right-[6%] z-50 bg-white cursor-pointer border-2 border-gray-400 rounded-full w-12 h-12 flex justify-center items-center shadow-md shadow-gray-600'
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              setShareLinkCopied(true);

              setTimeout(() => {
                setShareLinkCopied(false);
              }, 2000);
            }}
          >
            <Image src='/copy.svg' width={26} height={26} alt='copy' loading='lazy' />
          </div>
          {shareLinkCopied && (
            <p className='fixed z-20 top-[20%] right-[5%] p-2 font-semibold border-2 border-gray-400 rounded-md bg-white shadow-md shadow-gray-600'>
              Link Copied
            </p>
          )}
          <div className='relative flex flex-col lg:flex-row lg:space-x-5 space-y-3 lg:space-y-0 p-3 w-full mx-auto mt-[33%]'>
            <div
              className='w-full h-[420px] lg:h-auto lg:w-1/3'
              style={{
                background: `url(${campData.secondaryImages}) bottom center no-repeat`,
                backgroundSize: 'cover',
              }}
            ></div>
            <div className='w-full lg:w-2/3 flex flex-col space-y-2 p-3 bg-white'>
              <div className='flex justify-between item-center'>
                <p className='text-gray-500 font-medium hidden md:block'>Vacations</p>
                <div className='flex items-center'>
                  <Image src='/star.svg' width={26} height={26} alt='copy' loading='lazy' />
                  <p className='text-gray-600 font-bold text-sm ml-1'>
                    {campData.stars}
                    <span className='text-gray-500 font-normal'>({campData.reviews} reviews)</span>
                  </p>
                </div>
                <div className=''>
                  <Image src='/heart.svg' width={26} height={26} alt='copy' loading='lazy' />
                </div>
                <div className='bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block'>
                  Superhost
                </div>
              </div>
              <h3 className='font-black text-gray-800 md:text-3xl text-xl'>{campData.name}</h3>
              <p className='md:text-lg text-gray-500 text-base'>{campData.fullDescription}</p>
              <p className='text-xl font-black text-gray-800'>
                $ {campData.price}
                <span className='font-normal text-gray-600 text-base'>/per day</span>
              </p>
              <div className='flexBetween border-b-2'>
                <ul className='flex flex-wrap justify-starts items-center py-3 text-sm text-white font-medium'>
                  {campData.tags.map((tag, idx) => (
                    <li
                      key={idx}
                      className='m-1 px-2 py-1 rounded bg-green-60 shadow-lg shadow-green-90'
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                {campData.pet && (
                  <Image src='/pet.svg' alt="pet's icon" width={26} height={26} loading='lazy' />
                )}
              </div>
            </div>
          </div>
          {typeof window !== 'undefined' && (
            <DynamicMap position={campData.position} address={campData.address} />
          )}
        </>
      )}
    </div>
  );
};

export default CampCardDetail;
