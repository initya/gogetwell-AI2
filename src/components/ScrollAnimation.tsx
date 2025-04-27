import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: 'fade' | 'slide-up' | 'slide-down' | 'scale';
  duration?: number;
  delay?: number;
  className?: string;
}

export default function ScrollAnimation({
  children,
  animation = 'fade',
  duration = 0.5,
  delay = 0,
  className = '',
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const animations = {
    fade: {
      opacity: isInView ? 1 : 0,
      transition: { duration, delay }
    },
    'slide-up': {
      opacity: isInView ? 1 : 0,
      y: isInView ? 0 : 20,
      transition: { duration, delay }
    },
    'slide-down': {
      opacity: isInView ? 1 : 0,
      y: isInView ? 0 : -20,
      transition: { duration, delay }
    },
    scale: {
      opacity: isInView ? 1 : 0,
      scale: isInView ? 1 : 0.8,
      transition: { duration, delay }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={animations[animation]}
      className={className}
    >
      {children}
    </motion.div>
  );
} 