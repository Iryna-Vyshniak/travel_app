import React, { useRef } from 'react';
import Link from 'next/link';
import Post from '@/shared/types';
import TagsList from '../../Tags/TagsList';
import { useInView } from 'framer-motion';

const FeaturedPost = ({
  post: { id: postId, title, author, date, post: description, tags, photo },
}: {
  post: Post;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <li
      ref={ref}
      className='h-auto xs:h-58 border-b border-slate-400 xs:border-none cursor-pointer gap-4 rounded-lg shadow-lg shadow-slate-400 xs:shadow-transparent'
      style={{
        transform: isInView ? 'none' : 'translateY(200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
    >
      <Link href={`/blog/${postId}`} className='flex flex-col xs:flex-row'>
        <div className='w-full xs:w-1/3'>
          <img
            src={photo}
            alt={title}
            className='h-full w-full rounded-lg object-cover shadow-lg'
          />
        </div>
        <div className='flex h-full w-full xs:w-2/3 flex-col gap-2 px-2 py-4'>
          <div className='text-xl font-semibold'>{title}</div>
          <TagsList tags={tags} />
          <div className='line-clamp-2'>
            <p className='overflow-ellipsis'>{description}</p>
          </div>
          <div className='flex flex-1 items-end text-xs'>
            {author} • {date}
          </div>
        </div>
      </Link>
    </li>
  );
};

export default FeaturedPost;
