import React from 'react';
import BackButton from '../components/BackButton';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/10 pb-3">{title}</h2>
    <div className="space-y-4 text-gray-400 leading-relaxed">{children}</div>
  </div>
);

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-black/20">
      <div className="container mx-auto px-6 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto">
          <BackButton />
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight gradient-text">Terms of Service</h1>
            <p className="mt-4 text-lg text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <Section title="1. Agreement to Terms">
            <p>By accessing or using our website, applications, and products (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, you may not access the Service.</p>
          </Section>

          <Section title="2. Intended Use and Responsibility">
            <p>The Synaptic Pleasure Series is a line of adult products intended for personal wellness and pleasure. You must be of legal age in your jurisdiction to purchase and use these products.</p>
            <p>You agree to use the product responsibly, in accordance with all provided instructions and safety warnings. Synaptic Wellness is not liable for any injury or damages resulting from the misuse, modification, or improper handling of the product.</p>
          </Section>

          <Section title="3. Purchases and Payments">
            <p>If you wish to purchase any product made available through the Service, you may be asked to supply certain information relevant to your purchase, including your credit card number, billing address, and shipping information. You represent and warrant that you have the legal right to use any payment method(s) utilized in connection with any purchase.</p>
          </Section>
          
          <Section title="4. Intellectual Property">
            <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Synaptic Wellness and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.</p>
          </Section>

          <Section title="5. Limitation of Liability">
            <p>In no event shall Synaptic Wellness, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service or product; (ii) any unauthorized access to or use of our secure servers and/or any and all personal information stored therein.</p>
          </Section>

          <Section title="6. Governing Law">
            <p>These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which our company is established, without regard to its conflict of law provisions.</p>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;