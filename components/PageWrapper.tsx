'use client';
import { motion, MotionConfig } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <MotionConfig transition={{ type: 'linear', duration: 0.5 }}>
      <motion.section
        variants={variants}
        initial='hidden'
        animate='enter'
        exit='exit'
        className='min-h-screenHeightWithoutHeader'
      >
        {children}
      </motion.section>
    </MotionConfig>
  );
};

export default PageWrapper;
