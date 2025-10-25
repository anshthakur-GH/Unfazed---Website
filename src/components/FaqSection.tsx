
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How to start?",
    answer: "Schedule your free 30-minute Strategy Session. We'll identify your biggest time-loss areas and map out a guaranteed ROI plan."
  },
  {
    question: "How quickly will I see a return on investment (ROI)?",
    answer: "Immediate ROI is common. You will typically see measurable time savings and improved efficiency within 30 days of deployment."
  },
  {
    question: "What happens if I want to scale my automation later?",
    answer: "Our systems are built for infinite scalability. We simply expand the existing workflow, integrating new apps or logic as your business grows."
  },
  {
    question: "Can you integrate with my existing CRM/Software?",
    answer: "Yes. We specialize in complex integration. We connect to virtually any software with an API (e.g., CRMs, ERPs, databases)."
  },
  {
    question: "What is the process for implementing a new workflow?",
    answer: "The process is 3 steps: 1. Discovery & Design (Max 3 Days). 2. Build & Test (Max. 1-2 Weeks). 3. Deploy & Monitor (Immediate launch)."
  },
  {
    question: "Do I need to provide API keys or data access?",
    answer: "Yes, you provide secure API keys for the systems we automate. All credentials are encrypted and stored securely within your private workflow environment. Our team will assist you to find the API keys for the systems you want to automate."
  }
];

const FaqSection = () => {
  return (
    <div className="bg-saas-black pb-10">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Frequently Asked <span className="text-saas-orange">Questions</span>
          </h2>
          <p className="text-gray-400 font-medium">
            Get clarity on our AI & automation services before you start earning 24/7
          </p>
        </div>
        
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
        
        <div className="max-w-3xl mx-auto bg-saas-darkGray/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 glowing-border">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-800 last:border-0">
                <AccordionTrigger className="text-left text-white hover:text-saas-orange py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent my-8"></div>
    </div>
  );
};

export default FaqSection;
