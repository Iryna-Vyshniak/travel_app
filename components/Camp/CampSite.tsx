import Image from 'next/image';
import PeopleJoined from './PeopleJoined';

interface ICampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: ICampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] bg-center bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className='flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10'>
        <div className='flexCenter gap-4'>
          <div className='rounded-full bg-green-60 p-4'>
            <Image src='/folded-map.svg' alt='map' width={28} height={28} />
          </div>
          <div className='flex flex-col gap-1'>
            <h4 className='bold-18 text-white drop-shadow-[0_1px_0.5px_rgba(0,0,20,1)]'>{title}</h4>
            <p className='regular-14 text-white drop-shadow-[0_1px_0.5px_rgba(0,0,20,1)]'>
              {subtitle}
            </p>
          </div>
        </div>

        <PeopleJoined peopleJoined={peopleJoined} />
      </div>
    </div>
  );
};

export default CampSite;
