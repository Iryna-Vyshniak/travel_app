'use client';
import React, { useEffect, useState } from 'react';
import { categories } from '@/constants/colors';
import formatTime from '@/shared/utils.ts/formatTime';
import { BLOG } from '@/mock/mock';
import { IPost } from '@/shared/types';
import Categories from './Categories';
import FeachedPosts from './FeachedPosts/FeachedPosts';
import LatestPosts from './LatestPosts/LatestPosts';

const BlogFeed = () => {
  const [selectedCategory, setSelectedCategory] = useState('featured');
  const [posts, setPosts] = useState<IPost[] | null>(null);
  const [latestPosts, setLatestPosts] = useState<IPost[] | null>(null);

  const desiredDate = formatTime();

  useEffect(() => {
    const filteredDate = BLOG.filter(
      ({ date }) => Date.parse(date) <= Date.parse(desiredDate)
    ).sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
    setLatestPosts(filteredDate);
  }, []);

  useEffect(() => {
    const categoryPosts =
      selectedCategory === 'featured'
        ? BLOG.filter((post) => post.isFeatured)
        : BLOG.filter((post) => post.tags.includes(selectedCategory));

    setPosts(categoryPosts);
  }, [selectedCategory]);

  return (
    <div className='mx-auto my-6'>
      <div className='-mx-4 flex flex-wrap'>
        <div className='w-full p-4 md:w-1/3'>
          <Categories
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <div>
            <p className='mb-1 tracking-wide text-slate-500'>What's new?</p>
            <h2 className='mb-2 text-2xl font-semibold'>Latest Posts</h2>
            {latestPosts && <LatestPosts latestPosts={latestPosts} />}
          </div>
        </div>
        <div className='relative w-full p-4 md:w-2/3'>
          <p className='mb-1 tracking-wide text-slate-500'>What's hot?</p>
          <h1 className='mb-2 text-2xl font-semibold'>
            {selectedCategory === 'featured'
              ? 'Featured Posts'
              : `Posts related to "${selectedCategory}"`}
          </h1>
          {posts && <FeachedPosts posts={posts} />}
        </div>
      </div>
    </div>
  );
};

export default BlogFeed;
