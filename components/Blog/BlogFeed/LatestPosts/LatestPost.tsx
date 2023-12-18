'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Post from '@/shared/types';
import LinkIcon from '@/public/link.svg';
import TagsList from '../../Tags/TagsList';

const LatestPost = ({
  post: { id: postId, title, author, date, post: description, tags, photo },
}: {
  post: Post;
}) => {
  return (
    <li className='relative rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-none dark:bg-dark-card'>
      <div className='flex'>
        <TagsList tags={tags} />
        <Link href={`/blog/${postId}`} className='absolute top-2 right-2 h-5 w-5 cursor-pointer'>
          <Image src={LinkIcon} width={12} height={12} alt='link icon' className='h-3 w-3' />
        </Link>
      </div>
      <div className='mb-2 line-clamp-2 font-semibold text-light-title dark:text-dark-title'>
        {title}
      </div>
      <div className='text-xs text-light-info dark:text-dark-info'>
        {author} • {date}
      </div>
    </li>
  );
};

export default LatestPost;
