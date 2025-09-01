import React from "react";
import "./Sixthsection.css";

const SixthSection = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Side */}
        <div className="footer-left">
          <h2>Cardgopro</h2>
          <p>
            Premium NFC metal cards that transform how you network. <br />
            Share your digital profile with a simple tap.
          </p>

          <div className="subscribe">
            <input type="email" placeholder="Enter your email" />
            <button>📩</button>
          </div>
          <small>Get product updates and networking tips</small>
        </div>

        {/* Middle Sections */}
        <div className="footer-links">
          <div>
            <h3>Product</h3>
            <ul>
              <li>How It Works</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Enterprise</li>
            </ul>
          </div>

          <div>
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Partners</li>
            </ul>
          </div>

          <div>
            <h3>Resources</h3>
            <ul>
              <li>Blog</li>
              <li>Help Center</li>
              <li>Case Studies</li>
              <li>Design Guide</li>
            </ul>
          </div>

          <div>
            <h3>Legal</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>GDPR</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2024 MetalCard. All rights reserved.</p>
        <div className="social-icons">
          <span>🌐</span>
          <span>🐦</span>
          <span>📷</span>
          <span>💼</span>
        </div>
        <p>
          Made with ❤️ for modern professionals
        </p>
      </div>
    </footer>
  );
};

export default SixthSection;
