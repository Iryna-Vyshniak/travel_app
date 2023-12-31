'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BLOG } from '@/mock/mock';
import Post from '@/shared/types';
import Tag from './Tags/Tag';
import BackLink from '../../ui/BackLink/BackLink';

interface IProps {
  params: {
    postId: string;
  };
}

const PostDetail = ({ params: { postId } }: IProps) => {
  const [post, setPost] = useState<Post | null>(null);
  const { push } = useRouter();

  const getData = (id: string) => {
    const data = BLOG.filter((post) => post.id === id);
    return data;
  };

  useEffect(() => {
    const filteredData = getData(postId);
    setPost(filteredData[0]);
  }, []);

  return (
    <>
      {post && (
        <div className='min-h-screen'>
          <div className='relative flex flex-col h-[520px] 2xl:h-[620px] w-full -mt-10 shadow-inner shadow-slate-800'>
            <img
              src={post.photo}
              alt={post.title}
              className='w-full object-cover h-[520px] 2xl:h-[620px]'
            />
            <div className='absolute left-0 top-0 h-full w-full bg-slate-900/60 shadow-inner shadow-slate-800'></div>
            <BackLink href='/blog' styles='absolute' />
            <div className='absolute bottom-6 w-full max-w-xl px-4 text-slate-50 md:bottom-8 md:max-w-3xl md:px-8 lg:bottom-12 lg:max-w-5xl lg:px-12'>
              <ul className='mb-4 flex space-x-2 text-slate-600'>
                {post.tags.map((tag: string, idx) => (
                  <Tag key={`${tag}-${idx}`} tag={tag} />
                ))}
              </ul>
              <h1 className='mb-4 text-xl font-semibold md:text-2xl lg:text-3xl'>{post.title}</h1>
              <p className='text-xs font-semibold text-dark-secondary md:text-sm'>{post.author}</p>
              <p className='text-xs text-dark-secondary/80 md:text-sm'>{post.date}</p>
            </div>
          </div>
          <div className='mx-auto flex max-w-4xl flex-col items-center gap-y-4 px-8 py-10'>
            <div>
              <p className='leading-7 text-light-secondary dark:text-dark-secondary md:text-lg'>
                {post.post}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostDetail;
