'use client';

import Image from 'next/image';
import Container from '@/layout/Container';
import Button from '@/ui/Button/Button';
import Content from '@/ui/Content/Content';
import Title from '@/ui/Title/Title';
import Section from '@/layout/Section';
import Counter from '@/components/Counter/Counter';
import { useEffect, useState } from 'react';

interface IProps {
  modal: boolean;
  openModal: () => void;
  closeModal: () => void;
  toggleModal: () => void;
}

const CampingSection = ({ modal, openModal, closeModal, toggleModal }: IProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <>
      <Section id='#camping' variant='mt-24 mb-20'>
        <Container variant='relative max-container padding-container'>
          <p className='uppercase regular-18 text-green-80 mb-4'>About</p>
          <div className='flex flex-col items-center justify-center gap-20 py-2 md:gap-28 lg:flex-row'>
            <div className='flex flex-1 flex-col xl:w-1/2'>
              <Title text='Camp Area' variant='drop-shadow-[0_1px_0.5px_rgba(250,250,250,1)]' />
              <Content variant='xl:max-w-[520px]'>
                We want to be with you on each step of your journey, guiding you towards the immense
                satisfaction of witnessing the untarnished beauty of nature. With our app, we can
                assist you in embarking on a global adventure that encapsulates the breathtaking
                wonders of our planet. Discover the world's most captivating landscapes, immerse
                yourself in diverse cultures, and experience the unparalleled beauty of nature, all
                at your fingertips in one convenient application.
              </Content>

              <div className='my-11 flex flex-wrap gap-5'>
                <div className='flex items-center gap-2 mb-4'>
                  {Array(5)
                    .fill(1)
                    .map((_, index) => (
                      <Image
                        src='/star.svg'
                        key={index}
                        alt='star'
                        width={24}
                        height={24}
                        loading='lazy'
                      />
                    ))}
                </div>
                <Counter key={count}>Excellent Reviews</Counter>
              </div>

              <div className='flex w-full gap-3 sm:flex-row'>
                <Button type='button' title='Download App' variant='btn_green' />
                <Button
                  type='button'
                  title='Know More'
                  icon='/play.svg'
                  variant='btn_white'
                  onClick={openModal}
                />
              </div>
            </div>
            <div className='hidden lg:flexCenter rounded-2xl lg:rounded-5xl w-[420px] h-[420px] overflow-hidden bg-cover  bg-top bg-no-repeat bg-circle shadow-lg shadow-green-90'></div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default CampingSection;
