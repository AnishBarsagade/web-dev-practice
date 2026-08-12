import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
const App = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="main">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
      </div>
    </div>
  );
};

export default App;
