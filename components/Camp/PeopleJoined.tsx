import { PEOPLE_URL } from '@/data/data';
import Image from 'next/image';

interface PeopleJoinedProps {
  peopleJoined: string;
}

const PeopleJoined = ({ peopleJoined }: PeopleJoinedProps) => {
  return (
    <div className='flexCenter gap-6 bg-white/30 backdrop-blur-mds p-4 rounded-tl-2xl rounded-br-2xl'>
      <span className='flex -space-x-4 overflow-hidden'>
        {PEOPLE_URL.map((url) => (
          <Image
            className='inline-block h-10 w-10 rounded-full'
            src={url}
            key={url}
            alt='person'
            width={52}
            height={52}
            loading='lazy'
          />
        ))}
      </span>
      <p className='bold-16 md:bold-20 text-white drop-shadow-[0_1px_0.5px_rgba(0,0,20,1)]'>
        {peopleJoined}
      </p>
    </div>
  );
};

export default PeopleJoined;
