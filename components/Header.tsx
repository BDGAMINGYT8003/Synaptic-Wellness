import React from 'react';
import { Link, NavLink as RouterNavLink, useLocation } from 'react-router-dom';

type HeaderNavLinkProps = {
  to: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

// FIX: Refactored the component from a const arrow function to a standard function declaration.
// This can resolve subtle type inference issues where the compiler fails to correctly identify all props, like `children`.
function HeaderNavLink({ to, children, onClick }: HeaderNavLinkProps) {
  return (
    <RouterNavLink to={to} onClick={onClick} className="hover:text-white transition-colors duration-300">{children}</RouterNavLink>
  );
}

const Header: React.FC = () => {
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
    // If we are on a different page, or the hash is different,
    // we let the Link/NavLink component and the ScrollToTop component do their jobs.
  };


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-lg">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-wider gradient-text">
          SYNAPTIC
        </Link>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
          <HeaderNavLink to="/technology">Technology</HeaderNavLink>
          <HeaderNavLink to="/#tiers" onClick={(e) => handleAnchorClick(e, '/#tiers')}>Models</HeaderNavLink>
          <HeaderNavLink to="/#compare" onClick={(e) => handleAnchorClick(e, '/#compare')}>Compare</HeaderNavLink>
        </div>
        <Link to="/#tiers" onClick={(e) => handleAnchorClick(e, '/#tiers')} className="bg-white text-black text-xs font-semibold px-4 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300">
          Pre-Order
        </Link>
      </nav>
    </header>
  );
};

export default Header;