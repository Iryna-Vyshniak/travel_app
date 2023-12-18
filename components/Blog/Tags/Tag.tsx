import React from 'react';
import { twMerge } from 'tailwind-merge';
import { getCategoryColors } from '@/constants/colors';
import { ITag } from '@/shared/types';

const Tag = ({ tag, disabled, selected = false }: ITag) => {
  const disabledColor: string =
    'opacity-50 bg-light-primary/10 dark:bg-dark-primary/10 dark:text-dark-primary/50 cursor-not-allowed';

  const [defaultColor, selectedColor]: [string, string] = getCategoryColors(tag);

  const getSelectedColor = (selected: boolean): string => {
    return selected ? selectedColor : defaultColor;
  };

  return (
    <li
      className={twMerge(
        'cursor-pointer rounded-3xl px-3 py-1 text-xs font-medium',
        disabled ? disabledColor : getSelectedColor(selected)
      )}
    >
      <p>{tag}</p>
    </li>
  );
};

export default Tag;
