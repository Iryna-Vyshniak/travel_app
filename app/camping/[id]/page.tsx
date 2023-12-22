'use client';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

import Container from '@/layout/Container';
import PageWrapper from '@/layout/PageWrapper';
import Spinner from '@/components/Spinner/Spinner';

const DynamicCampCard = dynamic(() => import('@/components/Camp/CampCardDetail'), {
  loading: () => <Spinner />,
  ssr: false,
});

type Params = {
  id: string;
};

const CampingId = ({ params }: { params: Params }) => {
  return (
    <PageWrapper>
      <Container>
        <DynamicCampCard params={params.id} />
      </Container>
    </PageWrapper>
  );
};

export default CampingId;
