import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { ArrowRight, Check, Zap, Clock, BarChart, Shield, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-saas-black text-white">
      <Navbar />
      <main className="pt-24 space-y-12 md:space-y-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 md:pt-24">
          <div className="absolute inset-0 bg-gradient-to-b from-saas-black to-transparent -z-10 h-[700px] md:h-[800px]"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <div className="max-w-4xl mx-auto text-center px-2 sm:px-0">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
                We Build the Engine for Your{' '}
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  24/7 Business
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-6 px-2 sm:px-0">
                Stop losing hours to manual tasks. Our team of certified <span className="font-semibold text-saas-orange">Automation</span> and <span className="font-semibold text-saas-orange">AI</span> specialists dedicated to replacing your operational bottlenecks with scalable, guaranteed automation systems.
              </p>
              
              {/* CTA Button */}
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    const element = document.getElementById('contact-form');
                    if (element) {
                      const yOffset = -80; // Adjust for fixed header
                      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }}
                  className="bg-saas-orange hover:bg-orange-600 text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-200 text-sm sm:text-base inline-flex items-center justify-center w-full sm:w-auto"
                >
                  Get Unfazed Today
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* The Unfazed Origin Section */}
        <section className="py-10 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  From Manual Chaos to Unbreakable Systems
                </h2>
                <div className="w-20 h-1 bg-saas-orange mx-auto"></div>
              </div>
              
              <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:items-center">
                <div className="space-y-4 sm:space-y-6 mt-6 md:mt-0">
                  <p className="text-gray-300 text-base sm:text-lg">
                    We founded Unfazed because we saw too many businesses lose <span className="font-bold text-saas-orange">40%</span> of their potential profit to repetitive, error-prone tasks. Simple tools couldn't handle the complexity. We specialize in the powerful backend logic of <span className="font-bold text-saas-orange">Automations & AI </span> to deliver custom, high-impact workflows that never break.
                  </p>
                  <p className="text-gray-300 text-base sm:text-lg">
                    Our unique expertise lies in blending <span className="font-bold text-saas-orange">Automations </span> with advanced AI models. This allows us to build systems that don't just follow rules - they think, decide, and act, ensuring your business, operations, and data run perfectly, <span className="font-bold text-saas-orange">24/7</span>, with <span className="font-bold text-saas-orange">95%</span> accuracy.
                  </p>
                </div>
                <div className="relative h-56 sm:h-64 md:h-96 rounded-xl overflow-hidden border border-gray-800">
                  <div className="absolute inset-0">
                    <img 
                      src="/visual-representation.gif" 
                      alt="Visual representation of our automation process"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-saas-black/60 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                        <p className="text-sm text-white font-medium"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-8 sm:py-12 bg-saas-black/50">
          <style dangerouslySetInnerHTML={{
            __html: `
              @keyframes border-glow {
                0%, 100% {
                  border-color: rgba(255, 138, 0, 0.3);
                  box-shadow: 0 0 5px rgba(255, 138, 0, 0.1);
                }
                25% {
                  border-color: rgba(229, 46, 113, 0.3);
                  box-shadow: 0 0 5px rgba(229, 46, 113, 0.1);
                }
                
                50% {
                  border-color: rgba(35, 166, 213, 0.3);
                  box-shadow: 0 0 5px rgba(35, 166, 213, 0.1);
                }
                75% {
                  border-color: rgba(35, 213, 171, 0.3);
                  box-shadow: 0 0 5px rgba(35, 213, 171, 0.1);
                }
              }
              .glowing-border {
                position: relative;
                border: 1px solid transparent;
                border-radius: 0.75rem;
                animation: border-glow 12s linear infinite;
                background: transparent;
                transition: all 0.3s ease;
              }
              @media (min-width: 768px) {
                .glowing-border:hover {
                  transform: translateY(-1px);
                  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
                }
              }
            `
          }} />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                We Don't Just Save Time—We Guarantee <span className="text-saas-orange">ROI</span>
              </h2>
              <div className="w-16 h-0.5 bg-saas-orange mx-auto mb-6 sm:mb-8"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 md:gap-8 text-left">
                {[
                  {
                    id: 'time-reclaimed',
                    icon: <Clock className="h-6 w-6 text-saas-orange" />,
                    title: "90% Time Reclaimed",
                    description: "We guarantee the elimination of 90% of your identified admin work."
                  },
                  {
                    id: 'unbreakable-flow',
                    icon: <Shield className="h-6 w-6 text-saas-orange" />,
                    title: "Unbreakable Flow",
                    description: "Certified Automation architecture ensures your systems run non-stop, without vendor lock-in."
                  },
                  {
                    id: 'scalable-design',
                    icon: <TrendingUp className="h-6 w-6 text-saas-orange" />,
                    title: "Scalable by Design",
                    description: "We build the final solution, capable of handling 100x volume without additional staffing."
                  },
                  {
                    id: 'financial-impact',
                    icon: <BarChart className="h-6 w-6 text-saas-orange" />,
                    title: "Financial Impact",
                    description: "Every project comes with a clear ROI calculation, focusing on profit maximization."
                  }
                ].map((item) => (
                  <div key={item.id} className="glowing-border bg-saas-black/30 p-3 sm:p-6 rounded-lg border border-gray-800 hover:border-saas-orange/30 transition-all duration-300 h-full">
                    <div className="flex items-start space-x-4">
                      <div className="bg-saas-orange/10 p-2 rounded-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{item.title}</h3>
                        <p className="text-gray-400 text-sm sm:text-base">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="pt-1.5 sm:pt-2">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <TestimonialsSection />
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="pt-5 sm:pt-8 bg-gradient-to-b from-saas-black to-saas-black/90">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <CtaSection />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
