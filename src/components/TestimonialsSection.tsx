
import React, { useEffect, useRef } from 'react';

const testimonials = [
  {
    text: "We reclaimed 20+ hours a week instantly. Our team is finally focused on strategy, not spreadsheets. Highly recommended.",
    author: "Samantha K.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100"
  },
  {
    text: "The implementation of the n8n flows was flawless. We saw a 3X increase in lead follow-up within the first month. Incredible results.",
    author: "Rajesh P.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100"
  },
  {
    text: "I used to lose sleep over system breakdowns. Now, our operations are running 24/7 without an issue. The best investment this year.",
    author: "Michael T.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100"
  },
  {
    text: "They helped us use AI to completely automate our invoicing. Our financial reporting accuracy is now 100%. Stress-free cash flow.",
    author: "Priya M.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100"
  },
  {
    text: "From endless manual work to 90% automation in weeks. This allowed us to scale without hiring new staff. Pure efficiency.",
    author: "David L.",
    image: "https://ui-avatars.com/api/?name=David+L&background=FF8A00&color=fff&size=100"
  },
  {
    text: "Our lead qualification process was a mess. Unfazed built us a system that eliminated data errors and guaranteed pipeline quality.",
    author: "Elena R.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100"
  },
  {
    text: "The ROI was measurable almost immediately. We are earning money while we sleep—a massive shift in our business model.",
    author: "James K.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&h=200"
  },
  {
    text: "The level of n8n expertise is unmatched. They delivered an unbreakable workflow that simple tools couldn't handle.",
    author: "Anika P.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&h=200"
  },
  {
    text: "We went from limited capacity to infinitely scalable overnight. This partnership fundamentally changed how we approach growth.",
    author: "Nina S.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100"
  }
];

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-gradient-to-b from-saas-darkGray to-saas-black border border-gray-800 rounded-xl p-6 card-shadow flex-shrink-0 mx-2 w-80 lg:w-96">
    <div className="flex mb-6">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-saas-orange" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      ))}
    </div>
    
    <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
    
    <div className="flex items-center">
      <img 
        src={testimonial.image}
        alt={testimonial.author}
        className="w-12 h-12 rounded-full mr-4 object-cover"
      />
      <div>
        <p className="font-semibold text-white">{testimonial.author}</p>
      </div>
    </div>
  </div>
);

const TestimonialSlideshow = ({ testimonials, direction = 'right', speed = 'normal' }) => {
  const scrollerRef = useRef(null);
  const scrollerContentRef = useRef(null);
  
  useEffect(() => {
    if (!scrollerRef.current || !scrollerContentRef.current) return;
    
    const scroller = scrollerRef.current;
    const scrollerContent = scrollerContentRef.current;
    
    // Duplicate the content for seamless looping
    scrollerContent.innerHTML += scrollerContent.innerHTML;
    
    let scrollAmount = 0;
    const scrollSpeed = speed === 'fast' ? 1 : 0.5;
    
    const scroll = () => {
      if (!scroller) return;
      
      if (direction === 'right') {
        scrollAmount += scrollSpeed;
        if (scrollAmount >= scrollerContent.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scroller.scrollLeft = scrollAmount;
      } else {
        scrollAmount -= scrollSpeed;
        if (Math.abs(scrollAmount) >= scrollerContent.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scroller.scrollLeft = scrollerContent.scrollWidth / 2 + scrollAmount;
      }
      
      requestAnimationFrame(scroll);
    };
    
    const animationId = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [direction, speed]);
  
  return (
    <div 
      ref={scrollerRef}
      className="w-full overflow-hidden"
      style={{
        WebkitMaskImage: 'linear-gradient(90deg, transparent, black 5%, black 95%, transparent)'
      }}
    >
      <div 
        ref={scrollerContentRef}
        className="flex py-4 w-max"
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  // Split testimonials into two groups for the two rows
  const firstRowTestimonials = [...testimonials];
  const secondRowTestimonials = [...testimonials].reverse(); // Reverse for variety
  
  // Duplicate the testimonials to ensure smooth looping
  const duplicatedFirstRow = [...firstRowTestimonials, ...firstRowTestimonials];
  const duplicatedSecondRow = [...secondRowTestimonials, ...secondRowTestimonials];

  return (
    <div className="bg-saas-black pt-16 pb-20 overflow-hidden">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Trusted by <span className="text-saas-orange">250+</span> Businesses
          </h2>
          <p className="text-gray-400 font-medium">
            Don't just take our word for it. Here's what our customers have to say about Unfazed.
          </p>
        </div>
        
        <div className="space-y-4">
          {/* First row - Left to Right */}
          <TestimonialSlideshow 
            testimonials={duplicatedFirstRow}
            direction="right"
            speed="normal"
          />
          
          {/* Second row - Right to Left */}
          <TestimonialSlideshow 
            testimonials={duplicatedSecondRow}
            direction="left"
            speed="normal"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
