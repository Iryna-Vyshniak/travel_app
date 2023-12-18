import React from 'react';
import Tag from './Tag';
import { ITags } from '@/shared/types';

const TagsList = ({ tags }: ITags) => {
  return (
    <ul className='flex flex-wrap gap-2'>
      {tags.map((tag, idx) => (
        <Tag key={`${tag}-${idx}`} tag={tag} />
      ))}
    </ul>
  );
};

export default TagsList;
