import React from "react";
import "./HeroSection.css";
import cardImg from "../assets/card-sample.jpg"; // replace with your own image

function HeroSection() {
  return (
    <section className="hero">
      {/* Left side text */}
      <div className="hero-text">
        <h1>
          The Last Business <br /> Card You'll Ever Need.
        </h1>
        <p>
          Tap to share your profile, portfolio, and payments—no apps required.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Explore Cards →</button>
          <button className="btn-outline">See Live Demo</button>
        </div>
      </div>

      {/* Right side image */}
      <div className="hero-image">
        <img src={cardImg} alt="Business Card Example" />
      </div>
    </section>
  );
}

export default HeroSection;
