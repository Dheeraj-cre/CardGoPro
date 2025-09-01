import React from "react";
import "./DefaultDesign.css";

const DefaultDesign = ({ values }) => {
  return (
    <div className="default-card">
      {/* Left Section */}
      <div className="default-card-left">
        <div className="logo-circle">
          {values.name ? values.name.charAt(0).toUpperCase() : "N"}
        </div>
        <h4 className="company">{values.company || "Your Company"}</h4>
      </div>

      {/* Right Section */}
      <div className="default-card-right">
        <h3 className="name">{values.name || "John Doe"}</h3>
        <p className="role">{values.role || "Software Engineer"}</p>
        <p className="designation">{values.designation || "Developer"}</p>
        <div className="contact-info">
          <p>📧 {values.email || "example@mail.com"}</p>
          <p>📞 {values.phone || "+91 9876543210"}</p>
        </div>
      </div>
    </div>
  );
};

export default DefaultDesign;
