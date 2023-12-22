'use client';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

interface Props {
  id?: string;
  variant?: string;
  children: React.ReactNode;
}

const Section = ({ id, variant, children }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id={id}
      ref={ref}
      className={
        !variant ? 'relative flexCenter flex-col' : `${variant} relative flexCenter flex-col`
      }
      style={{
        transform: isInView ? 'none' : 'translateY(200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
    >
      {children}
    </section>
  );
};

export default Section;
