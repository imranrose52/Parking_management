import axios from "axios";
import React from "react";

const View = ({ parking }) => {
  const generatePdf = async () => {
    const response = await axios.get("/api/v1/admin/pdf");
  };
  return (
    <div className="container">
      <div className="view_page">
        <h1>Thank You for Booking a Parking slot,</h1>
        <p>You have Successfully booked a parking slot</p>

        <div className="pdf-generate">
          <a target="_blank">
            <button
              type="button"
              class="btn btn-primary w-100"
              onClick={() => generatePdf}
            >
              Download Ticket
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default View;
