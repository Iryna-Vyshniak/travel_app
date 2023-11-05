import { ACTIVITY } from '@/constants';
import Container from '../Container';
import Title from '../Title/Title';
import Image from 'next/image';
import Content from '../Content';

const Activity = () => {
  return (
    <div className='w-screen overflow-hidden bg-transparent bg-gradient-to-r from-white/30 via-white to-green-100'>
      <Container>
        <div className='padding-container w-full py-6'>
          <p className='uppercase regular-18 -mt-1 mb-3 text-green-80'>Activity</p>
          <div className='flexCenter flex-col xl:justify-between xl:flex-row gap-x-5'>
            <div className='self-start'>
              <Title
                text='Camp Will Be For You What You Want It To Be'
                variant='xl:max-w-[500px]'
              />
              <Image
                src='/map-world.svg'
                alt='map'
                width={500}
                height={560}
                loading='lazy'
                className='hidden w-[500px] h-auto xl:flex justify-center items-center'
              />
            </div>

            <ul className='grid md:grid-cols-2 grid-flow-row gap-5 xl:max-w-[520px]'>
              {ACTIVITY.map(({ label, description, id, name }, idx) => (
                <li
                  key={id}
                  className={`flexStart flex-col gap-1 p-2 w-[200] md:w-[240px] h-[200px] rounded-2xl backdrop-blur-mds ${
                    idx !== 0 && idx !== 3 ? 'bg-green-80/20' : 'bg-white'
                  } ${idx === 1 || idx === 3 ? 'mt-10' : ''}`}
                >
                  <Image src={label} alt='name' width={64} height={64} loading='lazy' />
                  <h3
                    className={`text-base md:text-lg font-bold ${
                      idx !== 0 && idx !== 3
                        ? 'text-gray-90 drop-shadow-[0_1px_0.5px_rgba(250,250,250,1)]'
                        : 'text-green-80'
                    }`}
                  >
                    {name}
                  </h3>
                  <Content
                    variant={`text-base md:text-lg ${
                      idx !== 0 && idx !== 3
                        ? 'text-gray-90 drop-shadow-[0_1px_0.5px_rgba(250,250,250,1)]'
                        : 'text-green-80'
                    }`}
                  >
                    {description}
                  </Content>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Activity;
