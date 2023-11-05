'use client';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

import Container from '@/components/Container';
import PageWrapper from '@/components/PageWrapper';
import Spinner from '@/components/Spinner';
const DynamicCampCard = dynamic(() => import('@/components/Camp/FullCampCard'), {
  loading: () => <Spinner />,
  ssr: false,
});

type Params = {
  id: string;
};

const Home = ({ params }: { params: Params }) => {
  return (
    <PageWrapper>
      <Container>
        <DynamicCampCard params={params.id} />
      </Container>
    </PageWrapper>
  );
};

export default Home;
