import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
const App = () => {
  return (
    <div className="container">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default App;
