import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 w-full max-w-6xl z-50 px-4 sm:px-6">
      <div className="w-full">
        <div className="animated-border">
          <nav className="bg-saas-black/80 backdrop-blur-lg rounded-full border border-saas-darkGray/20 shadow-lg">
            <div className="w-full px-6 sm:px-8">
              <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo - Left side */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-saas-orange to-amber-500 bg-clip-text text-transparent">
                  Unfazed
                </span>
              </Link>
            </div>

            {/* Navigation - Right side */}
            <div className="hidden md:flex items-center justify-end flex-1 space-x-8">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-4 py-2 text-sm font-medium text-white hover:text-saas-orange transition-colors rounded-full"
              >
                Home
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('services-section');
                  if (element) {
                    const yOffset = -80; // Adjust this value based on your navbar height
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className="px-4 py-2 text-sm font-medium text-white hover:text-saas-orange transition-colors rounded-full"
              >
                Services
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('about-section');
                  if (element) {
                    const yOffset = -80;
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className="px-4 py-2 text-sm font-medium text-white hover:text-saas-orange transition-colors rounded-full"
              >
                About Us
              </button>
              <div className="hidden md:block ml-4">
                <Button 
                  variant="outline" 
                  onClick={() => {
                    const element = document.getElementById('contact-form');
                    if (element) {
                      const yOffset = -80; // Adjust this value based on your navbar height
                      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }}
                  className="border-saas-orange text-saas-orange hover:bg-saas-orange/10 hover:text-saas-orange transition-colors"
                >
                  <span className="inline-flex items-center">
                    <Phone className="w-4 h-4 mr-2 animate-vibrate origin-center" />
                    Let's talk
                  </span>
                </Button>
              </div>
            </div>

            {/* Mobile menu and CTA buttons */}
            <div className="flex items-center space-x-4 md:hidden">
              <Button 
                variant="outline" 
                onClick={() => {
                  const element = document.getElementById('contact-form');
                  if (element) {
                    const yOffset = -80;
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className="md:hidden border-saas-orange text-saas-orange hover:bg-saas-orange/10 hover:text-saas-orange transition-colors h-9 px-3 text-xs sm:text-sm"
              >
                <span className="inline-flex items-center">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 animate-vibrate origin-center" />
                  Let's talk
                </span>
              </Button>
              
              <button
                onClick={toggleMenu}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-saas-darkGray/95 rounded-b-xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  toggleMenu();
                }}
                className="w-full text-left px-3 py-2 text-base font-medium text-white hover:bg-saas-darkGray/50 rounded-md"
              >
                Home
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('services-section');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    toggleMenu();
                  }
                }}
                className="w-full text-left px-3 py-2 text-base font-medium text-white hover:bg-saas-darkGray/50 rounded-md"
              >
                Services
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('about-section');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    toggleMenu();
                  }
                }}
                className="w-full text-left px-3 py-2 text-base font-medium text-white hover:bg-saas-darkGray/50 rounded-md"
              >
                About Us
              </button>
              <Button 
                variant="outline" 
                className="w-full mt-2 border-saas-orange text-saas-orange hover:bg-saas-orange/10 hover:text-saas-orange transition-colors"
                onClick={() => {
                  const element = document.getElementById('contact-form');
                  if (element) {
                    const yOffset = -80;
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                    toggleMenu();
                  }
                }}
              >
                <span className="inline-flex items-center">
                  <Phone className="w-4 h-4 mr-2 animate-vibrate origin-center" />
                  Let's talk
                </span>
              </Button>
            </div>
          </div>
        )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;