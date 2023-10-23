import Button from '@/components/Button';
import Container from '@/components/Container';
import Title from '@/components/Title/Title';
import Image from 'next/image';

const CampingSection = () => {
  return (
    <section className='relative z-5'>
      <Container>
        <div className='flex flex-1 flex-col xl:w-1/2'>
          <Title text='Camp Area' />
          <p className='text-base mt-6 mb-2 text-gray-30 xl:max-w-[520px]'>
            We want to be with you on each step of your journey, guiding you towards the immense
            satisfaction of witnessing the untarnished beauty of nature. With our app, we can assist
            you in embarking on a global adventure that encapsulates the breathtaking wonders of our
            planet. Discover the world's most captivating landscapes, immerse yourself in diverse
            cultures, and experience the unparalleled beauty of nature, all at your fingertips in
            one convenient application.
          </p>

          <div className='my-11 flex flex-wrap gap-5'>
            <div className='flex items-center gap-2 mb-4'>
              {Array(5)
                .fill(1)
                .map((_, index) => (
                  <Image src='/star.svg' key={index} alt='star' width={24} height={24} />
                ))}
            </div>

            <p className='text-base lg:text-xl font-bold text-blue-70'>
              198k
              <span className='text-base lg:text-xl ml-1'>Excellent Reviews</span>
            </p>
          </div>

          <div className='flex w-full gap-3 sm:flex-row'>
            <Button type='button' title='Download App' variant='btn_green' />
            <Button type='button' title='Know More' icon='/play.svg' variant='btn_white' />
          </div>
        </div>
        <div className='hidden lg:flexCenter rounded-full w-[420px] h-[420px] overflow-hidden bg-cover  bg-top bg-no-repeat bg-circle shadow-lg shadow-green-90'></div>
      </Container>
    </section>
  );
};

export default CampingSection;
