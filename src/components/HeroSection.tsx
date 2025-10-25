import React, { Suspense, lazy } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from 'lucide-react';

// Lazy load the LogoSlideshow component
const LogoSlideshow = lazy(() => import('./LogoSlideshow'));

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-saas-black to-[#1c160c] overflow-hidden pt-24">
      {/* Hero Content */}
      <div className="relative z-10">
        <div className="section-container py-12 md:py-16">
          <div className="flex flex-col items-center justify-center max-w-4xl mx-auto text-center mb-16">
            <div className="animate-fade-in">
              <div className="inline-flex items-center bg-saas-orange/10 text-saas-orange px-4 py-2 rounded-full text-sm font-medium mb-6 border border-saas-orange/20">
                <div className="flex items-center mr-2">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                  <div className="relative h-4 w-4">
                    <Star className="h-4 w-4 text-gray-300" />
                    <div className="absolute left-0 top-0 w-1/2 h-full overflow-hidden">
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                  </div>
                </div>
                <span className="ml-1">4.5/5</span>
                <span className="text-saas-orange/70 ml-1">Customer Rating</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                Save 80% Time, Earn 24/7 with <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Automations</span> & <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">AI</span>
              </h1>
              
              <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                We design AI-powered automation workflows that save time, cut costs, and scale your business 24/7 — turning repetitive tasks into profit-driving systems while you sleep.
              </p>
              
              <div className="flex justify-center mb-12">
                <Button className="bg-saas-orange hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 text-base">
                  Get Unfazed Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-4 mb-40">
                <div className="flex -space-x-3">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" 
                    className="w-10 h-10 rounded-full border-2 border-saas-black" alt="User" />
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" 
                    className="w-10 h-10 rounded-full border-2 border-saas-black" alt="User" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64" 
                    className="w-10 h-10 rounded-full border-2 border-saas-black" alt="User" />
                </div>
                <p className="text-sm text-gray-300">
                  <span className="font-semibold text-saas-orange">250+</span> businesses using our automations
                </p>
              </div>
              
              {/* Logo Slideshow */}
              <div className="w-full mb-16">
                <Suspense fallback={<div className="h-20"></div>}>
                  <LogoSlideshow />
                </Suspense>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose <span className="text-saas-orange">Unfazed?</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Choose the plan that fits your business needs. No hidden fees, no surprises.
              </p>
            </div>

            <div className="w-full max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
                {/* The Old Way */}
                <div className="bg-saas-black/50 backdrop-blur-md rounded-xl p-8 border border-gray-800 flex flex-col h-full">
                  <div className="flex-1 flex flex-col">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold">The Old Way</h3>
                    </div>
                    <ul className="space-y-4 flex-1">
                  {['Time: Wasted on manual tasks', 'Scale: Growth is capped by human capacity', 'Downtime: Processes stop at 5 PM', 'Support: Costly, slow human-only fixes', 'Workflows: Brittle, disconnected systems'].map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-200 text-base">
                      <span className="text-saas-orange mr-3 mt-0.5 text-xl">×</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                    </ul>
                  </div>
                </div>

                {/* The Unfazed Way - Highlighted */}
                <div className="relative bg-gradient-to-b from-saas-orange/20 to-saas-black/50 rounded-xl p-8 border border-saas-orange/30 flex flex-col h-full">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-saas-orange text-black text-xs font-medium px-4 py-1.5 rounded-full whitespace-nowrap">
                    MOST POPULAR
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold">The Unfazed Way</h3>
                    </div>
                    <ul className="space-y-4 flex-1">
                  {[
                    'Time: 80% admin time eliminated',
                    'Scale:24/7 Unlimited capacity',
                    'Accuracy: 99.9% data-integrity',
                    'Uptime: Non-stop earning while you sleep',
                    'Support: Automated monitoring and priority-alerts',
                    'Workflows: Unbreakable AI-flows',
                    'CTA: Unlock 24/7 Autopilot'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-200 text-base">
                      <span className="text-saas-orange mr-3 mt-0.5 text-xl">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                    </ul>
                    <div className="mt-8">
                      <Button className="w-full bg-saas-orange hover:bg-saas-orange/90 h-12 text-base font-medium">
                        Get Unfazed Today
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Powerful Features Section */}
          <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
               Where We Drive <span className="text-saas-orange">24/7</span> Growth
              </h2>
              <p className="text-white max-w-2xl mx-auto font-medium">
                Explore our comprehensive suite of features designed to take your business to the next level
              </p>
            </div> 

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
              {/* Feature 1 */}
              <div className="relative group">
                <div className="overflow-hidden rounded-xl h-full shadow-lg">
                  <div className="bg-black p-8 flex flex-col h-full">
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-saas-orange/10 rounded-lg flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-saas-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white">Lead Generation</h3>
                      </div>
                      <p className="text-gray-300 text-sm">Automated lead capture and qualification to fill your pipeline with high-quality prospects 24/7.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="relative group">
                <div className="overflow-hidden rounded-xl h-full shadow-lg">
                  <div className="bg-black p-8 flex flex-col h-full">
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-saas-orange/10 rounded-lg flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-saas-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white">Project Management</h3>
                      </div>
                      <p className="text-gray-300 text-sm">Streamline your workflow with automated task tracking and team collaboration tools.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="relative group">
                <div className="overflow-hidden rounded-xl h-full shadow-lg">
                  <div className="bg-black p-8 flex flex-col h-full">
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-saas-orange/10 rounded-lg flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-saas-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white">Financial Automation</h3>
                      </div>
                      <p className="text-gray-300 text-sm">Automate invoicing, expense tracking, and financial reporting for better cash flow management.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="relative group">
                <div className="overflow-hidden rounded-xl h-full shadow-lg">
                  <div className="bg-black p-8 flex flex-col h-full">
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-saas-orange/10 rounded-lg flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-saas-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white">Customer Support</h3>
                      </div>
                      <p className="text-gray-300 text-sm">24/7 automated customer support with AI-powered responses and ticket management.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-saas-orange opacity-10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-orange-700 opacity-15 rounded-full blur-[80px]"></div>
        <div className="absolute top-20 right-1/4 w-[250px] h-[250px] bg-orange-400 opacity-10 rounded-full blur-[70px]"></div>
      </div>
    </div>
  );
};

export default HeroSection;
