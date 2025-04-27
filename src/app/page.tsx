'use client';

import { motion, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

// Import components
import TeamIllustration from '@/components/TeamIllustration';
import { MissionSection } from '@/components/MissionSection';
import { ChallengesSection } from '@/components/ChallengesSection';
import { FAQSection } from '@/components/FAQSection';
import { ContactSection } from '@/components/ContactSection';
import { LoadingAnimation } from '@/components/LoadingAnimation';
import { ScrollProgress } from '@/components/ScrollProgress';
import { FloatingAction } from '@/components/FloatingAction';

// Import icons
import { 
  ChartBarIcon, 
  UserGroupIcon, 
  CogIcon, 
  ChatBubbleBottomCenterTextIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  CreditCardIcon,
  MegaphoneIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline';

const IconComponent = ({ name, className = "w-6 h-6" }) => {
  const icons = {
    website: ComputerDesktopIcon,
    conversion: ChartBarIcon,
    query: ChatBubbleBottomCenterTextIcon,
    analysis: DocumentTextIcon,
    lead: UserGroupIcon,
    database: CogIcon,
    language: GlobeAltIcon,
    payment: CreditCardIcon,
    marketing: MegaphoneIcon,
  };

  const Icon = icons[name];
  return Icon ? <Icon className={className} /> : null;
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'solutions', 'about', 'mission', 'challenges', 'faq', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy via-navy to-navy/95">
      <ScrollProgress />
      <FloatingAction />

      {/* Navigation */}
      <nav className="fixed w-full bg-navy/80 backdrop-blur-md z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              className="flex-shrink-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-2xl font-bold tracking-tight">
                <span className="text-white">go</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-purple to-purple-light">Get</span>
                <span className="text-white">well</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-blue to-blue-400">.ai</span>
              </div>
            </motion.div>
            <motion.div 
              className="hidden md:flex items-center space-x-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {[
                { href: '#about', label: 'About Us' },
                { href: '#faq', label: 'FAQ' },
                { href: '#contact', label: 'Contact Us' }
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-white/80 hover:text-white transition-colors ${
                    activeSection === link.href.slice(1) ? 'text-white font-medium' : ''
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm text-white px-6 py-2.5 rounded-lg hover:bg-white/20 transition-all border border-white/10"
              >
                Login
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-accent-purple to-purple-light text-white px-6 py-2.5 rounded-lg hover:opacity-90 transition-all shadow-lg shadow-purple/25"
              >
                Get Started
              </motion.button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/5 via-transparent to-transparent"></div>
        <div className="absolute top-1/2 -left-64 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-64 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 text-center"
          >
            <div className="inline-block px-4 py-1.5 bg-white/5 rounded-full backdrop-blur-sm border border-white/10 text-sm text-white/80 mb-4">
              🚀 Revolutionizing Healthcare Management
            </div>
            <h2 className="text-4xl sm:text-5xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-accent-purple to-purple-light mb-4">
              AI Front Office
            </h2>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight">
              For Healthcare Agents
            </h1>
            <div className="space-y-4 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2 text-white/90">
                <span>Create</span>
                <span className="text-accent-purple font-semibold">AI Store</span>
                <span>in 2 min</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-white/90">
                <span>Scale with</span>
                <span className="text-accent-purple font-semibold">Digital Marketing</span>
              </div>
            </div>
            <div className="pt-8">
              <button className="bg-gradient-to-r from-accent-purple to-purple-light text-white px-8 py-4 rounded-lg hover:opacity-90 transition-all shadow-lg shadow-purple/25 font-medium">
                Get Started Free
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-20 text-white max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <h3 className="text-4xl font-bold mb-2">2100<span className="text-accent-purple">+</span></h3>
                <p className="text-white/60">Qualified Doctors</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <h3 className="text-4xl font-bold mb-2">1000<span className="text-accent-purple">+</span></h3>
                <p className="text-white/60">Hospitals</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <h3 className="text-4xl font-bold mb-2">800<span className="text-accent-purple">+</span></h3>
                <p className="text-white/60">Treatment Plans</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-navy to-accent-purple mb-4">
              Our Comprehensive Solutions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Empower your healthcare practice with our cutting-edge AI solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" 
                  style={{ backgroundColor: solution.color }}
                >
                  <IconComponent name={solution.iconName} className="w-7 h-7 text-accent-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <TeamIllustration />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-navy to-accent-purple">About Us</h2>
              <p className="text-gray-600 mb-8">
                We are a pioneering AI-driven platform focused on revolutionizing the medical tourism industry. By seamlessly bridging the care gap between patients and healthcare providers, we empower healthcare facilitators to streamline their operations, attract more patients, and deliver superior outcomes.
              </p>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <CogIcon className="w-6 h-6 text-accent-blue" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Modern Solutions</h4>
                  <p className="text-sm text-gray-600">Advanced AI technology for seamless operations</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-purple/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <UserGroupIcon className="w-6 h-6 text-accent-purple" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Patient-Centric</h4>
                  <p className="text-sm text-gray-600">Personalized healthcare experience</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission">
        <MissionSection />
      </section>

      {/* Challenges Section */}
      <section id="challenges">
        <ChallengesSection />
      </section>

      {/* FAQ Section */}
      <section id="faq">
        <FAQSection />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>

      {/* Footer */}
      <footer className="bg-navy py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-white/60 text-sm">
              © 2024 gogetwell.ai
            </div>
            <div className="flex space-x-6 text-white/60 text-sm">
              {['Privacy Policy', 'Terms of Service', 'About Us', 'Help Center'].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
            <div className="flex space-x-4">
              {['twitter', 'linkedin'].map((platform) => (
                <motion.a
                  key={platform}
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Image 
                    src={`/${platform}-icon.svg`}
                    alt={platform}
                    width={20}
                    height={20}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

const solutions = [
  {
    title: 'Custom AI-Powered Website',
    description: 'Intelligent, responsive websites tailored to your healthcare practice with advanced patient management capabilities.',
    iconName: 'website',
    color: '#E8F0FF'
  },
  {
    title: 'Enhanced Patient Conversion',
    description: 'Smart conversion optimization tools to turn patient inquiries into successful treatments.',
    iconName: 'conversion',
    color: '#F3E8FF'
  },
  {
    title: 'Real-Time Query Handling',
    description: 'Instant responses system for patient inquiries with AI-powered chat support.',
    iconName: 'query',
    color: '#E8FFF3'
  },
  {
    title: 'Medical Report Analysis',
    description: 'Advanced AI analysis of medical records for quick and accurate patient documentation.',
    iconName: 'analysis',
    color: '#FFE8E8'
  },
  {
    title: 'Improved Lead Generation',
    description: 'Data-driven lead generation strategies to attract and engage potential patients.',
    iconName: 'lead',
    color: '#FFE8F3'
  },
  {
    title: 'Comprehensive Healthcare Database',
    description: 'Extensive medical information database for accurate patient guidance and support.',
    iconName: 'database',
    color: '#E8E8FF'
  },
  {
    title: 'Multilingual Support',
    description: 'Breaking language barriers with comprehensive multi-language support.',
    iconName: 'language',
    color: '#FFE8E8'
  },
  {
    title: 'Seamless Payment Handling',
    description: 'Secure and efficient payment processing for medical services payment.',
    iconName: 'payment',
    color: '#E8FFF3'
  },
  {
    title: 'Marketing And SEO Support',
    description: 'Optimized digital presence with advanced SEO and marketing strategies.',
    iconName: 'marketing',
    color: '#E8E8FF'
  }
];

const faqs = [
  {
    question: 'What is gogetwell.ai?',
    answer: 'GoGetWell.AI is a comprehensive platform that helps healthcare facilitators streamline their operations, build engaging websites, and manage patient leads with advanced AI capabilities.'
  },
  {
    question: 'What is the AI Front Office for Healthcare Agents?',
    answer: 'The AI Front Office is our core solution that automates and enhances patient engagement, lead management, and administrative tasks for healthcare facilitators.'
  },
  {
    question: 'How does the AI Agent assist me in my healthcare business?',
    answer: 'Our AI Agent helps automate patient communications, manage appointments, process documentation, and provide 24/7 support to your patients.'
  },
  // Add more FAQs as needed
]; 