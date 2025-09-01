import React from "react";
import "./Design1.css";

function Design1({ values = {} }) {
  return (
    <div className="card-design1">
      {/* Left Section */}
      <div className="card-design1-left">
        {/* <img
          src="https://placehold.co/100x100"  // ✅ fixed placeholder
          alt="Logo"
          className="logo"
        /> */}
        <h2 className="company">{values.company || "YOUR COMPANY"}</h2>
        <p className="title">{values.title || "TITLE"}</p>
      </div>

      {/* Right Section */}
      <div className="card-design1-right">
        <h2 className="name">{values.name || "YOUR NAME"}</h2>
        <p className="designation">{values.designation || "MANAGING DIRECTOR"}</p>

        <div className="contact-info">
          <p>📍 {values.location || "123 Anywhere St., Any City"}</p>
          <p>✉️ {values.email || "hello@reallygreatsite.com"}</p>
          <p>📞 {values.phone || "+123-456-7890"}</p>
        </div>
      </div>
    </div>
  );
}

export default Design1;
