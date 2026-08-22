import React from 'react';
import myImage from '../assets/logo.svg';

const Navabar = () => {
  return (
    <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto px-6">
      <div className="logo">
        <img className=" h-8" src={myImage} alt="" />
      </div>
      <div className="nav-links flex items-center justify-between gap-4 text-sm text-black/75">
        <a>USD Bloom</a>
        <a>Business</a>
        <a>Treasury</a>
        <a>Developers</a>
        <a>Join Us</a>
      </div>
      <button className="bg-black text-sm text-white px-6 py-1.5 rounded-3xl font-semibold">
        Launch Beta
      </button>
    </div>
  );
};

export default Navabar;
