import React from 'react';
import { BLOG } from '@/constants';
import PostCardSkeleton from '../Skeleton/PostCardSkeleton';
import PostCard from './PostCard';

const AllPosts = () => {
  return (
    <>
      <h1 className='mb-2 text-2xl font-semibold'>All Posts</h1>{' '}
      <ul className='flex flex-wrap gap-8'>
        {BLOG.length === 0
          ? Array(8)
              .fill(0)
              .map((_, index) => <PostCardSkeleton key={index} />)
          : BLOG.map((post) => <PostCard key={post.id} post={post} />)}
      </ul>
    </>
  );
};

export default AllPosts;
