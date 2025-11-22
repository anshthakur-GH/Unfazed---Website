import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

// Import all logo images using Vite's import syntax
import logo1 from '../../public/logo1.png';
import logo2 from '../../public/logo2.png';
import logo3 from '../../public/logo3.png';
import logo4 from '../../public/logo4.png';
import logo5 from '../../public/logo5.png';
import logo6 from '../../public/logo6.png';
import logo7 from '../../public/logo7.png';
import logo8 from '../../public/logo8.png';
import logo9 from '../../public/logo9.png';
import logo10 from '../../public/logo10.png';
import logo11 from '../../public/logo11.png';
const logos = [
  { id: 1, src: logo1, alt: 'Logo 1', className: 'h-12 md:h-16' },
  { id: 2, src: logo2, alt: 'Logo 2', className: 'h-12 md:h-16' },
  { id: 3, src: logo3, alt: 'Logo 3', className: 'h-12 md:h-16' },
  { id: 4, src: logo4, alt: 'Logo 4', className: 'h-12 md:h-16' },
  { id: 5, src: logo5, alt: 'Logo 5', className: 'h-12 md:h-16' },
  { id: 6, src: logo6, alt: 'Logo 6', className: 'h-16 md:h-20' },
  { id: 7, src: logo7, alt: 'Logo 7', className: 'h-16 md:h-20' },
  { id: 8, src: logo8, alt: 'Logo 8', className: 'h-16 md:h-20' },
  { id: 9, src: logo9, alt: 'Logo 9', className: 'h-16 md:h-20' },
  { id: 10, src: logo10, alt: 'Logo 10', className: 'h-16 md:h-20' },
  { id: 11, src: logo11, alt: 'Logo 11', className: 'h-16 md:h-20' }
];

const LogoSlideshow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number>();
  const scrollAmount = useRef(0);
  const speed = useRef(0.5); // Base speed

  // Adjust speed based on screen size
  useEffect(() => {
    const updateSpeed = () => {
      speed.current = window.innerWidth < 768 ? 0.3 : 0.5;
    };
    
    updateSpeed();
    window.addEventListener('resize', updateSpeed);
    return () => window.removeEventListener('resize', updateSpeed);
  }, []);

  useEffect(() => {
    if (!scrollerRef.current) return;

    const scroller = scrollerRef.current;
    const scrollerContent = Array.from(scroller.children);

    // Store the original logos array to maintain references
    const originalLogos = [...logos];
    
    // Clear any existing content to prevent duplicates on re-renders
    while (scroller.firstChild) {
      scroller.removeChild(scroller.firstChild);
    }
    
    // Create initial set of logos
    scrollerContent.forEach((item, index) => {
      const logoContainer = document.createElement('div');
      logoContainer.className = 'flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300';
      
      const img = document.createElement('img');
      const originalLogo = originalLogos[index % originalLogos.length];
      img.src = originalLogo.src;
      img.alt = originalLogo.alt;
      img.className = `${originalLogo.className || 'h-12 sm:h-16 md:h-20'} w-auto object-contain`;
      img.loading = 'lazy';
      
      logoContainer.appendChild(img);
      scroller.appendChild(logoContainer);
    });

    // Duplicate the logos for seamless infinite scroll
    const logosToDuplicate = Array.from(scroller.children);
    logosToDuplicate.forEach(logo => {
      const duplicatedItem = logo.cloneNode(true);
      scroller.appendChild(duplicatedItem);
    });

    const scroll = () => {
      if (!scrollerRef.current) return;
      
      scrollerRef.current.style.transform = `translateX(${-scrollAmount.current}px)`;
      
      // Reset scroll position when we've scrolled the width of the original content
      if (scrollAmount.current >= scroller.scrollWidth / 2) {
        scrollAmount.current = 0;
      } else {
        scrollAmount.current += speed.current;
      }
      
      animationFrameId.current = requestAnimationFrame(scroll);
    };

    // Start the animation
    animationFrameId.current = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto mt-4 sm:mt-6 px-3 sm:px-4">
      <h3 className="text-center text-sm sm:text-base font-medium text-gray-300 mb-3 sm:mb-4">
        Our Core Systems
      </h3>
      <div 
        ref={containerRef}
        className="w-full overflow-hidden py-3 sm:py-4 relative"
      >
        <div 
          ref={scrollerRef}
          className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 w-max"
        >
          {logos.map((logo) => (
            <div 
              key={logo.id}
              className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300 px-2 sm:px-0"
            >
              <img 
                src={logo.src} 
                alt={logo.alt}
                className={`${logo.className || 'h-12 sm:h-16 md:h-20'} w-auto object-contain`}
                loading="lazy"
                width="auto"
                height="auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlideshow;
