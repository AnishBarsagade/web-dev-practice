import React from 'react';
import './AboutSection.css';
import Image from '../../assets/badminton-court.png';
import Image1 from '../../assets/new.png';
const AboutSection = () => {
  return (
    <>
      <div className="about-section">
        <div className="top">
          <button>About Horizon</button>
          <h4>
            At Horizon,we don't play tennis - we live it.Since 2021,our club has
            been a home for players of all levels,from eager beginner to
            seasoned pros.
          </h4>
        </div>
      </div>
      <div className="cards-section">
        <div class="card card-1">
          <img src={Image1} alt="" />
          <p>
            <span>Professional hard courts</span> with tournament-grade
            lightning & climate-control - play in{' '}
            <span>prefect conditions,in any season.</span>
          </p>
          <div className="game-mode">
            <i class="ri-toggle-fill"></i>
            <p>Game mode</p>
          </div>
        </div>
        <div class="card card-2">
          <button>Private & Group Lessons</button>
        </div>
        <div class="card card-3">
          <h5>100+</h5>
          <h6>Pro Coaches</h6>
          <p>
            Cerified professionals ready to boost your game from first serve to
            tournament level.
          </p>
          <div className="skill-container">
            <div className="skill-row">
              <span class="skill-label">Beginner</span>
              <div className="dots-container">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
              </div>
              <span class="skill-value">55</span>
            </div>
            <div className="skill-row">
              <span class="skill-label">Intermediate</span>
              <div className="dots-container">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
              </div>
              <span class="skill-value">40</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-final">
        <h3>A few more facts about us in numbers</h3>
        <div className="numbers-container">
          <div className="bottom-card">
            <h2>12 000+</h2>
            <p>Hours of play annually</p>
          </div>
          <div className="bottom-card">
            <h2>89%</h2>
            <p>Player retention Rate</p>
          </div>
          <div className="bottom-card">
            <h2>1,200+</h2>
            <p>Active Members</p>
          </div>
          <div className="bottom-card">
            <h2>125+</h2>
            <p>Annual Tournaments</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
