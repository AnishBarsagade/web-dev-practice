import React from 'react';
import myImage from '../assets/logo.svg';
const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 w-full  flex flex-col items-center">
      <div className="hero-card container h-137.5 mx-auto flex flex-col items-center justify-start gap-3 rounded-3xl">
        <div className="logo mt-6">
          <img src={myImage} alt="" />
        </div>
        <h1 className="mt-6 text-5xl font-semibold">Where Money Grows</h1>
        <p className="mt-6 max-w-lg text-center text-xl">
          A programmable, utility-driven stable token <br />
          designed for native value accrual and seamless <br />
          integration with DeFi
        </p>
        <button className="mt-6 text-lg bg-black text-white px-6 py-1.5 rounded-3xl active:scale-[0.95] transition-all duration-300 ease-in">
          Try it now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
