import Booking from '@/components/Camp/Booking';
import Container from '@/components/Container';
import PageWrapper from '@/components/PageWrapper';
import Section from '@/components/Section';

const Home = () => {
  return (
    <PageWrapper>
      <Container>
        <Booking />
      </Container>
    </PageWrapper>
  );
};

export default Home;
