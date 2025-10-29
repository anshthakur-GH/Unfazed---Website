
import React, { useEffect, useRef, useCallback, useMemo, memo } from 'react';

interface Testimonial {
  text: string;
  author: string;
  image?: string;
  useInitials?: boolean;
  initials?: string;
}

const testimonials: Testimonial[] = [
  {
    text: "We reclaimed 20+ hours a week instantly. Our team is finally focused on strategy, not spreadsheets. Highly recommended.",
    author: "Samantha K.",
    useInitials: true,
    initials: "SK"
  },
  {
    text: "The implementation of the n8n flows was flawless. We saw a 3X increase in lead follow-up within the first month. Incredible results.",
    author: "Rajesh P.",
    useInitials: true,
    initials: "RP"
  },
  {
    text: "I used to lose sleep over system breakdowns. Now, our operations are running 24/7 without an issue. The best investment this year.",
    author: "Michael T.",
    image: "https://randomuser.me/api/portraits/men/67.jpg"
  },
  {
    text: "They helped us use AI to completely automate our invoicing. Our financial reporting accuracy is now 100%. Stress-free cash flow.",
    author: "Priya M.",
    image: "https://randomuser.me/api/portraits/women/63.jpg"
  },
  {
    text: "From endless manual work to 90% automation in weeks. This allowed us to scale without hiring new staff. Pure efficiency.",
    author: "David L.",
    image: "https://randomuser.me/api/portraits/men/52.jpg"
  },
  {
    text: "Our lead qualification process was a mess. Unfazed built us a system that eliminated data errors and guaranteed pipeline quality.",
    author: "Elena R.",
    image: "https://randomuser.me/api/portraits/med/women/68.jpg"
  },
  {
    text: "The ROI was measurable almost immediately. We are earning money while we sleep—a massive shift in our business model.",
    author: "James K.",
    image: "https://randomuser.me/api/portraits/men/48.jpg"
  },
  {
    text: "The level of n8n expertise is unmatched. They delivered an unbreakable workflow that simple tools couldn't handle.",
    author: "Anika P.",
    image: "https://randomuser.me/api/portraits/women/28.jpg"
  },
  {
    text: "We went from limited capacity to infinitely scalable overnight. This partnership fundamentally changed how we approach growth.",
    author: "Nina S.",
    image: "https://randomuser.me/api/portraits/women/38.jpg"
  }
];

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = memo(({ testimonial }) => (
  <div className="bg-gradient-to-b from-saas-darkGray to-saas-black border border-gray-800 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 card-shadow flex-shrink-0 mx-1.5 w-52 sm:w-72 lg:w-80 h-full flex flex-col">
    <div className="flex mb-1.5 sm:mb-3">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-saas-orange" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      ))}
    </div>
    
    <p className="text-[11px] sm:text-sm md:text-[15px] text-gray-300 mb-3 sm:mb-4 leading-snug sm:leading-relaxed flex-grow line-clamp-3 sm:line-clamp-4">"{testimonial.text}"</p>
    
    <div className="flex items-center pt-2 border-t border-gray-800">
      <div className="relative">
        {testimonial.useInitials ? (
          <div className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-saas-orange/20 flex items-center justify-center border border-saas-orange/50">
            <span className="text-saas-orange font-medium text-sm sm:text-base">{testimonial.initials}</span>
          </div>
        ) : (
          <img 
            src={testimonial.image}
            alt={testimonial.author}
            className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full object-cover border border-saas-orange/50"
            loading="lazy"
            onError={(e) => {
              // Fallback to a default avatar if the image fails to load
              e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.author)}&background=FF8A00&color=fff&size=128`;
            }}
          />
        )}
      </div>
      <div className="ml-2">
        <p className="text-xs sm:text-sm font-medium text-white">{testimonial.author}</p>
      </div>
    </div>
  </div>
));

interface TestimonialSlideshowProps {
  testimonials: Testimonial[];
  direction?: 'left' | 'right';
  speed?: 'slow' | 'normal' | 'fast';
}

const TestimonialSlideshow: React.FC<TestimonialSlideshowProps> = ({ 
  testimonials, 
  direction = 'right', 
  speed = 'normal' 
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollerContentRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number>();
  const lastTimestamp = useRef<number>(0);
  const scrollAmount = useRef<number>(0);
  const isVisible = useRef<boolean>(true);

  // Memoize speed values - increased for faster animation
  const SPEED_MULTIPLIER = useMemo(() => {
    switch(speed) {
      case 'slow': return 0.8;  // Increased from 0.3
      case 'fast': return 2.5;  // Increased from 1
      case 'normal':
      default:
        return 1.5;  // Increased from 0.5
    }
  }, [speed]);

  // Throttled scroll function
  const scroll = useCallback((timestamp: number) => {
    if (!scrollerRef.current || !scrollerContentRef.current || !isVisible.current) {
      animationFrameId.current = requestAnimationFrame(scroll);
      return;
    }

    const delta = timestamp - lastTimestamp.current;
    // Reduced frame delay for smoother animation on mobile
    const FRAME_DELAY = 10; // Increased from 16ms for smoother animation (~100fps)
    
    if (delta > FRAME_DELAY) {
      const scroller = scrollerRef.current;
      const scrollWidth = scroller.scrollWidth / 2;
      
      if (direction === 'right') {
        scrollAmount.current += SPEED_MULTIPLIER;
        if (scrollAmount.current >= scrollWidth) {
          scrollAmount.current = 0;
        }
        scroller.scrollLeft = scrollAmount.current;
      } else {
        scrollAmount.current -= SPEED_MULTIPLIER;
        if (Math.abs(scrollAmount.current) >= scrollWidth) {
          scrollAmount.current = 0;
        }
        scroller.scrollLeft = scrollWidth + scrollAmount.current;
      }

      lastTimestamp.current = timestamp;
    }

    animationFrameId.current = requestAnimationFrame(scroll);
  }, [direction, SPEED_MULTIPLIER]);

  // Setup intersection observer to pause when not in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        isVisible.current = entries[0].isIntersecting;
        if (isVisible.current && !animationFrameId.current) {
          lastTimestamp.current = performance.now();
          animationFrameId.current = requestAnimationFrame(scroll);
        }
      },
      { threshold: 0.1 }
    );

    if (scrollerRef.current) {
      observer.observe(scrollerRef.current);
    }

    // Initial start
    lastTimestamp.current = performance.now();
    animationFrameId.current = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = undefined;
      }
      if (scrollerRef.current) {
        observer.unobserve(scrollerRef.current);
      }
      observer.disconnect();
    };
  }, [scroll]);

  // Memoize the duplicated testimonials to prevent unnecessary re-renders
  const duplicatedTestimonials = useMemo(() => 
    [...testimonials, ...testimonials], 
    [testimonials]
  );
  
  return (
    <div 
      ref={scrollerRef}
      className="w-full overflow-hidden will-change-transform"
      style={{
        WebkitMaskImage: 'linear-gradient(90deg, transparent, black 5%, black 95%, transparent)',
        maskImage: 'linear-gradient(90deg, transparent, black 5%, black 95%, transparent)'
      }}
    >
      <div 
        ref={scrollerContentRef}
        className="flex py-3 sm:py-4 w-max"
        style={{
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          transform: 'translateZ(0)'
        }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={`${testimonial.author}-${index}`} 
            testimonial={testimonial} 
          />
        ))}
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  // Memoize the testimonials to prevent unnecessary re-renders
  const { firstRowTestimonials, secondRowTestimonials } = useMemo(() => {
    const firstRow = [...testimonials];
    const secondRow = [...testimonials].reverse();
    return { firstRowTestimonials: firstRow, secondRowTestimonials: secondRow };
  }, []);

  // Add scroll effect when the component mounts if the URL has the hash
  useEffect(() => {
    if (window.location.hash === '#testimonials') {
      const element = document.getElementById('testimonials-section');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div id="testimonials-section" className="scroll-mt-20 bg-saas-black pt-10 pb-12 md:pt-12 md:pb-16 overflow-hidden">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-8 px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4 text-white">
            Trusted by <span className="text-saas-orange">250+</span> Businesses with <span className="text-saas-orange">98% </span>retention.
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-medium">
            Don't just take our word for it. Here's what our customers have to say about Unfazed.
          </p>
        </div>
        
        <div className="space-y-1.5 sm:space-y-3">
          {/* First row - Left to Right */}
          <TestimonialSlideshow 
            testimonials={firstRowTestimonials}
            direction="right"
            speed="fast"
          />
          
          {/* Second row - Right to Left */}
          <TestimonialSlideshow 
            testimonials={secondRowTestimonials}
            direction="left"
            speed="fast"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;