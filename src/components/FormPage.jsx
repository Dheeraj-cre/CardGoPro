import React from "react";
import { useLocation } from "react-router-dom";

function FormPage() {
  const location = useLocation();
  const selectedDesign = location.state?.design || "Not selected";

  return (
    <div style={{ padding: "20px" }}>
      <h1>Fill Your Details</h1>
      <p><strong>Selected Card Design:</strong> {selectedDesign}</p>
      
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" /> <br /><br />

        <label>Email:</label>
        <input type="email" placeholder="Enter your email" /> <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormPage;
