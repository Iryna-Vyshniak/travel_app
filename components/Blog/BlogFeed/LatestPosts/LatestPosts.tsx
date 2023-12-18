import React from 'react';
import { IPost } from '@/shared/types';
import LatestPost from './LatestPost';

const LatestPosts = ({ latestPosts }: { latestPosts: IPost[] }) => {
  return (
    <ul className='flex flex-col gap-4 p-2'>
      {latestPosts.slice(0, 3).map((post, idx) => (
        <LatestPost key={idx} post={post} />
      ))}
    </ul>
  );
};

export default LatestPosts;
