'use client';
import { AnimatePresence, motion } from 'framer-motion';

import Button from '@/components/Button';
import Container from '@/components/Container';
import Content from '@/components/Content';
import Title from '@/components/Title/Title';
import Image from 'next/image';
import Modal from '@/components/Modal';
import useModal from '@/shared/hooks/useModal';
import Section from '@/components/Section';
import { backdropVariant } from '@/shared/utils.ts/motion';

interface IProps {
  modal: boolean;
  openModal: () => void;
  closeModal: () => void;
  toggleModal: () => void;
}

const CampingSection = ({ modal, openModal, closeModal, toggleModal }: IProps) => {
  return (
    <>
      <Section id='#camping' variant='mt-24 mb-20'>
        <Container variant='relative max-container padding-container'>
          <p className='uppercase regular-18 text-green-80 mb-4'>About</p>
          <div className='flex flex-col items-center justify-center gap-20 py-2 md:gap-28 lg:flex-row'>
            <div className='flex flex-1 flex-col xl:w-1/2'>
              <Title
                text='Camp Area'
                variant='bg-clip-text text-transparent bg-gradient-to-r from-green-60 via-green-80 to-green-70 drop-shadow-[0_1px_0.5px_rgba(0,0,20,1)]'
              />
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

                <p className='text-base lg:text-xl font-bold text-blue-70'>
                  198k
                  <span className='text-base lg:text-xl ml-1'>Excellent Reviews</span>
                </p>
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
