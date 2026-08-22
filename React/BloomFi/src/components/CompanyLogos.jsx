import React from 'react';
import img1 from '../assets/coderabbit.svg';
import img2 from '../assets/databricks.svg';
import img3 from '../assets/deepseek.svg';

const CompanyLogos = () => {
  return (
    <div className=" max-w-7xl mx-auto px-8 flex justify-between items-center min-h-40">
      <div className="text-sm ">
        <p>
          Backed by the best companies
          <br />
          and visionary agents
        </p>
      </div>
      <div className="flex items-center h-30 gap-5 mr-2">
        <img className="h-7 w-auto" src={img1} alt="" />
        <img className="h-7" src={img2} alt="" />
        <img className="h-7" src={img3} alt="" />
        <img className="h-7" src={img1} alt="" />
        <img className="h-7" src={img2} alt="" />
      </div>
    </div>
  );
};

export default CompanyLogos;
