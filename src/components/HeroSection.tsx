import React, { Suspense, lazy } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Mic, Users, Zap, Search, UserPlus, MessageSquare, FileText, CreditCard, Headphones, Monitor, Bot, ClipboardCheck, FileCode } from 'lucide-react';

// Lazy load the LogoSlideshow component
const LogoSlideshow = lazy(() => import('./LogoSlideshow'));

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden pt-20 md:pt-24">
      {/* Top Gradient Section */}
      <div className="absolute inset-0 bg-gradient-to-b from-saas-black to-transparent -z-10 h-[700px] md:h-[800px]"></div>
      
      {/* Hero Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              {/* Rating Badge */}
              <div className="inline-flex items-center bg-saas-orange/10 text-saas-orange px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-saas-orange/20">
                <div className="flex items-center mr-1.5 sm:mr-2">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
                  ))}
                  <div className="relative h-3 w-3 sm:h-4 sm:w-4">
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 text-gray-300" />
                    <div className="absolute left-0 top-0 w-1/2 h-full overflow-hidden">
                      <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
                    </div>
                  </div>
                </div>
                <span className="ml-0.5 sm:ml-1">4.5/5</span>
                <span className="text-saas-orange/70 ml-0.5 sm:ml-1 text-xs sm:text-sm">Customer Rating</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
                Save 80% Time, Earn 24/7 with{' '}
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Automations
                </span>{' '}
                &{' '}
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  AI
                </span>
              </h1>
              
              {/* Subheading */}
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8 px-2 sm:px-0">
                We design AI-powered automation workflows that save time, cut costs, and scale your business 24/7 — turning repetitive tasks into profit-driving systems while you sleep.
              </p>
              
              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 sm:mb-12">
                <a 
                  href="#contact-form"
                  className="bg-saas-orange hover:bg-orange-600 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-all duration-200 text-sm sm:text-base inline-flex items-center justify-center"
                >
                  Get Unfazed Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a 
                  href="#how-it-works"
                  className="bg-transparent hover:bg-white/5 text-white font-medium py-3 px-6 sm:px-8 rounded-lg transition-all duration-200 text-sm sm:text-base border border-gray-700 inline-flex items-center justify-center"
                >
                  How It Works
                </a>
              </div>
              
              {/* Social Proof */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-16 sm:mb-24 md:mb-32 lg:mb-40">
                <div className="flex -space-x-2 sm:-space-x-3">
                  <img 
                    src="/logo1.png" 
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-saas-black object-cover" 
                    alt="Client logo 1" 
                    loading="lazy"
                    width={40}
                    height={40}
                  />
                  <img 
                    src="/logo2.png" 
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-saas-black object-cover" 
                    alt="Client logo 2"
                    loading="lazy"
                    width={40}
                    height={40}
                  />
                  <img 
                    src="/logo3.png" 
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-saas-black object-cover" 
                    alt="Client logo 3"
                    loading="lazy"
                    width={40}
                    height={40}
                  />
                </div>
                <p className="text-xs sm:text-sm text-gray-300 text-center sm:text-left">
                  <span className="font-semibold text-saas-orange">250+</span> businesses using our automations
                </p>
              </div>
              
              {/* Logo Slideshow */}
              <div className="w-full mb-12 sm:mb-16">
                <Suspense fallback={<div className="h-16 sm:h-20"></div>}>
                  <LogoSlideshow />
                </Suspense>
              </div>
            </div>
          </div>

          {/* Why Choose Unfazed Section */}
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-20 relative z-10">
            {/* Glowing Border Animation */}
            <style jsx>{`
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
                border-radius: 1rem;
                animation: border-glow 12s linear infinite;
                background: transparent;
                transition: all 0.3s ease;
              }
              .glowing-border:hover {
                transform: translateY(-1px);
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
              }
            `}</style>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Why Choose <span className="text-saas-orange">Unfazed?</span>
              </h2>
              <p className="text-white max-w-2xl mx-auto font-medium">
                See how we stack up against traditional solutions
              </p>
            </div>

            <div className="relative">
              <div className="glowing-border bg-saas-black/50 backdrop-blur-sm rounded-2xl overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-12 bg-saas-black/80 border-b border-gray-800">
                <div className="col-span-5 p-6"></div>
                <div className="col-span-3 p-6 text-center">
                  <h3 className="text-lg font-bold text-white">Traditional Solutions</h3>
                  <p className="text-sm text-gray-400 mt-1">Manual or Outdated</p>
                </div>
                <div className="col-span-4 p-6 text-center bg-saas-orange/10">
                  <h3 className="text-lg font-bold text-saas-orange">Unfazed</h3>
                  <p className="text-sm text-saas-orange/80 mt-1">AI-Powered Automation</p>
                </div>
              </div>

              {/* Table Rows */}
              {[
                {
                  feature: 'Implementation Time',
                  traditional: 'Weeks to Months',
                  unfazed: 'Days',
                  icon: <svg className="w-5 h-5 text-saas-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://wwwwww.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                },
                {
                  feature: 'Cost Efficiency',
                  traditional: 'High Overhead',
                  unfazed: 'Cost-Effective',
                  icon: <svg className="w-5 h-5 text-saas-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                },
                {
                  feature: 'Scalability',
                  traditional: 'Limited by Resources',
                  unfazed: 'Infinitely Scalable',
                  icon: <svg className="w-5 h-5 text-saas-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                },
                {
                  feature: 'Availability',
                  traditional: 'Business Hours',
                  unfazed: '24/7/365',
                  icon: <svg className="w-5 h-5 text-saas-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                },
                {
                  feature: 'Human Error',
                  traditional: 'Common',
                  unfazed: 'Eliminated',
                  icon: <svg className="w-5 h-5 text-saas-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                }
              ].map((item, index) => (
                <div key={index} className="grid grid-cols-12 border-b border-gray-800 last:border-b-0 hover:bg-saas-black/30 transition-colors">
                  <div className="col-span-5 p-6 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-saas-orange/10 flex items-center justify-center mr-4">
                      {item.icon}
                    </div>
                    <span className="font-medium text-white">{item.feature}</span>
                  </div>
                  <div className="col-span-3 p-6 flex items-center justify-center text-center text-gray-400">
                    {item.traditional}
                  </div>
                  <div className="col-span-4 p-6 flex items-center justify-center text-center text-saas-orange font-medium bg-saas-orange/5">
                    {item.unfazed}
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>

          {/* Where We Drive 24/7 Growth */}
          <div id="services-section" className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 py-20 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Where We Drive <span className="text-saas-orange">24/7 </span>Growth
              </h2>
              <p className="text-white max-w-2xl mx-auto font-medium">
                Automating your success around the clock with precision and care
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[2000px] mx-auto">
              {/* Lead Generation Card */}
              <div className="glowing-border bg-saas-black/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-saas-orange/50 transition-colors h-full">
                <div className="w-12 h-12 rounded-lg bg-saas-orange/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-saas-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M12 16h.01M16 12h.01M8 12h.01M3 20h18a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Lead Generation</h3>
                <p className="text-gray-300 text-sm">Automated lead capture and qualification that works while you sleep, filling your pipeline with high-quality prospects.</p>
              </div>

              {/* Project Management Card */}
              <div className="glowing-border bg-saas-black/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-saas-orange/50 transition-colors h-full">
                <div className="w-12 h-12 rounded-lg bg-saas-orange/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-saas-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI-Powered Creative Studio </h3>
                <p className="text-gray-300 text-sm">Instantly generate UGC ad creatives and campaign variations using specialized AI. Slash testing costs and boost conversion rates.</p>
              </div>
              
              {/* Your Tailored Automation Roadmap */}
              <div className="glowing-border md:col-span-2 bg-saas-black/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 transition-colors w-full">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  Your <span className="text-saas-orange">Automation </span>Roadmap
                </h3>
                
                <div className="py-4">
                  <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-6">
                    {/* Step 1 */}
                    <div className="relative pl-12 md:pl-0">
                      <div className="flex items-center mb-2">
                        <div className="w-6 h-6 rounded-full bg-saas-orange/10 flex items-center justify-center mr-2">
                          <span className="text-saas-orange font-bold text-sm">1</span>
                        </div>
                        <h4 className="text-lg font-bold text-white">Discover & Design</h4>
                      </div>
                      <p className="text-gray-300 text-sm pl-8 md:pl-8">We map your business, pinpointing inefficiencies to design custom AI Automation solution.</p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative pl-12 md:pl-0">
                      <div className="flex items-center mb-2">
                        <div className="w-6 h-6 rounded-full bg-saas-orange/10 flex items-center justify-center mr-2">
                          <span className="text-saas-orange font-bold text-sm">2</span>
                        </div>
                        <h4 className="text-lg font-bold text-white">Build & Integrate</h4>
                      </div>
                      <p className="text-gray-300 text-sm pl-8 md:pl-8">Our experts build bespoke workflows, seamlessly integrating AI and your existing systems.</p>
                    </div>

                    {/* Step 3 */}
                    <div className="relative pl-12 md:pl-0">
                      <div className="flex items-center mb-2">
                        <div className="w-6 h-6 rounded-full bg-saas-orange/10 flex items-center justify-center mr-2">
                          <span className="text-saas-orange font-bold text-sm">3</span>
                        </div>
                        <h4 className="text-lg font-bold text-white">Deploy & Optimize</h4>
                      </div>
                      <p className="text-gray-300 text-sm pl-8 md:pl-8">We launch, monitor, and refine for reliability and guaranteed performance.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Button className="bg-saas-orange hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 text-sm">
                    Start Your Unfazed Journey
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Service Tags Slideshow */}
          <div className="w-full pt-2 pb-4 overflow-hidden">
            {/* First row - Right to Left */}
            <div className="flex whitespace-nowrap mb-6">
              <div className="animate-slideRightToLeft flex space-x-4">
                {[
                  { name: 'Voice Agents', icon: <Mic className="w-4 h-4 mr-2 text-saas-orange" /> },
                  { name: 'HR Management System', icon: <Users className="w-4 h-4 mr-2 text-saas-orange" /> },
                  { name: 'Lead Gen System', icon: <Zap className="w-4 h-4 mr-2 text-saas-orange" /> },
                  { name: 'SEO Audit Workflow', icon: <Search className="w-4 h-4 mr-2 text-saas-orange" /> },
                  { name: 'Onboarding Systems', icon: <UserPlus className="w-4 h-4 mr-2 text-saas-orange" /> },
                  { name: 'UGC Content Generation', icon: <MessageSquare className="w-4 h-4 mr-2 text-saas-orange" /> },
                  { name: 'RAG Chatbots', icon: <Bot className="w-4 h-4 mr-2 text-saas-orange" /> },
                  { name: 'SEO Content Writing Systems ', icon: <FileText className="w-4 h-4 mr-2 text-saas-orange" /> },
                  { name: 'Payment Collection Systems', icon: <CreditCard className="w-4 h-4 mr-2 text-saas-orange" /> }
                ].map((service, i) => (
                  <div key={`row1-${i}`} className="inline-flex items-center px-4 py-2.5 bg-saas-black/70 backdrop-blur-sm rounded-full border border-gray-800 text-sm font-medium text-gray-200 hover:border-saas-orange/50 transition-colors">
                    {service.icon}
                    {service.name}
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {[
                  { name: 'Voice Agents', icon: <Mic className="w-4 h-4 mr-2 text-saas-orange" /> },
                  { name: 'HR Management System', icon: <Users className="w-4 h-4 mr-2 text-saas-orange" /> },
                  { name: 'Lead Gen System', icon: <Zap className="w-4 h-4 mr-2 text-saas-orange" /> },
                  { name: 'SEO Audit Workflow', icon: <Search className="w-4 h-4 mr-2 text-saas-orange" /> },
                  { name: 'Onboarding Systems', icon: <UserPlus className="w-4 h-4 mr-2 text-saas-orange" /> },
                  { name: 'UGC Content Generation', icon: <MessageSquare className="w-4 h-4 mr-2 text-saas-orange" /> },
                  { name: 'RAG Chatbots', icon: <Bot className="w-4 h-4 mr-2 text-saas-orange" /> },
                  { name: 'SEO Content Writing Systems ', icon: <FileText className="w-4 h-4 mr-2 text-saas-orange" /> },
                  { name: 'Payment Collection Systems', icon: <CreditCard className="w-4 h-4 mr-2 text-saas-orange" /> }
                ].map((service, i) => (
                  <div key={`row1-dup-${i}`} className="inline-flex items-center px-4 py-2.5 bg-saas-black/70 backdrop-blur-sm rounded-full border border-gray-800 text-sm font-medium text-gray-200 hover:border-saas-orange/50 transition-colors">
                    {service.icon}
                    {service.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Second row - Left to Right */}
            <div className="flex whitespace-nowrap">
                            <div className="animate-slideLeftToRight flex space-x-4">
                {[
                  { name: 'Customer Support Agents', icon: <Headphones className="w-4 h-4 mr-2 text-saas-orange" /> },
                  { name: 'AD Creatives Systems', icon: <Monitor className="w-4 h-4 mr-2 text-saas-orange" /> },
                  { name: 'Custom CRMs', icon: <Users className="w-4 h-4 mr-2 text-saas-orange" /> },
                  { name: 'Custom Chatbots', icon: <MessageSquare className="w-4 h-4 mr-2 text-saas-orange" /> },
                  { name: 'Custom Research Systems', icon: <Search className="w-4 h-4 mr-2 text-saas-orange" /> },
                  { name: 'Youtube Automation', icon: <Monitor className="w-4 h-4 mr-2 text-saas-orange" /> },
                  { name: 'Social Media Automation', icon: <MessageSquare className="w-4 h-4 mr-2 text-saas-orange" /> },
                  { name: 'Custom AI Agents ', icon: <FileText className="w-4 h-4 mr-2 text-saas-orange" /> },
                  { name: 'Monitoring Systems', icon: <ClipboardCheck className="w-4 h-4 mr-2 text-saas-orange" /> },
                  { name: 'Document Management Systems ', icon: <FileCode className="w-4 h-4 mr-2 text-saas-orange" /> }
                ].map((service, i) => (
                  <div key={`row2-${i}`} className="inline-flex items-center px-4 py-2.5 bg-saas-black/70 backdrop-blur-sm rounded-full border border-gray-800 text-sm font-medium text-gray-300 hover:border-saas-orange/50 transition-colors">
                    {service.icon}
                    {service.name}
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {[
                  { name: 'Customer Support Agents', icon: <Headphones className="w-4 h-4 mr-2 text-saas-orange" /> },
                  { name: 'AD Creatives Systems', icon: <Monitor className="w-4 h-4 mr-2 text-saas-orange" /> },
                  { name: 'Custom CRMs', icon: <Users className="w-4 h-4 mr-2 text-saas-orange" /> },
                  { name: 'Custom Chatbots', icon: <MessageSquare className="w-4 h-4 mr-2 text-saas-orange" /> },
                  { name: 'Custom Research Systems', icon: <Search className="w-4 h-4 mr-2 text-saas-orange" /> },
                  { name: 'Youtube Automation', icon: <Monitor className="w-4 h-4 mr-2 text-saas-orange" /> },
                  { name: 'Social Media Automation', icon: <MessageSquare className="w-4 h-4 mr-2 text-saas-orange" /> },
                  { name: 'Custom AI Agents ', icon: <FileText className="w-4 h-4 mr-2 text-saas-orange" /> },
                  { name: 'Monitoring Systems', icon: <ClipboardCheck className="w-4 h-4 mr-2 text-saas-orange" /> },
                  { name: 'Document Management Systems ', icon: <FileCode className="w-4 h-4 mr-2 text-saas-orange" /> }
                ].map((service, i) => (
                  <div key={`row2-dup-${i}`} className="inline-flex items-center px-4 py-2.5 bg-saas-black/70 backdrop-blur-sm rounded-full border border-gray-800 text-sm font-medium text-gray-300 hover:border-saas-orange/50 transition-colors">
                    {service.icon}
                    {service.name}
                  </div>
                ))}
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
