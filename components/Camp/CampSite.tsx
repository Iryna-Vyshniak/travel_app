import Image from 'next/image';
import PeopleJoined from './PeopleJoined';
import Content from '../Content';

interface ICampProps {
  idx: number;
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ idx, backgroundImage, title, subtitle, peopleJoined }: ICampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] bg-center bg-cover bg-no-repeat rounded-2xl lg:rounded-5xl`}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className='flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10'>
        <div className='flexCenter gap-4'>
          <div className='rounded-full bg-green-60 p-4'>
            <Image src='/folded-map.svg' alt='map' width={28} height={28} loading='lazy' />
          </div>
          <div className='flex flex-col gap-1'>
            <h4
              className={
                idx !== 1 && idx !== 2
                  ? 'bold-18 text-white drop-shadow-[0_1px_0.5px_rgba(0,0,20,1)]'
                  : 'bold-18 text-green-60 drop-shadow-[0_1px_0.5px_rgba(255,255,250,1)'
              }
            >
              {title}
            </h4>

            <Content
              variant={
                idx !== 1 && idx !== 2
                  ? 'regular-14 text-white drop-shadow-[0_1px_0.5px_rgba(0,0,20,1)]'
                  : 'regular-14 text-green-60 drop-shadow-[0_1px_0.5px_rgba(255,255,250,1)'
              }
            >
              {subtitle}
            </Content>
          </div>
        </div>

        <PeopleJoined peopleJoined={peopleJoined} />
      </div>
    </div>
  );
};

export default CampSite;
