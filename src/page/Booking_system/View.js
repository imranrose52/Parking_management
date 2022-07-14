import axios from "axios";
import React from "react";

const View = () => {
  const generatePdf = async () => {
    const response = await axios.get("/api/v1/admin/pdf");
  };
  return (
    <div className="container">
      <h1 className="text-center text-danger">
        Thank you for Booking a Parking slot
      </h1>
      <div className="pdf-generate">
        <a target="_blank">
          <button
            type="button"
            class="btn btn-primary btn-sm ml-1"
            onClick={() => generatePdf}
          >
            Download Ticket
          </button>
        </a>
      </div>
    </div>
  );
};

export default View;
