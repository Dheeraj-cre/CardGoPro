import React from "react";
import "./FeatureSection.css";
import featureImg from "../assets/feature-sample.jpg"; // replace with your own image

function FeatureSection() {
  return (
    <section className="feature">
      {/* Left Image */}
      <div className="feature-image">
        <img src={featureImg} alt="Smart Identity Card" />
      </div>

      {/* Right Content */}
      <div className="feature-text">
        <h2>Smart Identity for a Swipe-Right World.</h2>
        <p>
          We craft premium NFC metal cards with laser engraving and a customizable digital
          portfolio. Share links, socials, contact, Calendly, payments—update anytime.
        </p>
        <p>
          Every card is precision-engineered from aircraft-grade aluminum with a brushed
          finish that feels as premium as it looks. Your digital profile updates instantly,
          so your network always has your latest information.
        </p>
        <button className="btn-primary">What's Included</button>
      </div>
    </section>
  );
}

export default FeatureSection;
