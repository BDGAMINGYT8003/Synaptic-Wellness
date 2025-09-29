import React, { useState, useEffect } from 'react';
import type { ProductTier } from '../types';

interface PreOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  tier: ProductTier | null;
}

const PreOrderModal: React.FC<PreOrderModalProps> = ({ isOpen, onClose, tier }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Reset submission state when modal opens
      setIsSubmitted(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setTimeout(() => {
            onClose();
        }, 2000); // Close modal after 2 seconds
    }, 1000);
  };

  return (
    <div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
    >
      <div
        className="bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-xl w-full max-w-md m-4 p-8 relative transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'fade-in-scale 0.3s forwards' }}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <i className="fa-solid fa-times text-xl"></i>
        </button>

        {!isSubmitted ? (
            <>
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-white">Pre-Order Confirmation</h2>
                    <p className="mt-2 text-gray-400">
                        You're pre-ordering the <span className="font-semibold text-purple-400">{tier?.name}</span> for <span className="font-semibold text-white">${tier?.price}</span>.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                        Enter your email to be notified
                        </label>
                        <div className="mt-1">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="block w-full bg-[#121212] border border-white/10 rounded-md py-3 px-4 text-white shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            placeholder="you@example.com"
                        />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-300 disabled:bg-purple-800 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Confirming...' : 'Confirm Pre-Order'}
                        </button>
                    </div>
                </form>
            </>
        ) : (
            <div className="text-center py-8">
                <div className="text-green-400 text-5xl mb-4">
                    <i className="fa-solid fa-check-circle"></i>
                </div>
                <h2 className="text-2xl font-bold text-white">Thank You!</h2>
                <p className="mt-2 text-gray-400">
                    Your pre-order for the <span className="font-semibold text-purple-400">{tier?.name}</span> is confirmed. We'll notify you when it's ready to ship.
                </p>
            </div>
        )}
      </div>
      <style>{`
        @keyframes fade-in-scale {
            from {
                transform: scale(0.95);
                opacity: 0;
            }
            to {
                transform: scale(1);
                opacity: 1;
            }
        }
        .animate-fade-in-scale {
            animation: fade-in-scale 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default PreOrderModal;
