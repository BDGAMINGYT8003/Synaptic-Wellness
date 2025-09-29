import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import PreOrderModal from './PreOrderModal';
import { usePreOrder } from '../contexts/PreOrderContext';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isModalOpen, closeModal, selectedTier } = usePreOrder();
  
  return (
    <div className="bg-[#121212] text-gray-200 antialiased overflow-x-hidden">
      <ScrollToTop />
      <Header />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
      <PreOrderModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        tier={selectedTier} 
      />
    </div>
  );
};

export default Layout;