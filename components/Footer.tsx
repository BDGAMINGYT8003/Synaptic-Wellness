import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container mx-auto px-6 text-center text-gray-500">
        <div className="text-2xl font-bold tracking-wider gradient-text mb-4">
          SYNAPTIC
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Synaptic Wellness. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          <Link to="/privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors duration-300">Terms of Service</Link>
          <Link to="/contact" className="hover:text-white transition-colors duration-300">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;