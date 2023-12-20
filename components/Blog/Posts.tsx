import React from 'react';
import AllPosts from './AllPosts';
import BlogFeed from './BlogFeed/BlogFeed';

const Posts = () => {
  return (
    <div className='w-full cursor-default'>
      <div className='bg-blog relative h-[460px] w-full -mt-10 bg-cover bg-center'>
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='absolute inset-0 flex flex-col px-8 py-8 text-slate-50 md:px-16'>
          <div className='flex w-full justify-between'>
            <div className='text-2xl font-semibold'>WanderLust</div>
          </div>
          <div className='mb-8 flex max-w-3xl flex-1 flex-col justify-end text-slate-50'>
            <h1 className='text-2xl font-bold md:text-4xl'>Journey Beyond Horizons</h1>
            <p className='my-4 md:text-xl'>
              Dive into the world of travel with stories that transport you to far-off lands.
              Adventure awaits around every corner. It's time to explore the world!
            </p>
            <div className='text-xl font-semibold'>Let's go!</div>
          </div>
        </div>
      </div>
      <div className='mx-4 md:mx-8 lg:mx-16'>
        <BlogFeed />
        <AllPosts />
      </div>
    </div>
  );
};

export default Posts;
