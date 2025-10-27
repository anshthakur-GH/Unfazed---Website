import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Policies = () => {
  return (
    <div className="min-h-screen bg-saas-black text-white">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 md:pb-16 max-w-4xl">
        {/* Hero Section */}
        <section className="text-center mb-8 sm:mb-12 md:mb-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-saas-orange to-amber-500 bg-clip-text text-transparent">
            Unfazed Client Policies & Commitment
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto px-2 sm:px-0">
            Transparency is the foundation of trust. Find answers on our data security, service commitments, and client terms here.
          </p>
        </section>

        {/* Table of Contents */}
        <section className="mb-12 sm:mb-16 p-4 sm:p-6 bg-saas-darkGray/30 rounded-xl border border-saas-darkGray/50">
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-saas-orange">Table of Contents</h2>
          <ul className="list-disc pl-5 space-y-1.5 sm:space-y-2 text-sm sm:text-base">
            <li>
              <a href="#privacy" className="text-gray-300 hover:text-saas-orange transition-colors">
                1. Privacy & Data Security
              </a>
            </li>
            <li>
              <a href="#service" className="text-gray-300 hover:text-saas-orange transition-colors">
                2. Service Terms & Ownership
              </a>
            </li>
            <li>
              <a href="#refund" className="text-gray-300 hover:text-saas-orange transition-colors">
                3. Refund & Guarantee Commitment
              </a>
            </li>
          </ul>
        </section>

        {/* Privacy & Data Security */}
        <section id="privacy" className="mb-12 sm:mb-16 scroll-mt-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-saas-orange">
            1. Privacy & Data Security
          </h2>
          <div className="space-y-4 sm:space-y-6 text-gray-300">
            <h3 className="text-lg sm:text-xl font-semibold text-white">Protecting Your Data and System Access</h3>
            
            <div className="space-y-4">
              <p className="flex items-start">
                <p className="text-sm sm:text-base text-gray-300">•</p>
                <span><span className="font-medium">Data Collected:</span> Information strictly necessary for service (Name, Company, Role, System Metadata).</span>
              </p>
              <p className="flex items-start">
                <p className="text-sm sm:text-base text-gray-300">•</p>
                <span><span className="font-medium">Credential Security:</span> All client system credentials and API keys are stored in <span className="font-mono bg-saas-darkGray/50 px-1.5 py-0.5 rounded">encrypted</span> secrets vaults. We never store this data in plain text.</span>
              </p>
              <p className="flex items-start">
                <p className="text-sm sm:text-base text-gray-300">•</p>
                <span><span className="font-medium">Data Usage:</span> Your data is used only for building, monitoring, and debugging the agreed-upon automation workflows.</span>
              </p>
              <p className="flex items-start">
                <p className="text-sm sm:text-base text-gray-300">•</p>
                <span><span className="font-medium">Sharing:</span> We do not sell, share, or rent any client data or system credentials to third parties.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Service Terms & Ownership */}
        <section id="service" className="mb-12 sm:mb-16 scroll-mt-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-saas-orange">
            2. Service Terms & Ownership
          </h2>
          <div className="space-y-4 sm:space-y-6 text-gray-300">
            <h3 className="text-lg sm:text-xl font-semibold text-white">Clear Expectations and Asset Ownership</h3>
            
            <div className="space-y-4">
              <p className="flex items-start">
                <p className="text-sm sm:text-base text-gray-300">•</p>
                <span><span className="font-medium">Agreement Basis:</span> All projects are governed by a signed Service Agreement (SOW) which details specific deliverables and timelines.</span>
              </p>
              <p className="flex items-start">
                <p className="text-sm sm:text-base text-gray-300">•</p>
                <span><span className="font-medium">Workflow Ownership:</span> The client retains <span className="font-mono bg-saas-darkGray/50 px-1.5 py-0.5 rounded">100% ownership</span> of the final deployed system code/logic and all data flowing through the automation.</span>
              </p>
              <p className="flex items-start">
                <p className="text-sm sm:text-base text-gray-300">•</p>
                <span><span className="font-medium">Warranties:</span> We provide a 90-day post-deployment warranty on our core automation logic, guaranteeing <span className="font-mono bg-saas-darkGray/50 px-1.5 py-0.5 rounded">99.9% functional reliability</span>.</span>
              </p>
              <p className="flex items-start">
                <p className="text-sm sm:text-base text-gray-300">•</p>
                <span><span className="font-medium">Client Duties:</span> Client is responsible for maintaining system access and providing timely sign-offs during the project phases.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Refund & Guarantee Commitment */}
        <section id="refund" className="mb-12 sm:mb-16 scroll-mt-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-saas-orange">
            3. Refund & Guarantee Commitment
          </h2>
          <div className="space-y-4 sm:space-y-6 text-gray-300">
            <h3 className="text-lg sm:text-xl font-semibold text-white">Our Promise of Quality and Performance</h3>
            
            <div className="space-y-4">
              <p className="flex items-start">
                <p className="text-sm sm:text-base text-gray-300">•</p>
                <span><span className="font-medium">Payment Terms:</span> Custom automation builds require a <span className="font-mono bg-saas-darkGray/50 px-1.5 py-0.5 rounded">50% non-refundable upfront</span> fee to initiate the Discovery & Design phase.</span>
              </p>
              <p className="flex items-start">
                <p className="text-sm sm:text-base text-gray-300">•</p>
                <span><span className="font-medium">Refunds:</span> Due to the custom, bespoke nature of the automation builds, the initial <span className="font-mono bg-saas-darkGray/50 px-1.5 py-0.5 rounded">50% fee is non-refundable</span>.</span>
              </p>
              <p className="flex items-start">
                <p className="text-sm sm:text-base text-gray-300">•</p>
                <span><span className="font-medium">Scope Changes:</span> Any work outside the original SOW requires a formal Change Order Fee to be determined.</span>
              </p>
              <p className="flex items-start">
                <p className="text-sm sm:text-base text-gray-300">•</p>
                <span><span className="font-medium">Cancellation (Retainer):</span> Monthly support/monitoring retainers require <span className="font-mono bg-saas-darkGray/50 px-1.5 py-0.5 rounded">30-day written notice</span> for cancellation.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center py-12">
          <h3 className="text-xl font-semibold mb-4">Have questions about our policies?</h3>
          <a 
            href="https://wa.me/917460011985"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-saas-orange hover:bg-orange-600 text-white font-medium rounded-lg transition-colors"
          >
            Chat on WhatsApp
            <svg className="h-5 w-5 ml-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 1.96.63 3.78 1.69 5.27L2 22l4.73-1.69A9.98 9.98 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.8 14.4l-1.5-1.5c-.3-.3-.8-.2-1.1.1-1.4 1.1-3.2 1.7-5.2 1.7-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6c0 1.1-.3 2.2-.8 3.1-.2.4-.2.8.1 1.1l1.5 1.5c.2.2.5.3.7.3.2 0 .5-.1.7-.3.3-.3.3-.9 0-1.2z" clipRule="evenodd" />
            </svg>
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Policies;
