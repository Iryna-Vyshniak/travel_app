import Image from 'next/image';
import { ABOUT } from '@/constants';
import Container from '../Container';

const About = () => {
  return (
    <Container>
      <div className='flexCenter flex-col xl:justify-between xl:flex-row gap-x-5'>
        <ul className='flexCenter flex-wrap gap-4'>
          {ABOUT.map(({ label, id, name }) => (
            <li key={id} className='flexCenter flex-col gap-y-2 w-40 h-[12.5rem]'>
              <div className='relative w-[4.5rem] h-[4.5rem]'>
                <Image
                  src={label}
                  alt='name'
                  sizes='64px'
                  loading='lazy'
                  fill
                  className='object-contain'
                />
              </div>
              <div className='grow'>
                <h3 className='uppercase text-base text-green-800'>{name}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default About;
