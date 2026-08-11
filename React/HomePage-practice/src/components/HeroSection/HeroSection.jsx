import React from 'react';
import Navbar from '../Navbar/Navbar';
import './HeroSection.css';
import AboutSection from '../AboutSection/AboutSection';

const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <div className="navbar">
          <h2>Horizon Courts</h2>
          <nav>
            <button className="btn-about">About us</button>
            <a href="#">Sevices</a>
            <a href="#">Coaches</a>
            <a href="#">Events</a>
            <a href="#">Contacts</a>
          </nav>
          <button className="book">
            Book Now <i class="ri-arrow-right-up-long-line"></i>
          </button>
        </div>
        <div className="hero-image">
          <div className="hero-card">
            <div className="hero-text">
              <h1>
                Unleash Your Inner Champion Today.
                <br />
                All In One Place.
              </h1>
              <p>Join the ultimate tennis experience...</p>
              <button className="btn-hero">Start your own journey</button>
            </div>
          </div>
        </div>
        <div className="bottom">
          <button className="bottom-btn">
            Instagram <i class="ri-arrow-right-up-long-line"></i>
          </button>
          <button className="bottom-btn">
            Facebook <i class="ri-arrow-right-up-long-line"></i>
          </button>
          <button className="bottom-btn">
            Twitter<i class="ri-arrow-right-up-long-line"></i>
          </button>
        </div>
      </div>
      <AboutSection />
    </>
  );
};

export default HeroSection;
