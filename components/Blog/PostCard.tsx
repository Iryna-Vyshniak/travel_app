'use client';
import Post from '@/shared/types';
import Link from 'next/link';
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import TagsList from './Tags/TagsList';

const PostCard = ({
  post: { id: postId, title, author, date, post: description, tags, photo },
}: {
  post: Post;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <li
      ref={ref}
      className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-2xl lg:rounded-5xl shadow-lg shadow-slate-400 h:auto xs:h-[426px]'
      style={{
        transform: isInView ? 'none' : 'translateY(200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
    >
      <Link href={`/blog/${postId}`} className='cursor-pointer'>
        <Image
          src={photo}
          alt={title}
          width={316}
          height={304}
          className='h-48 w-full object-cover rounded-tr-2xl lg:rounded-tr-5xl rounded-tl-2xl lg:rounded-tl-5xl'
        />
        <div className='flex flex-col flex-grow gap-2 p-4'>
          <div className='text-xs'>
            {author} • {date}
          </div>
          <h2 className='mb-2 line-clamp-1 text-lg font-semibold'>{title}</h2>
          <p className='line-clamp-2 text-sm'>{description}</p>
        </div>
        <div className='p-4'>
          <TagsList tags={tags} />
        </div>
      </Link>
    </li>
  );
};

export default PostCard;
