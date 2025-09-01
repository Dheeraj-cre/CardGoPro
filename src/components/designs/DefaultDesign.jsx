import React from "react";
import "./DefaultDesign.css"

const DefaultDesign = ({ values }) => {
  return (
    <div className="card-preview">
      <h3>{values.name}</h3>
      <p className="role">{values.role}</p>
      <p className="designation">{values.designation}</p>
      <hr />
      <h4 className="company">{values.company}</h4>
      <p>Email: {values.email}</p>
      <p>Phone: {values.phone}</p>
    </div>
  );
};

export default DefaultDesign;
