import CampCard from '@/components/Camp/CampCard';
import Container from '@/components/Container';
import PageWrapper from '@/components/PageWrapper';
import Title from '@/components/Title/Title';
import { BOOKING } from '@/constants';

const Home = () => {
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

export default Home;
