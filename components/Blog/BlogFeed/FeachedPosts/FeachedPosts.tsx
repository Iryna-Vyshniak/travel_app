import React from 'react';
import FeaturedPost from './FeaturedPost';
import { IPost } from '@/shared/types';

const FeachedPosts = ({ posts }: { posts: IPost[] }) => {
  return (
    <ul className='flex-col xs:flex gap-6 p-2'>
      {posts.slice(0, 3).map((post, index) => (
        <FeaturedPost key={index} post={post} />
      ))}
    </ul>
  );
};

export default FeachedPosts;
