import React from "react";
import "./Design3.css";


function Design3({ values = {} }) {
  const nameParts = (values.name ?? "").split(" ");

  return (
    <div className="card-design3">
      {/* Front Side */}
      <div className="card-design3-front">
        <div className="card-design3-left">
          <img src="https://via.placeholder.com/60" alt="Logo" />
          <h3>{values.company}</h3>
          <p>Your slogan here</p>
        </div>
        <div className="card-design3-right">
          <h2>
            {nameParts[0]} <span>{nameParts[1] || ""}</span>
          </h2>
          <span>{values.designation}</span>
          <p>📞 {values.phone}</p>
          <p>✉️ {values.email}</p>
          <p>🌐 www.yoururl.com</p>
          <p>📍 66 Park Ave, Brkln</p>
        </div>
      </div>

      {/* Back Side */}
      <div className="card-design3-back">
        <img src="https://via.placeholder.com/60" alt="Logo" />
        <h3>{values.company}</h3>
        <p>Your slogan here</p>
      </div>
    </div>
  );
}


export default Design3;
