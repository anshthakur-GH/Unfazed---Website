import React from 'react';
import { Button } from "@/components/ui/button";

const SimplePricingSection = () => {
  return (
    <section className="py-16 bg-saas-darkGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, <span className="text-saas-orange">Transparent</span> Pricing
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your business needs. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="bg-saas-black rounded-xl p-8 border border-gray-800">
            <h3 className="text-xl font-semibold mb-2">Starter</h3>
            <p className="text-gray-400 text-sm mb-6">Perfect for small businesses and freelancers</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">$19</span>
              <span className="text-gray-400">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              {['2 team members', '20GB cloud storage', 'Basic analytics', 'Email support', '1 project'].map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300 text-sm">
                  <span className="text-saas-orange mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="w-full bg-saas-orange hover:bg-saas-orange/90">
              Start with Starter
            </Button>
          </div>

          {/* Professional Plan - Highlighted */}
          <div className="relative bg-gradient-to-b from-saas-orange/20 to-saas-black rounded-xl p-8 border border-saas-orange/30 transform -translate-y-2">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-saas-orange text-black text-xs font-medium px-3 py-1 rounded-full">
              MOST POPULAR
            </div>
            <h3 className="text-xl font-semibold mb-2">Professional</h3>
            <p className="text-gray-400 text-sm mb-6">Great for growing businesses and teams</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">$49</span>
              <span className="text-gray-400">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                '10 team members',
                '100GB cloud storage',
                'Advanced analytics',
                'Priority email support',
                'Unlimited projects',
                'API access',
                'Custom integration'
              ].map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300 text-sm">
                  <span className="text-saas-orange mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="w-full bg-saas-orange hover:bg-saas-orange/90">
              Start with Pro
            </Button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-saas-black rounded-xl p-8 border border-gray-800">
            <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
            <p className="text-gray-400 text-sm mb-6">For large organizations with complex needs</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">$99</span>
              <span className="text-gray-400">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                'Unlimited team members',
                '500GB cloud storage',
                'Advanced analytics & reporting',
                '24/7 dedicated support',
                'Unlimited projects',
                'Full API access',
                'Custom integration',
                'SSO Authentication',
                'Dedicated account manager'
              ].map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300 text-sm">
                  <span className="text-saas-orange mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="w-full bg-saas-orange hover:bg-saas-orange/90">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimplePricingSection;
