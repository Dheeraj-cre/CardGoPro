import React from "react";
import "./ThirdSection.css";

const ThirdSection = () => {
  return (
    <section className="third-section">
      <div className="container">
        <h2 className="section-title">Why Choose CardGoPro?</h2>
        <p className="section-subtitle">
          Create, customize, and share card designs effortlessly with a modern,
          responsive interface.
        </p>

        <div className="features">
          <div className="feature-card">
            <img
              src="https://img.icons8.com/fluency/96/design.png"
              alt="Card Design"
            />
            <h3>Beautiful Card Designs</h3>
            <p>
              Choose from multiple professional templates or create your own
              unique design.
            </p>
          </div>

          <div className="feature-card">
            <img
              src="https://img.icons8.com/fluency/96/responsive.png"
              alt="Responsive"
            />
            <h3>Fully Responsive</h3>
            <p>
              Works perfectly across desktop, tablet, and mobile for a seamless
              experience.
            </p>
          </div>

          <div className="feature-card">
            <img
              src="https://img.icons8.com/fluency/96/cloud.png"
              alt="Cloud"
            />
            <h3>Easy to Share</h3>
            <p>
              Download or share your card instantly with just one click.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
