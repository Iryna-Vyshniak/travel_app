import Image from 'next/image';
import Slider from './Slider';
import Title from '../Title/Title';
import Container from '../Container';
import Content from '../Content';

const Gallery = () => {
  return (
    <Container>
      <div className='relative flexCenter flex-col w-full'>
        <Slider />
        <div className='lg:absolute lg:bottom-[-10rem] lg:right-5 z-10 lg:flexEnd lg:-mt-60 lg:mr-6 w-full lg:w-[500px] xl:w-[734px]'>
          <div className='backdrop-blur-2xl bg-white/20 px-8 py-12 lg:w-[500px] xl:w-[734px] xl:rounded-5xl relative w-full overflow-hidden rounded-3xl shadow-lg shadow-slate-400'>
            <Title text='Feeling Lost And Not Knowing The Way?' variant='text-black' />
            <Content>
              Starting from the anxiety of the climbers when visiting a new climbing location, the
              possibility of getting lost is very large. That's why we are here for those of you who
              want to start an adventure
            </Content>
            <Image
              src='/quote.svg'
              alt='quote'
              width={186}
              height={200}
              className='camp-quote'
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Gallery;
