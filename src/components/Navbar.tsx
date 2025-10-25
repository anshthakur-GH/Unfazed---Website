import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-4xl z-50 px-4">
      <div className="w-full">
        <div className="animated-border">
          <nav className="bg-saas-black/80 backdrop-blur-lg rounded-full border border-saas-darkGray/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between h-16 items-center">
            {/* Logo - Left side */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-saas-orange to-amber-500 bg-clip-text text-transparent">
                  Unfazed
                </span>
              </Link>
            </div>

            {/* Navigation - Right side */}
            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/"
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                  location.pathname === "/" ? "text-saas-orange" : "text-white hover:text-saas-orange"
                }`}
              >
                Home
              </Link>
              <Link
                to="/roadmap"
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                  location.pathname === "/roadmap" ? "text-saas-orange" : "text-white hover:text-saas-orange"
                }`}
              >
                Roadmap
              </Link>
              <Link
                to="/pricing"
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                  location.pathname === "/pricing" ? "text-saas-orange" : "text-white hover:text-saas-orange"
                }`}
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                  location.pathname === "/contact" ? "text-saas-orange" : "text-white hover:text-saas-orange"
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
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
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-white hover:bg-saas-darkGray/50 rounded-md"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/roadmap"
                className="block px-3 py-2 text-base font-medium text-white hover:bg-saas-darkGray/50 rounded-md"
                onClick={toggleMenu}
              >
                roadmap
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 text-base font-medium text-white hover:bg-saas-darkGray/50 rounded-md"
                onClick={toggleMenu}
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium text-white hover:bg-saas-darkGray/50 rounded-md"
                onClick={toggleMenu}
              >
                Contact
              </Link>
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
