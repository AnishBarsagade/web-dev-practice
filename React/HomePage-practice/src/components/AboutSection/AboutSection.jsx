import React from 'react';
import './AboutSection.css';
import Card from './FeatureCard';
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
        <div className="cards-section">
          {/* Card 1: Dark Card (Toggle switch inside) */}
          <Card
            title="Professional hard courts"
            description="with tournament-grade lighting & climate control — play in perfect conditions, in any season."
            bgClass="card-dark"
          >
            <div className="toggle-switch">
              {/* Game mode toggle elements */}
            </div>
          </Card>

          {/* Card 2: Image Card */}
          <Card title="Private & Group Lessons" bgClass="card-image" />

          {/* Card 3: Stats Card (Progress dots inside) */}
          <Card title="100+ Pro Coaches" bgClass="card-light">
            {/* Progress dots wala content */}
          </Card>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
