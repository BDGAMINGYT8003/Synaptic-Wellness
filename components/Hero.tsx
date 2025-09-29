import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Hero: React.FC = () => {
  const location = useLocation();
  
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    // We expect a string like '/#tiers'
    const hash = to.substring(1); 
    // Only intercept if we are on the homepage and the hash is already correct.
    // In this case, react-router doesn't see a location change, so we handle scrolling manually.
    if (location.pathname === '/' && location.hash === hash) {
      e.preventDefault();
      const elementId = hash.substring(1); // #tiers -> tiers
      document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
    }
    // If the hash is different, we let the Link component and the ScrollToTop component do their jobs.
  };

  return (
    <section className="min-h-screen flex items-center justify-center text-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-10 container mx-auto px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-4">
          <span className="gradient-text">The Synaptic AI Vibrator</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 mb-8">
          Experience the future of intimate pleasure. Our line of smart dildo vibrators is engineered with adaptive AI and advanced haptics for an experience that is uniquely yours.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/#tiers" 
            onClick={(e) => handleAnchorClick(e, '/#tiers')}
            className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-500 transition-transform duration-300 hover:scale-105"
          >
            Explore Models
          </Link>
          <Link to="/whitepaper" className="bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105">
            Read Whitepaper
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;