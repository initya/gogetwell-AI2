import { motion } from 'framer-motion';
import { ArrowUpIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

export const FloatingAction = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 right-8 space-y-4 z-40">
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="w-12 h-12 rounded-full bg-accent-blue text-white shadow-lg flex items-center justify-center hover:bg-accent-blue/90 transition-colors"
      >
        <ChatBubbleBottomCenterTextIcon className="w-6 h-6" />
      </motion.button>

      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-accent-purple text-white shadow-lg flex items-center justify-center hover:bg-accent-purple/90 transition-colors"
        >
          <ArrowUpIcon className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
}; 