import React from 'react';
import Tag from '../Tags/Tag';
import { ICategories } from '@/shared/types';

const Categories = ({ categories, selectedCategory, setSelectedCategory }: ICategories) => {
  return (
    <div className='mb-6'>
      <div className='mb-1 tracking-wide text-slate-500'>Discover by topic</div>
      <h2 className='mb-2 text-2xl font-semibold dark:text-dark-primary'>Categories</h2>
      <div className='flex flex-wrap gap-3 dark:rounded-lg dark:bg-dark-card dark:p-3'>
        {categories.map((tag) => (
          <button
            type='button'
            key={tag}
            onClick={() => setSelectedCategory(selectedCategory === tag ? 'featured' : tag)}
          >
            <Tag tag={tag} selected={selectedCategory === tag} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
