import React from 'react';
import bgImg from '../assets/card-bg.png';
const Card = () => {
  return (
    <div className="grid grid-cols-4 gap-4  max-w-7xl mx-auto px-6 mt-15">
      <div className="big-card col-span-2 h-72 bg-[#C5CAE7] rounded-3xl px-4 py-6 flex  justify-between items-start ">
        <div className="text flex flex-col justify-between h-60">
          <h2 className="text-3xl font-semibold ">Capital that grows</h2>
          <p className="text-xl">
            Earn passive income as your stablecoins are deployed into
            high-performing DeFi protocols.
          </p>
        </div>
        <div className=" scale-x-[-1] scale-130 bg-cover bg-center bg-no-repeat">
          <img src={bgImg} alt="" />
        </div>
      </div>
      <div className="card-1 col-span-1 h-72 bg-[#2C2745] text-white rounded-3xl px-4 py-6 flex flex-col justify-between items-center text-center">
        <h3 className="text-2xl font-semibold">Always Liquid,always stable</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis illo
          similique expedita, earum laborum fugit.
        </p>
      </div>
      <div className="card-2 col-span-1 h-72 bg-[#2C2745] text-white rounded-3xl px-4 py-6 flex flex-col justify-between items-center text-center">
        <h3 className="text-2xl font-semibold">100% hands-free</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis illo
          similique expedita, earum laborum fugit.
        </p>
      </div>
    </div>
  );
};

export default Card;
