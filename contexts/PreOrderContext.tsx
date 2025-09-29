import React, { createContext, useState, useContext, ReactNode } from 'react';
import type { ProductTier } from '../types';

interface PreOrderContextType {
  isModalOpen: boolean;
  selectedTier: ProductTier | null;
  openModal: (tier: ProductTier) => void;
  closeModal: () => void;
}

const PreOrderContext = createContext<PreOrderContextType | undefined>(undefined);

export const PreOrderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<ProductTier | null>(null);

  const openModal = (tier: ProductTier) => {
    setSelectedTier(tier);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Delay clearing tier to allow for exit animation
    setTimeout(() => {
        setSelectedTier(null);
    }, 300);
  };

  return (
    <PreOrderContext.Provider value={{ isModalOpen, selectedTier, openModal, closeModal }}>
      {children}
    </PreOrderContext.Provider>
  );
};

export const usePreOrder = (): PreOrderContextType => {
  const context = useContext(PreOrderContext);
  if (context === undefined) {
    throw new Error('usePreOrder must be used within a PreOrderProvider');
  }
  return context;
};
