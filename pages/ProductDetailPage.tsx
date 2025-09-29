import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { PRODUCT_TIERS, COMPARISON_SPECS } from '../constants';
import BackButton from '../components/BackButton';
import { usePreOrder } from '../contexts/PreOrderContext';

const ProductDetailPage: React.FC = () => {
  const { tierSlug } = useParams<{ tierSlug: string }>();
  const tier = PRODUCT_TIERS.find(t => t.slug === tierSlug);
  const { openModal } = usePreOrder();

  if (!tier) {
    return <Navigate to="/" />;
  }
  
  const accentClasses: { [key: string]: string } = {
    gray: 'text-gray-400 border-gray-500',
    blue: 'text-blue-400 border-blue-500',
    purple: 'text-purple-400 border-purple-500',
  };

  return (
    <div className="container mx-auto px-6 py-24 sm:py-32">
      <div className="max-w-4xl mx-auto">
        <BackButton to="/#tiers" text="Back to All Models" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-0 items-center">
            <div>
                 <h1 className={`text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 ${accentClasses[tier.accentColor]}`}>
                    {tier.name}
                </h1>
                <p className="text-2xl font-bold my-4 gradient-text">${tier.price}</p>
                <p className="text-lg text-gray-300 mb-8">{tier.longDescription}</p>
                 <button 
                    type="button"
                    onClick={() => openModal(tier)}
                    className={`w-full bg-white/10 border ${accentClasses[tier.accentColor]} text-white font-semibold py-3 rounded-full hover:bg-white/20 transition-colors duration-300`}
                  >
                    Pre-Order for ${tier.price}
                </button>
            </div>
            <div className="bg-[#1a1a1a] p-8 rounded-3xl border border-white/10">
                 <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                 <ul className="space-y-4 text-sm text-gray-300">
                    {Object.entries(tier.features).map(([key, value]) => (
                        <li key={key} className="flex items-start">
                        <i className={`fa-solid fa-check ${accentClasses[tier.accentColor]} mr-3 mt-1`}></i>
                        <span><strong className="text-white capitalize">{key}:</strong> {value}</span>
                        </li>
                    ))}
                 </ul>
            </div>
        </div>
        
        <div className="mt-24">
            <h2 className="text-3xl font-bold text-center gradient-text mb-8">Full Specifications</h2>
            <div className="overflow-hidden shadow ring-1 ring-white/10 rounded-2xl">
                 <table className="min-w-full divide-y divide-white/10">
                  <thead className="bg-[#1a1a1a]">
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Feature</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Specification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 bg-[#121212]/50">
                    {COMPARISON_SPECS.map((spec) => (
                      <tr key={spec.feature}>
                        <td className="whitespace-nowrap py-4 pr-3 text-sm font-medium text-white sm:pl-6">{spec.feature}</td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-400">{spec[tier.slug.split('-')[1] as keyof typeof spec]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;