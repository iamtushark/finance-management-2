// src/App.tsx
import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import FeatureList from './FeatureList';
import FeaturesSection from './FeaturesSection';

const App: React.FC = () => (
  <div>
    <Header />
    <HeroSection />
    <FeatureList />
    <FeaturesSection />
  </div>
);

export default App;
