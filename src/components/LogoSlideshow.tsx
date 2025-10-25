import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const logos = [
  { id: 1, src: './public/logo1.png', alt: 'Logo 1', className: 'h-6 md:h-8' },
  { id: 2, src: './public/logo2.png', alt: 'Logo 2', className: 'h-6 md:h-8' },
  { id: 3, src: './public/logo3.png', alt: 'Logo 3', className: 'h-6 md:h-8' },
  { id: 4, src: './public/logo4.png', alt: 'Logo 4', className: 'h-6 md:h-8' },
  { id: 5, src: './public/logo5.png', alt: 'Logo 5', className: 'h-6 md:h-8' },
  { id: 6, src: './public/logo6.png', alt: 'Logo 6', className: 'h-8 md:h-10' },
  { id: 7, src: './public/logo7.png', alt: 'Logo 7', className: 'h-8 md:h-10' }
];

const LogoSlideshow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current) return;

    const scroller = scrollerRef.current;
    const scrollerContent = Array.from(scroller.children);

    // Store the original logos array to maintain references
    const originalLogos = [...logos];
    
    // Duplicate the logos for seamless infinite scroll
    scrollerContent.forEach((item, index) => {
      const duplicatedItem = item.cloneNode(true);
      // Ensure the cloned element has the same classes as the original
      if (duplicatedItem instanceof HTMLElement) {
        const originalLogo = originalLogos[index % originalLogos.length];
        const img = duplicatedItem.querySelector('img');
        if (img) {
          img.className = `${originalLogo.className} w-auto object-contain`;
        }
      }
      scroller.appendChild(duplicatedItem);
    });

    let animationFrameId: number;
    let scrollAmount = 0;
    const speed = 0.6; // Reduced from 1.2 to 0.6 for slower scrolling

    const scroll = () => {
      if (!scrollerRef.current) return;
      
      scrollerRef.current.style.transform = `translateX(${-scrollAmount}px)`;
      
      // Reset scroll position when we've scrolled the width of the original content
      if (scrollAmount >= scroller.scrollWidth / 2) {
        scrollAmount = 0;
      } else {
        scrollAmount += speed;
      }
      
      animationFrameId = requestAnimationFrame(scroll);
    };

    // Start the animation
    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto mt-6 px-4">
      <h3 className="text-center text-base font-medium text-gray-300 mb-4">Our Core Systems</h3>
      <div 
        ref={containerRef}
        className="w-full overflow-hidden py-4"
      >
        
        <div 
          ref={scrollerRef}
          className="flex items-center gap-8 md:gap-12 w-max"
        >
          {logos.map((logo) => (
            <div 
              key={logo.id}
              className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <img 
                src={logo.src} 
                alt={logo.alt}
                className={`${logo.className || 'h-8 md:h-10'} w-auto object-contain`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlideshow;
