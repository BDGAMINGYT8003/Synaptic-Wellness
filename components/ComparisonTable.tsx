
import React from 'react';
import { COMPARISON_SPECS } from '../constants';

const ComparisonTable: React.FC = () => {
  return (
    <section id="compare" className="py-20 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight gradient-text">
            At a Glance
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            A detailed breakdown of how features and technologies scale across the Synaptic Series.
          </p>
        </div>
        
        <div className="mt-16 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-white/10 rounded-2xl">
                <table className="min-w-full divide-y divide-white/10">
                  <thead className="bg-[#1a1a1a]">
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Feature</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Synaptic Core</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Synaptic Flow</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Synaptic Synapse</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 bg-[#121212]/50">
                    {COMPARISON_SPECS.map((spec) => (
                      <tr key={spec.feature}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">{spec.feature}</td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-400">{spec.core}</td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-400">{spec.flow}</td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-400">{spec.synapse}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
