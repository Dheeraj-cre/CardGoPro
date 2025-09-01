import React from "react";
import "./FourthSection.css";

const FourthSection = () => {
  return (
    <section className="fourth-section">
      <div className="container">
        <h2 className="section-title">How It Works – 3 Easy Steps</h2>
        <p className="section-subtitle">
          From design to deployment, we make it simple to create your premium
          digital identity.
        </p>

        <div className="steps">
          <div className="step-card">
            <div className="step-number">01</div>
            <div className="step-icon">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/paint-palette.png"
                alt="Design Icon"
              />
            </div>
            <h3>Design Your Card</h3>
            <p>
              Choose your finish, color, and custom engraving. Upload your logo
              or artwork for a unique card.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">02</div>
            <div className="step-icon">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/internet--v1.png"
                alt="Profile Icon"
              />
            </div>
            <h3>Build Your Profile</h3>
            <p>
              Add links, gallery, forms, payment options, and social media.
              Customize your digital portfolio in minutes.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">03</div>
            <div className="step-icon">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/combo-chart.png"
                alt="Analytics Icon"
              />
            </div>
            <h3>Tap & Track</h3>
            <p>
              Share your profile with a simple tap and view analytics. See who
              viewed your profile and when.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
