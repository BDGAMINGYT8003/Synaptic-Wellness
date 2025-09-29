import React from 'react';
import { CORE_TECHNOLOGIES } from '../constants';
import type { CoreTechnology } from '../types';
import { Link } from 'react-router-dom';

const TechCard: React.FC<{ tech: CoreTechnology }> = ({ tech }) => {
  return (
    <div className="bg-[#1a1a1a]/50 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col items-start h-full">
      <div className="text-purple-400 text-2xl mb-4">
        <i className={tech.icon}></i>
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{tech.title}</h3>
      <p className="text-sm text-gray-400">{tech.description}</p>
    </div>
  );
};

const CoreTech: React.FC = () => {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight gradient-text">
            A Foundation of Excellence
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Every Synaptic Series vibrator is built upon a common foundation that guarantees body-safe materials, industrial durability, and robust data security for your peace of mind.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CORE_TECHNOLOGIES.map((tech) => (
            <TechCard key={tech.title} tech={tech} />
          ))}
        </div>
        <div className="mt-16 text-center">
            <Link to="/technology" className="bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105">
                Learn More About Our Technology
            </Link>
        </div>
      </div>
    </section>
  );
};

export default CoreTech;
