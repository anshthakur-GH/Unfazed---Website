import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-saas-black to-[#1c160c] overflow-hidden min-h-[90vh] flex items-center pt-24 md:pt-28">
      {/* Orange glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-saas-orange opacity-10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-orange-700 opacity-15 rounded-full blur-[80px]"></div>
      <div className="absolute top-20 right-1/4 w-[250px] h-[250px] bg-orange-400 opacity-10 rounded-full blur-[70px]"></div>
      
      <div className="section-container relative z-10 text-center">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
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
            Save 80% Time, Earn 24/7 with <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Automations </span> &  <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">AI</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            We design AI-powered automation workflows that save time, cut costs, and scale your business 24/7 — turning repetitive tasks into profit-driving systems while you sleep.
            </p>
            
            <div className="flex justify-center">
              <Button className="bg-saas-orange hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 text-base">
                Get Unfazed Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="mt-10 flex items-center justify-center gap-4">
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
          </div>
          
          {/* <div className="mt-16 animate-fade-in" style={{animationDelay: '0.5s'}}>
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-saas-orange to-orange-700 blur-xl opacity-20 rounded-xl"></div>
              <div className="relative bg-saas-darkGray rounded-xl border border-saas-orange/20 p-2 card-shadow transform transition-all duration-500 hover:scale-[1.01] hover:shadow-orange-500/10 hover:shadow-lg">
                <img 
                  src="./public/hero.png"
                  alt="Dashboard Preview"
                  className="rounded-lg w-full"
                  onError={(e) => {
                    console.error('Error loading image:', e);
                    e.currentTarget.src = 'https://placehold.co/1200x600/1a1a1a/ff6b35?text=Dashboard+Preview';
                  }}
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
      
      {/* Abstract shapes */}

    </div>
  );
};

export default HeroSection;
