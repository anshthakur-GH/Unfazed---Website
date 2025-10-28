import React, { useRef, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useAnimation, useInView, Variants } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Zap, Users, Monitor, MessageSquare, FileText, Bot, UserPlus, ClipboardCheck, Search, CreditCard } from 'lucide-react';


const services = [
  {
    category: 'Sales & Leads',
    name: 'Lead Generation Autopilot',
    description: 'Automated lead capture and qualification that works 24/7, filling your pipeline with high-quality prospects.',
    icon: <Zap className="w-5 h-5 text-saas-orange" />,
  },
  {
    category: 'Sales & Leads',
    name: 'Lead Gen System',
    description: 'Custom systems to track and manage prospect engagement, ensuring no lead falls through.',
    icon: <Users className="w-5 h-5 text-saas-orange" />,
  },
  {
    category: 'AI & Content',
    name: 'AI-Powered Creative Studio',
    description: 'Instantly generate UGC ad creatives and variations to slash testing costs and boost conversion.',
    icon: <Monitor className="w-5 h-5 text-saas-orange" />,
  },
  {
    category: 'AI & Content',
    name: 'UGC Content Generation',
    description: 'Automated workflows for repurposing content and generating social media assets using AI.',
    icon: <MessageSquare className="w-5 h-5 text-saas-orange" />,
  },
  {
    category: 'AI & Content',
    name: 'SEO Content Writing Systems',
    description: 'AI-driven workflows that automate content drafts, SEO optimization, and publishing schedules.',
    icon: <FileText className="w-5 h-5 text-saas-orange" />,
  },
  {
    category: 'AI & Chatbots',
    name: 'Custom AI Agents',
    description: 'Building custom, intelligent AI agents capable of complex decision-making and task execution.',
    icon: <Bot className="w-5 h-5 text-saas-orange" />,
  },
  {
    category: 'AI & Chatbots',
    name: 'RAG Chatbots',
    description: 'Deploying custom, context-aware chatbots that access real-time business data for superior customer support.',
    icon: <MessageSquare className="w-5 h-5 text-saas-orange" />,
  },
  {
    category: 'Operations',
    name: 'HR Management System',
    description: 'Automation for candidate screening, onboarding, and internal team management.',
    icon: <Users className="w-5 h-5 text-saas-orange" />,
  },
  {
    category: 'Operations',
    name: 'Onboarding Systems',
    description: 'Seamless, automated onboarding workflows for new clients or employees.',
    icon: <UserPlus className="w-5 h-5 text-saas-orange" />,
  },
  {
    category: 'Operations',
    name: 'Monitoring Systems',
    description: 'Custom system monitoring and alerting to ensure 24/7 uptime and prevent failures.',
    icon: <ClipboardCheck className="w-5 h-5 text-saas-orange" />,
  },
  {
    category: 'Operations',
    name: 'Custom Research Systems',
    description: 'Automated data scraping and analysis to power market research and competitive intelligence.',
    icon: <Search className="w-5 h-5 text-saas-orange" />,
  },
  {
    category: 'Operations',
    name: 'Payment Collection Systems',
    description: 'Automated invoicing, reconciliation, and payment tracking for predictable cash flow.',
    icon: <CreditCard className="w-5 h-5 text-saas-orange" />,
  },
];

const Services = () => {
  // Add the shimmer animation to the global styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  return (
    <div className="min-h-screen bg-saas-black text-white">
      <Helmet>
        <title>Our Services | Unfazed AI - AI-Powered Business Automation</title>
        <meta 
          name="description" 
          content="Explore our comprehensive AI-powered services including lead generation, content creation, and custom AI solutions designed to transform your business operations." 
        />
        <meta name="keywords" content="AI services, lead generation, content creation, AI automation, business automation, AI solutions" />
        <meta property="og:title" content="AI-Powered Business Services | Unfazed AI" />
        <meta 
          property="og:description" 
          content="Transform your business with our AI-powered services including lead generation, content creation, and custom AI solutions." 
        />
        <meta property="og:url" content="https://unfazed-ai.online/services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://unfazed-ai.online/services" />
      </Helmet>
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="pt-16 md:pt-24 pb-8 md:pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Your Path to Unfazed <span className="text-saas-orange">24/7</span> Operations
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto px-2 sm:px-0">
              Our proven, three-step process to guarantee <span className="font-semibold text-saas-orange">ROI</span> and build custom, unbreakable <span className="font-semibold text-saas-orange">AI workflow </span>systems .
            </p>

            {/* Process Roadmap */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Phase 1 */}
              <div className="relative">
                <div className="glowing-border bg-saas-darkGray/30 backdrop-blur-sm rounded-xl p-4 sm:p-6 h-full flex flex-col items-center text-center border border-gray-800 hover:border-saas-orange/50 transition-colors">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-saas-orange/10 flex items-center justify-center mb-3 sm:mb-4">
                    <span className="text-saas-orange text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Deep Discovery</h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    We first understand your business and existing processes to pinpoint hidden inefficiencies and <span className="font-semibold text-white">90% time-loss</span> areas.
                  </p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="relative">
                <div className="glowing-border bg-saas-darkGray/30 backdrop-blur-sm rounded-xl p-4 sm:p-6 h-full flex flex-col items-center text-center border border-gray-800 hover:border-saas-orange/50 transition-colors">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-saas-orange/10 flex items-center justify-center mb-3 sm:mb-4">
                    <span className="text-saas-orange text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">System Design</h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    We design the blueprint identifying the exact points where AI agents and automation logic will be implemented to fix bottlenecks.
                  </p>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="relative">
                <div className="glowing-border bg-saas-darkGray/30 backdrop-blur-sm rounded-xl p-4 sm:p-6 h-full flex flex-col items-center text-center border border-gray-800 hover:border-saas-orange/50 transition-colors">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-saas-orange/10 flex items-center justify-center mb-3 sm:mb-4">
                    <span className="text-saas-orange text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Deploy & Guarantee</h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    We build, integrate, and launch the custom system, guaranteeing <span className="font-semibold text-white">24/7 operation</span> and a clear performance boost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-8 sm:py-10 md:py-12 bg-saas-black/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
                Core <span className="text-saas-orange">AI </span> & <span className="text-saas-orange"> Automation</span> Systems We Deploy
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto">
                Custom solutions tailored to your business needs, powered by cutting-edge AI and automation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => {
                const controls = useAnimation();
                const ref = useRef(null);
                const [isMobile, setIsMobile] = React.useState(false);
                
                React.useEffect(() => {
                  const handleResize = () => {
                    setIsMobile(window.innerWidth < 768);
                  };
                  handleResize(); // Set initial value
                  window.addEventListener('resize', handleResize);
                  return () => window.removeEventListener('resize', handleResize);
                }, []);
                
                const isInView = useInView(ref, { 
                  once: true, 
                  margin: isMobile ? "-20px" : "-100px" 
                });

                useEffect(() => {
                  if (isInView) {
                    controls.start('visible');
                  }
                }, [controls, isInView]);

                const cardVariants = {
                  hidden: { opacity: 0, y: 20 },
                  visible: (i: number) => ({
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: [0.4, 0, 0.2, 1] as const,
                      delay: i * 0.1
                    }
                  })
                };

                return (
                  <motion.div
                    key={index}
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={cardVariants}
                    custom={index}
                    className="relative group"
                  >
                    {/* Animated border */}
                    <div className="absolute inset-0 rounded-xl overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-saas-orange/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                        style={{
                          background: 'linear-gradient(90deg, transparent, rgba(255, 120, 0, 0.2), transparent)',
                          animation: 'shimmer 3s infinite',
                          height: '100%',
                          width: '100%',
                        }}
                      />
                    </div>
                    {/* Card content */}
                    <div className="relative bg-saas-darkGray/30 border border-saas-darkGray/50 rounded-xl p-4 sm:p-6 h-full group-hover:border-saas-orange/30 transition-all duration-300">
                      <div className="flex items-start">
                        <motion.div 
                          className="bg-saas-orange/10 p-1.5 sm:p-2 rounded-lg mr-3 sm:mr-4"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {service.icon}
                        </motion.div>
                      <div>
                        <motion.span 
                          className="text-[10px] xs:text-xs font-medium text-saas-orange uppercase tracking-wider inline-block"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                        >
                          {service.category}
                        </motion.span>
                        <motion.h3 
                          className="text-sm sm:text-base md:text-lg font-semibold text-white mt-0.5 sm:mt-1"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                        >
                          {service.name}
                        </motion.h3>
                        <motion.p 
                          className="text-xs sm:text-sm text-gray-300 mt-1.5 sm:mt-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                        >
                          {service.description}
                        </motion.p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};


export default Services;