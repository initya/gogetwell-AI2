import { motion } from 'framer-motion';

export const LoadingAnimation = () => {
  return (
    <div className="fixed inset-0 bg-navy z-50 flex items-center justify-center">
      <div className="relative">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-16 h-16 border-4 border-accent-purple rounded-full"
        />
        <motion.div
          initial={{ scale: 1 }}
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2
          }}
          className="absolute inset-0 w-16 h-16 border-4 border-accent-blue rounded-full"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-white">go</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-purple to-purple-light">Get</span>
            <span className="text-white">well</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-blue to-blue-400">.ai</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}; 