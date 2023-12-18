import React from 'react';
import Skeleton from './Skeleton';

const PostCardSkeleton = () => {
  return (
    <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
      <div className='mr-8 mt-4 mb-4 rounded-lg bg-light shadow-md dark:bg-dark-card'>
        <Skeleton className='h-48 w-full rounded-lg bg-slate-200 dark:bg-slate-700' />
        <div className='p-4'>
          <Skeleton className='mb-2 h-3 w-2/3 bg-slate-200 dark:bg-slate-700' />
          <Skeleton className='mb-2 h-6 w-4/5 bg-slate-200 dark:bg-slate-700' />
          <Skeleton className='h-16 w-11/12 bg-slate-200 dark:bg-slate-700' />
          <div className='mt-2 flex flex-wrap gap-2'>
            <Skeleton className='h-6 w-16 rounded-full bg-slate-200 dark:bg-slate-700' />
            <Skeleton className='h-6 w-16 rounded-full bg-slate-200 dark:bg-slate-700' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCardSkeleton;
