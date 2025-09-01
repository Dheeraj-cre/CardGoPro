import React, { useState } from "react";
import "./FifthSection.css";

const testimonials = [
  {
    id: 1,
    text: "The analytics feature is game-changing. I can see exactly when prospects view my profile and follow up at the perfect time.",
    name: "Marcus Rodriguez",
    role: "Business Development, InnovateLab",
    rating: 5,
  },
  {
    id: 2,
    text: "MetalCard has elevated my professional image. Clients are always impressed with the design and technology.",
    name: "Sophia Chen",
    role: "Marketing Director, BrightEdge",
    rating: 5,
  },
  {
    id: 3,
    text: "I love how simple it is to share my contact info. It saves me so much time at networking events.",
    name: "David Lee",
    role: "Freelance Designer",
    rating: 4,
  },
];

const FifthSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="fifth-section">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">
          Real results from real professionals using MetalCard
        </p>

        <div className="testimonial-card">
          <div className="rating">
            {"★".repeat(testimonials[currentIndex].rating)}{" "}
            {"☆".repeat(5 - testimonials[currentIndex].rating)}
          </div>
          <p className="testimonial-text">
            "{testimonials[currentIndex].text}"
          </p>
          <h3 className="testimonial-name">
            {testimonials[currentIndex].name}
          </h3>
          <p className="testimonial-role">
            {testimonials[currentIndex].role}
          </p>

          <button className="nav-btn prev" onClick={prevSlide}>
            &#8249;
          </button>
          <button className="nav-btn next" onClick={nextSlide}>
            &#8250;
          </button>
        </div>

        <div className="dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
