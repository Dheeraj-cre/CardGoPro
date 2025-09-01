import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Form from "./Form";

// Import all designs
import DefaultDesign from "./designs/DefaultDesign";
import Design3 from "./designs/Design3";   // ✅ Import Design3
// (If you also have Design1, Design2 files, import them too)
import Design1 from "./designs/Design1"; 
// import Design2 from "./designs/Design2";

import "./CardDesignsPage.css";

const CardDesignPage = () => {
  const [design, setDesign] = useState("default");
  const [values, setValues] = useState({});
  const cardRef = useRef(null);

  const handleDownloadImage = async (type) => {
    const element = cardRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const dataUrl = canvas.toDataURL(`image/${type}`);
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `business-card.${type}`;
    link.click();
  };

  const handleDownloadPDF = async () => {
    const element = cardRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 20, pdfWidth, pdfHeight);
    pdf.save("business-card.pdf");
  };

  // Switch design component
  const renderDesign = () => {
    switch (design) {
      case "Design1":
        return <Design1 values={values} />;
      case "design2":
        return <Design2 values={values} />;
      case "Design3":                         {/* ✅ Add Design3 */}
        return <Design3 values={values} />;
      default:
        return <DefaultDesign values={values} />;
    }
  };

  return (
    <div className="page-container">
      {/* Left Side - Form */}
      <Form onChange={setValues} />

      {/* Right Side - Card Preview */}
      <div className="right-side">
        <div className="design-selector">
          {["default", "Design1", "design2", "design3"].map((d) => (  // ✅ Added design3 option
            <label key={d}>
              <input
                type="radio"
                name="design"
                value={d}
                checked={design === d}
                onChange={(e) => setDesign(e.target.value)}
              />
              {d.charAt(0).toUpperCase() + d.slice(1)}
            </label>
          ))}
        </div>

        {/* Preview */}
        <div ref={cardRef}>{renderDesign()}</div>

        {/* Download Buttons */}
        <div className="download-buttons">
          <button type="button" onClick={() => handleDownloadImage("png")}>
            Download PNG
          </button>
          <button type="button" onClick={() => handleDownloadImage("jpeg")}>
            Download JPEG
          </button>
          <button type="button" onClick={handleDownloadPDF}>
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDesignPage;
