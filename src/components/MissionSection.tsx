import Image from 'next/image';
import { motion } from 'framer-motion';

export const MissionSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Mission Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our mission is to simplify the complex medical tourism process by
            seamlessly delivering AI powered solutions. We strive to revolutionize
            healthcare facilitation, incorporating advanced automation, and provide
            solutions with unprecedented cost-effectiveness.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Feature 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-accent-purple/10"
          >
            <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
              <Image
                src="/images/automation.svg"
                alt="Advanced automation illustration"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Advanced automation for efficient operations
            </h3>
            <p className="text-gray-600">
              Streamline your medical tourism operations with our AI-powered automation solutions.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-accent-blue/10"
          >
            <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
              <Image
                src="/images/scalable.svg"
                alt="Scalable solutions illustration"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Scalable solutions for business expansion
            </h3>
            <p className="text-gray-600">
              Grow your medical tourism business with our scalable and flexible solutions.
            </p>
          </motion.div>
        </div>

        {/* Problem Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-3xl mx-auto text-center bg-gradient-to-r from-accent-purple/5 to-accent-blue/5 p-8 rounded-2xl"
        >
          <p className="text-gray-700 text-lg leading-relaxed">
            Medical tourism, especially in India, is plagued by disorganization and
            inefficiency. Facilitators often rely on outdated methods, leading to missed
            business opportunities, suboptimal patient support, and inconsistent service
            delivery.
          </p>
        </motion.div>
      </div>
    </section>
  );
}; 