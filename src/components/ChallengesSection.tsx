import { motion } from 'framer-motion';
import Image from 'next/image';
import { ClockIcon, UsersIcon } from '@heroicons/react/24/outline';

export const ChallengesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Problem Statement */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-navy to-accent-purple">
              The Challenges We Solve
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Medical tourism, especially in India, is plagued by disorganization and
              inefficiency. Facilitators often rely on outdated methods, leading to missed
              business opportunities, suboptimal patient support, and inconsistent service
              delivery.
            </p>

            {/* Solutions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {/* Solution 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-accent-purple/10 group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <ClockIcon className="w-6 h-6 text-accent-blue" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Streamlined workflow and automation
                </h4>
                <p className="text-gray-600">
                  Automate repetitive tasks and optimize your operational efficiency
                </p>
              </motion.div>

              {/* Solution 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-accent-blue/10 group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-purple/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <UsersIcon className="w-6 h-6 text-accent-purple" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Improved patient communication
                </h4>
                <p className="text-gray-600">
                  Enhance patient engagement with real-time support and updates
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[400px] w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 to-accent-blue/5 rounded-2xl" />
              <div className="absolute top-4 left-4 w-24 h-24 bg-accent-purple/10 rounded-full blur-2xl" />
              <div className="absolute bottom-4 right-4 w-24 h-24 bg-accent-blue/10 rounded-full blur-2xl" />
              
              {/* Main illustration elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  {/* Connected nodes visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 border-4 border-accent-purple/20 rounded-full animate-pulse" />
                    <div className="absolute w-24 h-24 border-4 border-accent-blue/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  </div>
                  
                  {/* Connection lines */}
                  <svg className="absolute inset-0" viewBox="0 0 256 256">
                    <path
                      d="M128 64L64 128L128 192"
                      stroke="url(#gradient1)"
                      strokeWidth="4"
                      fill="none"
                      className="animate-dash"
                    />
                    <path
                      d="M128 64L192 128L128 192"
                      stroke="url(#gradient2)"
                      strokeWidth="4"
                      fill="none"
                      className="animate-dash"
                    />
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4A6CF7" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#9747FF" stopOpacity="0.2" />
                      </linearGradient>
                      <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#9747FF" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#4A6CF7" stopOpacity="0.2" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 