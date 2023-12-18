'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { BLOG } from '@/constants';
import Post from '@/shared/types';
import Tag from './Tags/Tag';
import Button from '../Button';
import navigateBackWhiteIcon from '@/public/navigate-back-white.svg';

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
          <div className='relative flex flex-col'>
            <img
              src={post.photo}
              alt={post.title}
              className='h-80 w-full object-cover md:h-96 lg:h-[520px] 2xl:h-[620px]'
            />
            <div className='absolute left-0 top-0 h-full w-full bg-slate-900/60'></div>
            <div className='absolute top-12 w-full cursor-pointer justify-start px-2 text-lg text-slate-50 md:top-20 md:px-8 md:text-xl lg:px-12 lg:text-2xl'>
              <Button
                onClick={() => push('/blog')}
                icon={navigateBackWhiteIcon}
                iconTitle='back'
                type='button'
              />
            </div>
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
