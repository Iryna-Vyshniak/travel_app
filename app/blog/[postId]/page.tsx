'use client';
import dynamic from 'next/dynamic';
import React from 'react';

import Container from '@/layout/Container';
import PageWrapper from '@/layout/PageWrapper';
import Spinner from '@/components/Spinner/Spinner';

const DynamicPostDetail = dynamic(() => import('@/components/Blog/PostDetail'), {
  loading: () => <Spinner />,
  ssr: false,
});

type Params = {
  postId: string;
};

const PostId = ({ params }: { params: Params }) => {
  return (
    <PageWrapper>
      <Container>
        <DynamicPostDetail params={params} />
      </Container>
    </PageWrapper>
  );
};

export default PostId;
