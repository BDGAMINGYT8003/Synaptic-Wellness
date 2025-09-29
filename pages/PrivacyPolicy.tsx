import React from 'react';
import BackButton from '../components/BackButton';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/10 pb-3">{title}</h2>
    <div className="space-y-4 text-gray-400 leading-relaxed">{children}</div>
  </div>
);

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-black/20">
      <div className="container mx-auto px-6 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto">
          <BackButton />
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight gradient-text">Privacy Policy</h1>
            <p className="mt-4 text-lg text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
          
          <Section title="Our Commitment to Your Privacy">
            <p>Synaptic Wellness ("us", "we", or "our") operates the Synaptic Pleasure Series website and companion applications (the "Service"). This Privacy Policy outlines our firm commitment to your privacy, detailing our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
          </Section>

          <Section title="The Zero-Log, Non-Broadcast Protocol">
            <p>Our core privacy principle is simple: your intimate data is yours alone. We have engineered our devices and applications around a stringent Zero-Log, Non-Broadcast Privacy Protocol.</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong className="text-white">Explicit Activation:</strong> Your device only initiates advertising (making its presence known for connection) upon explicit, intentional physical activation by you. It does not constantly broadcast its presence, protecting your location and usage patterns.</li>
              <li><strong className="text-white">Local Processing:</strong> All sensitive data streams, including usage metrics and biofeedback from the Synapse model, are engineered to be processed locally on your device or within the app's sandboxed environment.</li>
              <li><strong className="text-white">No Unconsented Cloud Transmission:</strong> We do not store or transmit sensitive usage patterns or biofeedback data to our servers. Any communication with cloud services (e.g., for AI features on the Core model) is limited to non-sensitive command data and is protected with end-to-end encryption.</li>
            </ul>
          </Section>

          <Section title="Information Collection and Use">
            <p>To provide and improve our Service, we collect a minimal amount of non-sensitive information:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong className="text-white">Contact Information:</strong> If you contact us directly or make a purchase, we collect information like your name, email address, and shipping address solely for the purpose of communication and order fulfillment.</li>
              <li><strong className="text-white">Usage Data:</strong> We may collect anonymous data about how the Service is accessed and used (e.g., feature popularity, session duration). This data is aggregated and cannot be used to identify you personally.</li>
              <li><strong className="text-white">Cookies:</strong> We use cookies to track activity on our Service and hold certain information to enhance your browsing experience.</li>
            </ul>
          </Section>

          <Section title="Data Security">
            <p>The security of your data is paramount. While no method of transmission over the Internet or method of electronic storage is 100% secure, we use commercially acceptable means to protect your Personal Data. Our hardware and software are designed with security best practices to safeguard against unauthorized access.</p>
          </Section>
          
          <Section title="Changes to This Privacy Policy">
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
          </Section>

          <Section title="Contact Us">
            <p>If you have any questions about this Privacy Policy, please use the contact form on our website to get in touch with our privacy team.</p>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;