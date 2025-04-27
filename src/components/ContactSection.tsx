import { motion } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-navy to-accent-purple mb-4">
                Let's get in touch!
              </h2>
              <p className="text-gray-600 text-lg">
                Got questions about GoGetWell.AI? Our team is here to help. Contact us for
                quick and friendly support.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center space-x-4 group"
              >
                <div className="w-14 h-14 rounded-xl bg-accent-purple/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <PhoneIcon className="w-7 h-7 text-accent-purple" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Phone</p>
                  <p className="text-lg font-semibold text-gray-900">+91 98765543321</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center space-x-4 group"
              >
                <div className="w-14 h-14 rounded-xl bg-accent-blue/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <EnvelopeIcon className="w-7 h-7 text-accent-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email</p>
                  <p className="text-lg font-semibold text-gray-900">info@gogetwell.ai</p>
                </div>
              </motion.div>
            </div>

            <div className="pt-6">
              <p className="text-sm text-gray-500 font-medium mb-4">Follow us on social media</p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-xl bg-accent-purple/10 flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <FaTwitter className="w-5 h-5 text-accent-purple" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <FaLinkedinIn className="w-5 h-5 text-accent-blue" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent-purple focus:border-transparent transition-shadow"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent-purple focus:border-transparent transition-shadow"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent-purple focus:border-transparent transition-shadow resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-accent-purple to-purple-light text-white px-6 py-4 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-purple/25 font-medium"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 