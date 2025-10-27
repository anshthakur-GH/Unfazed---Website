import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Add smooth scrolling to the HTML element when the component mounts
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Clean up by removing the style when the component unmounts
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-saas-black text-white overflow-x-hidden">
      <Navbar />
      <main className="will-change-transform">
        <HeroSection />
        <div className="transform-gpu">
          <TestimonialsSection />
          <FaqSection />
          <CtaSection />
        </div>
      </main>
      <Footer />
      
      {/* Add smooth scrolling styles */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        * {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
        }
        *::-webkit-scrollbar {
          width: 8px;
        }
        *::-webkit-scrollbar-track {
          background: transparent;
        }
        *::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default Index;
