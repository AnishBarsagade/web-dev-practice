import React from 'react';
import Card from './Card';

const Middle = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6">
        <div className="info flex items-start justify-between mt-12">
          <div className="what ">
            <h2 className="text-5xl font-semibold ">What is USD Bloom?</h2>
            <button className="bg-black mt-6 text-sm text-white px-6 py-1.5 rounded-3xl ">
              Explore Now
            </button>
          </div>
          <div className="description w-112.5  pr-1">
            <p className="text-3xl">
              USD Bloom is a yield-bearing stablecoin that helps your capital
              grow while staying pegged to the U.S dollar.
            </p>
          </div>
        </div>
      </div>
      <Card />
    </>
  );
};

export default Middle;
