import React from 'react';
import BackButton from '../components/BackButton';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you shortly.');
    // Here you would typically handle form submission, e.g., send data to an API
  };

  return (
    <div className="container mx-auto px-6 py-24 sm:py-32">
      <div className="max-w-xl mx-auto">
        <BackButton />
        <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight gradient-text">Contact Us</h1>
            <p className="mt-4 text-lg text-gray-400">
            Have questions or feedback? We'd love to hear from you.
            </p>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-16 space-y-6">
            <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
            <div className="mt-1">
                <input
                type="text"
                name="name"
                id="name"
                required
                className="block w-full bg-[#1a1a1a] border border-white/10 rounded-md py-3 px-4 text-white shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                />
            </div>
            </div>
            <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
            <div className="mt-1">
                <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full bg-[#1a1a1a] border border-white/10 rounded-md py-3 px-4 text-white shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                />
            </div>
            </div>
            <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
            <div className="mt-1">
                <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="block w-full bg-[#1a1a1a] border border-white/10 rounded-md py-3 px-4 text-white shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                ></textarea>
            </div>
            </div>
            <div>
            <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-300"
            >
                Send Message
            </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;