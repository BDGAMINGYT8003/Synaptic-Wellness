import React from 'react';
import Hero from '../components/Hero';
import CoreTech from '../components/CoreTech';
import ProductTiers from '../components/ProductTiers';
import ComparisonTable from '../components/ComparisonTable';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <CoreTech />
      <ProductTiers />
      <ComparisonTable />
    </>
  );
};

export default HomePage;