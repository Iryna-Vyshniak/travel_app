import { BOOKING } from '@/mock/mock';
import Container from '../../layout/Container';
import Title from '../../ui/Title/Title';
import CampCard from './CampCard';

const Booking = () => {
  return (
    <Container>
      <p className='self-start uppercase regular-18 mb-3 text-green-60'>Booking</p>
      <Title text='Book your dream vacation now' variant='self-start' />
      <ul className='cards-list'>
        {BOOKING.slice(0, 6).map((data) => (
          <CampCard key={data.id} data={data} />
        ))}
      </ul>
    </Container>
  );
};

export default Booking;
