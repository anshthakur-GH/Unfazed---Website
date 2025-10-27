
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Glowing border animation styles
const glowStyles = `
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
`;

const CtaSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    challenge: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      challenge: value
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://n8n.unfazed-ai.online/webhook/1bf7db4a-6c96-4dec-97a1-157353d45941', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
          source: 'unfazed-website',
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setSubmitStatus({
        success: true,
        message: 'Thank you! Your automation strategy is on its way. We\'ll be in touch soon!',
      });
      
      // Reset form on successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        challenge: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        success: false,
        message: 'Something went wrong. Please try again or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact-form" className="relative bg-saas-black pt-2 pb-16 md:pb-20 overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: glowStyles }} />
      <div className="absolute inset-0 bg-gradient-to-b from-saas-black to-saas-darkGray/50 -z-10"></div>
      <div className="section-container">
        <div className="bg-saas-black/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 relative overflow-hidden glowing-border border border-gray-800">
          {/* Abstract glow effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-saas-orange/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight">
                Ready to Achieve 24/7 - <span className="text-saas-orange">Unfazed </span>Growth?
              </h2>
              <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
                Start the conversation. Tell us your biggest pain point, and we'll map your <span className="font-bold">ROI</span> plan.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name *</label>
                  <div className="relative">
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-saas-darkGray/30 border-gray-800 text-white placeholder-gray-500/60 focus:border-saas-orange/50 focus:ring-saas-orange/50 w-full"
                      placeholder="Ansh Thakur"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Work Email *</label>
                  <div className="relative">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-saas-darkGray/30 border-gray-800 text-white placeholder-gray-500/60 focus:border-saas-orange/50 focus:ring-saas-orange/50 w-full"
                      placeholder="unfazed@ai.online"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-300">Phone Number</label>
                  <div className="relative">
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-saas-darkGray/30 border-gray-800 text-white placeholder-gray-500/60 focus:border-saas-orange/50 focus:ring-saas-orange/50 w-full"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-gray-300">Company Name</label>
                  <div className="relative">
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-saas-darkGray/30 border-gray-800 text-white placeholder-gray-500/60 focus:border-saas-orange/50 focus:ring-saas-orange/50 w-full"
                      placeholder="Your Company"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  What is your biggest automation challenge right now? (Optional)
                </label>
                <Select onValueChange={handleSelectChange} value={formData.challenge}>
                  <SelectTrigger className="bg-saas-darkGray/30 border-gray-800 text-white placeholder-gray-700/20 focus:border-saas-orange/50 focus:ring-saas-orange/50 w-full">
                    <SelectValue placeholder="Select your challenge" />
                  </SelectTrigger>
                  <SelectContent className="bg-saas-darkGray border-gray-800 text-white backdrop-blur-md">
                    <SelectItem value="lead-generation">Lead Generation & Sales</SelectItem>
                    <SelectItem value="project-management">Project Management & Operations</SelectItem>
                    <SelectItem value="data-accuracy">Data Accuracy & Integration</SelectItem>
                    <SelectItem value="customer-support">Customer Support Automation</SelectItem>
                    <SelectItem value="marketing-automation">Marketing Automation</SelectItem>
                    <SelectItem value="other">Other (Please specify)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">
                  Tell us more about your specific needs (optional)
                </label>
                <div className="relative">
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-saas-darkGray/30 border-gray-800 text-white placeholder-gray-500/60 focus:border-saas-orange/50 focus:ring-saas-orange/50 w-full"
                    placeholder="Eg. I need to automate my lead generation process to improve sales efficiency."
                  />
                </div>
              </div>

              <div className="pt-2">
                <div className="space-y-4">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-saas-orange to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-semibold py-3 text-base transition-all duration-300 transform hover:scale-[1.02] ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        Get My Free Automation Strategy
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    )}
                  </Button>
                  {submitStatus && (
                    <div className={`p-3 rounded-md text-sm ${
                      submitStatus.success 
                        ? 'bg-green-500/10 text-green-400' 
                        : 'bg-red-500/10 text-red-400'
                    }`}>
                      {submitStatus.message}
                    </div>
                  )}
                </div>
                <p className="mt-3 text-xs text-gray-400 text-center">
                  <span className="inline-flex items-center">
                    <svg className="h-4 w-4 text-green-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    We respect your privacy. No spam, ever.
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
