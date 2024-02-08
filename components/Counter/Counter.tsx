import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate, MotionValue } from 'framer-motion';

type Props = {
  children: React.ReactNode;
};

const Counter = ({ children }: Props) => {
  const count = useMotionValue(0);
  const rounded: MotionValue<number> = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const animation = animate(count, 180, { duration: 10 });

    return animation.stop;
  }, []);

  return (
    <motion.p className='tabular-nums'>
      <motion.span className='text-base lg:text-xl font-bold'>{rounded}</motion.span>
      <span className='text-base lg:text-xl font-bold'>k</span>
      <span className='text-base lg:text-xl ml-4'>{children}</span>
    </motion.p>
  );
};

export default Counter;
