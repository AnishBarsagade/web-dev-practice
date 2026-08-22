import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Middle from './components/Middle';
import CompanyLogos from './components/CompanyLogos';
import UserSection from './components/UserSection';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="all px-4 py-8 sm:px-6 lg:px-8">
        <HeroSection />
        <Middle />
        <CompanyLogos />
        <UserSection />
      </div>
    </div>
  );
};

export default App;
