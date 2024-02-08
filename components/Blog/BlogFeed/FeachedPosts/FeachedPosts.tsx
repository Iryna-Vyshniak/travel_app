'use client';

import React, { useLayoutEffect, useState } from 'react';
import { useMotionValue, motion, useTransform } from 'framer-motion';

import FeaturedPost from './FeaturedPost';
import { IPost } from '@/shared/types';
import { getHeight, getItemHeight, size } from '@/shared/utils.ts/getHeight';
import { generateStyles } from '@/shared/utils.ts/generateStyles';

const FeachedPosts = ({ posts }: { posts: IPost[] }) => {
  const [md, setMd] = useState(false);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 480) {
        setMd(true);
      } else {
        setMd(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollY = useMotionValue(0);
  const scale = useTransform(scrollY, [0, 100], [0, 1]);
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);

  return (
    <>
      <motion.div
        className='absolute top-[8%] left-[50%] -ml-[20px] rounded-full w-6 h-6 border border-slate-300 bg-slate-200 shadow-lg shadow-slate-400'
        style={{
          scale,
          opacity,
        }}
      />
      <motion.div
        className='relative overflow-hidden w-full h-[640px] lg:h-[620px] xl:h-[520px] translate-x-0 bg-slate-200 rounded-xl shadow-slate-400 shadow-inner cursor-grab p-4'
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.ul
          className='flex flex-col xs:flex gap-6'
          style={{ width: '100%', height: getHeight(posts, md), y: scrollY }}
          drag='y'
          dragConstraints={{
            top: -getHeight(posts, md) + size,
            bottom: 0,
          }}
        >
          {posts.map((post, index) => {
            const styles = generateStyles(index, posts.length, getItemHeight(md));
            return <FeaturedPost key={index} post={post} styles={styles} />;
          })}
        </motion.ul>
      </motion.div>
      <motion.div
        className='absolute -[8%] left-[50%] -ml-[20px] rounded-full w-6 h-6 border border-slate-300 bg-slate-200 shadow-lg shadow-slate-400'
        style={{
          scale,
          opacity,
        }}
      />
    </>
  );
};

export default FeachedPosts;
