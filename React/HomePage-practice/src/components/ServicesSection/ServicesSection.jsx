import React from 'react';
import './ServicesSection.css';
const ServicesSection = () => {
  return (
    <>
      <div className="cards-section-final">
        <div className="card-one ">
          <button className="services">Services</button>
          <h3>
            Explore our full range of coaching,and tennis experiences.From first
            serve to match point -we've got the right program for you.
          </h3>
          <button className="explore-more">
            Explore More <i class="ri-arrow-right-up-long-line"></i>
          </button>
        </div>
        <div className="card-two card">
          <button className="glass">Training Programs</button>
          <div className="end">
            <p>Programs designed for all ages and abilities.</p>
            <i class="ri-arrow-right-up-long-line"></i>
          </div>
        </div>
        <div className="card-three card">
          <div className="top-image">
            <div className="text">
              <button className="glass">Court Access</button>
              <p>Hourly Court Rental</p>
            </div>
            <p className="last-line">
              Step into a space built for players - to grow,compete and thrive.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
