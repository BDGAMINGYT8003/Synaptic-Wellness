import React, { useRef, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCT_TIERS } from '../constants';
import type { ProductTier } from '../types';

const ProductTierCard: React.FC<{ tier: ProductTier }> = ({ tier }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);
    cardRef.current.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const onMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale3d(1, 1, 1)';
  };

  const accentClasses: { [key: string]: string } = {
    gray: 'border-gray-500 hover:shadow-[0_0_20px_#6b7280]',
    blue: 'border-blue-500 hover:shadow-[0_0_20px_#3b82f6]',
    purple: 'border-purple-500 hover:shadow-[0_0_20px_#9333ea]',
  };

  return (
    <Link to={`/models/${tier.slug}`} className="block h-full">
      <div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={`bg-[#1a1a1a] border ${accentClasses[tier.accentColor]} p-8 rounded-3xl transition-all duration-300 ease-out h-full flex flex-col`}
      >
        <div className="flex-grow">
          <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
          <p className="text-4xl font-bold my-4 gradient-text">${tier.price}</p>
          <p className="text-gray-400 text-sm mb-6">{tier.longDescription}</p>
          <ul className="space-y-3 text-sm text-gray-300">
            {Object.entries(tier.features).map(([key, value]) => (
              <li key={key} className="flex items-start">
                <i className="fa-solid fa-check text-green-500 mr-3 mt-1"></i>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={`mt-8 text-center w-full bg-white/5 border ${accentClasses[tier.accentColor].replace('hover:shadow', '').trim()} text-white font-semibold py-3 rounded-full hover:bg-white/10 transition-colors duration-300`}>
          View Details
        </div>
      </div>
    </Link>
  );
};

const ProductTiers: React.FC = () => {
  return (
    <section id="tiers" className="py-20 sm:py-32 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight gradient-text">
            Choose Your AI Pleasure Experience
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            From accessible entry-points to the pinnacle of innovation, the Synaptic Series offers a tailored vibrator for every desire.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRODUCT_TIERS.map((tier) => (
            <ProductTierCard key={tier.name} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductTiers;