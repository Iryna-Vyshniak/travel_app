import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Post, { IFeaturedPostProps } from '@/shared/types';
import TagsList from '../../Tags/TagsList';
import Image from 'next/image';

const FeaturedPost: React.FC<IFeaturedPostProps> = ({
  post: { id: postId, title, author, date, post: description, tags, photo },
  styles,
}) => {
  return (
    <motion.li
      style={styles}
      className='w-full border-b border-slate-400 xs:border-none gap-4 rounded-lg shadow-lg shadow-slate-400'
    >
      <Link href={`/blog/${postId}`} className='flex flex-col xs:flex-row w-full h-full'>
        <div className='h-full w-full xs:w-1/3 rounded-t-lg  xs:rounded-tr-none xs:rounded-l-lg object-cover'>
          <Image
            src={photo}
            alt={title}
            width={1000}
            height={1000}
            className='h-full w-full rounded-t-lg  xs:rounded-l-lg xs:rounded-tr-none object-cover shadow-lg'
          />
        </div>
        <div className='flex h-full w-full xs:w-2/3 flex-col gap-2 px-2 py-4'>
          <div className='text-base md:text-xl font-semibold'>{title}</div>
          <TagsList tags={tags} />
          <div className='line-clamp-2'>
            <p className='overflow-ellipsis md:text-[14px]'>{description}</p>
          </div>
          <div className='flex flex-1 items-end text-xs'>
            {author} • {date}
          </div>
        </div>
      </Link>
    </motion.li>
  );
};

export default FeaturedPost;
