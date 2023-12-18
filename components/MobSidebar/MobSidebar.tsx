'use client';
import { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from '@/shared/hooks/useDimensions';
import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation';
import { sidebar } from '@/shared/utils.ts/motion';

const MobSidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
      className='absolute top-0 right-0 bottom-0 z-50 w-[50vw] lg:hidden'
    >
      <motion.div
        className='absolute top-0 right-0 bottom-0 w-screen md:w-[50vw] min-h-screen bg-white shadow-lg shadow-slate-800'
        variants={sidebar}
      />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default MobSidebar;
