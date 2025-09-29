import React from 'react';
import { DETAILED_TECHNOLOGIES } from '../constants';
import BackButton from '../components/BackButton';

const TechnologyPage: React.FC = () => {
  return (
    <div className="bg-black/20">
      <div className="container mx-auto px-6 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto">
          <BackButton />
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight gradient-text">
              Core Technology Platform
            </h1>
            <p className="mt-4 text-lg text-gray-400">
              The Synaptic Pleasure Series is built upon a common foundation of material safety, industrial durability, and robust data security. Explore the innovations that define our products.
            </p>
          </div>

          <div className="space-y-16">
            {DETAILED_TECHNOLOGIES.map((category) => (
              <div key={category.category}>
                <h2 className="text-2xl font-semibold text-white border-b border-purple-500/30 pb-3 mb-8">
                  {category.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((item) => (
                    <div key={item.title} className="bg-[#1a1a1a]/50 backdrop-blur-sm border border-white/10 p-6 rounded-2xl h-full">
                      <div className="text-purple-400 text-2xl mb-4">
                        <i className={item.icon}></i>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyPage;