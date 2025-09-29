import React from 'react';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';

type HeaderNavLinkProps = {
  to: string;
  children: React.ReactNode;
};

const HeaderNavLink = ({ to, children }: HeaderNavLinkProps) => (
  <RouterNavLink to={to} className="hover:text-white transition-colors duration-300">{children}</RouterNavLink>
);

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-lg">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-wider gradient-text">
          SYNAPTIC
        </Link>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
          {/* FIX: Added children to HeaderNavLink components as the 'children' prop is required. */}
          <HeaderNavLink to="/technology">Technology</HeaderNavLink>
          <HeaderNavLink to="/#tiers">Models</HeaderNavLink>
          <HeaderNavLink to="/#compare">Compare</HeaderNavLink>
        </div>
        <Link to="/#tiers" className="bg-white text-black text-xs font-semibold px-4 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300">
          Pre-Order
        </Link>
      </nav>
    </header>
  );
};

export default Header;