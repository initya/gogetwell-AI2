import { motion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';

export default function TeamIllustration() {
  return (
    <ScrollAnimation
      animation="fade"
      duration={0.8}
      className="relative w-full max-w-3xl mx-auto"
    >
      <div className="relative flex flex-col items-center justify-center min-h-[400px] px-8 py-12 bg-white/80 backdrop-blur-xl rounded-3xl border border-accent-purple/20 shadow-glow-lg overflow-hidden">
        {/* Background gradient accent */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-1/3 -left-1/4 w-2/3 h-2/3 bg-gradient-to-br from-accent-purple/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute -bottom-1/3 -right-1/4 w-2/3 h-2/3 bg-gradient-to-tl from-accent-blue/20 to-transparent rounded-full blur-3xl" />
        </div>

        {/* Medical cross symbol */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative mb-8 drop-shadow-lg"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-accent-purple to-accent-blue rounded-2xl shadow-glow-lg animate-bounce-slow" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
            +
          </div>
        </motion.div>

        {/* Text content */}
        <div className="text-center space-y-4 px-2">
          <motion.h2
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-4xl font-bold bg-gradient-to-r from-accent-purple to-accent-blue bg-clip-text text-transparent"
          >
            Healthcare
          </motion.h2>
          <motion.p
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-700 max-w-lg mx-auto"
          >
            Empowering healthcare professionals with advanced AI solutions for better patient care and improved medical outcomes.
          </motion.p>
        </div>

        {/* Floating elements */}
        <div className="absolute top-10 left-10">
          <div className="w-4 h-4 bg-accent-purple/30 rounded-full animate-float" />
        </div>
        <div className="absolute bottom-10 right-10">
          <div className="w-6 h-6 bg-accent-blue/30 rounded-full animate-float delay-500" />
        </div>
        <div className="absolute top-1/2 right-20">
          <div className="w-3 h-3 bg-accent-purple/20 rounded-full animate-float delay-1000" />
        </div>
      </div>
    </ScrollAnimation>
  );
} 