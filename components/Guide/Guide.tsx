import Image from 'next/image';
import Container from '../../layout/Container';
import Title from '../../ui/Title/Title';
import Content from '../../ui/Content/Content';

const Guide = () => {
  return (
    <Container>
      <div className='padding-container w-full py-6'>
        <p className='uppercase regular-18 -mt-1 mb-3 text-green-60'>We are here for you</p>
        <div className='flex flex-wrap justify-between gap-x-5'>
          <Title text='Guide You to Easy Path' variant='xl:max-w-[500px]' />
          <Content variant='xl:max-w-[520px]'>
            Only with the hilink application you will no longer get lost and get lost again, because
            we already support offline maps when there is no internet connection in the field.
            Invite your friends, relatives and friends to have fun in the wilderness through the
            valley and reach the top of the mountain
          </Content>
        </div>
      </div>
      <div className='flexCenter relative w-full rounded-2xl lg:rounded-5xl shadow-lg shadow-orange-950'>
        <Image
          src='/man-sitting-near-camping.png'
          alt='boat'
          width={1440}
          height={580}
          className='w-full object-cover object-center rounded-2xl lg:rounded-5xl'
          loading='lazy'
        />

        <div className='absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20'>
          <Image
            src='/meter.svg'
            alt='meter'
            width={16}
            height={158}
            className='h-full w-auto'
            loading='lazy'
          />
          <div className='flexBetween flex-col'>
            <div className='flex w-full flex-col'>
              <div className='flexBetween w-full'>
                <p className='regular-16 text-gray-20'>Destination</p>
                <p className='bold-16 text-green-60'>48 min</p>
              </div>
              <p className='bold-20 mt-2'>Aguas Calientes</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className='regular-16 text-gray-20'>Start track</p>
              <h4 className='bold-20 mt-2 whitespace-nowrap'>Wonorejo Pasuruan</h4>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Guide;
