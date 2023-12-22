import CampCard from '@/components/Camp/CampCard';
import Container from '@/layout/Container';
import PageWrapper from '@/layout/PageWrapper';
import Title from '@/ui/Title/Title';
import { BOOKING } from '@/mock/mock';

const Camping = () => {
  return (
    <PageWrapper>
      <Container>
        <Container>
          <p className='self-start uppercase regular-18 mb-3 text-green-60'>Booking</p>
          <Title text='Book your dream vacation now' variant='self-start' />
          <ul className='cards-list'>
            {BOOKING.map((data) => (
              <CampCard key={data.id} data={data} />
            ))}
          </ul>
        </Container>
      </Container>
    </PageWrapper>
  );
};

export default Camping;
