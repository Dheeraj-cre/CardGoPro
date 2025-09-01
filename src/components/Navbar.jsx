import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Auto close mobile menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleLinkClick = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="logo">CardGoPro</div>

        {/* Hamburger (mobile) */}
        <button
          className={`hamburger ${open ? "is-active" : ""}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        {/* Navigation links */}
        <nav className={`nav-menu ${open ? "open" : ""}`}>
          <ul>
            <li><Link to="/home" onClick={handleLinkClick}>Home</Link></li>
            <li><Link to="/card-designs" onClick={handleLinkClick}>Card Designs</Link></li>
            <li><Link to="/form" onClick={handleLinkClick}>Form</Link></li>
            <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
            <li><Link to="/auth" onClick={handleLinkClick}>Login / Signup</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
