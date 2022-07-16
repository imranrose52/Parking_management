import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const navigate = useNavigate();
  const [parking, setParking] = useState({
    customer_name: "",
    mobile_number: "",
    vehicle_name: "",
    vehicle_number: "",
    entry_date: "",
  });

  const AddParking = async (e) => {
    e.preventDefault();
    if (
      !parking.customer_name ||
      !parking.mobile_number ||
      !parking.vehicle_name ||
      !parking.vehicle_number ||
      !parking.entry_date
    ) {
      alert("Plz fill all data");
    } else {
      try {
        const response = await axios.post("/api/v1/admin/parking", parking);
        const mydata = response.data;
        alert(`You have Successfully Submited Mr. ${parking.customer_name}`);
        navigate(`/view/:${parking.customer_name}`);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <section className="booking_page">
      <div className="booking_parking">
        <h3 className="text-center mt-3">Booking Parking</h3>
      </div>
      <div className="container">
        <div className="form mt-5">
          <form className="forms-sample ">
            <div className="form-group">
              <label for="#" className="fw-bold form-label">
                Visiting Date :
              </label>
              <input
                type="date"
                className="form-control"
                placeholder="visiting date"
                onChange={(e) =>
                  setParking((prev) => ({
                    ...prev,
                    entry_date: e.target.value,
                  }))
                }
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Customer Name"
                onChange={(e) =>
                  setParking((prev) => ({
                    ...prev,
                    customer_name: e.target.value,
                  }))
                }
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Mobile Number (10 digits only)"
                onChange={(e) =>
                  setParking((prev) => ({
                    ...prev,
                    mobile_number: e.target.value,
                  }))
                }
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Vehicle Number  ( e.g AS-15M-1010)"
                onChange={(e) =>
                  setParking((prev) => ({
                    ...prev,
                    vehicle_number: e.target.value,
                  }))
                }
                required
              />
            </div>
            <div className="form-group">
              {/* <input
                type="text"
                className="form-control"
                placeholder="Vehicle Type"
                onChange={(e) =>
                  setParking((prev) => ({
                    ...prev,
                    vehicle_name: e.target.value,
                  }))
                }
                required
              /> */}
              <select
                className="form-control"
                onChange={(e) =>
                  setParking((prev) => ({
                    ...prev,
                    vehicle_name: e.target.value,
                  }))
                }
              >
                <option>Select Vehicle type</option>
                <option value="Four Wheelers">Four Wheelers</option>
                <option value="Bike">Bike</option>
                <option value="Van">Van</option>
              </select>
            </div>
          </form>
          <button
            type="button "
            className="btn btn-primary w-25"
            onClick={AddParking}
          >
            Submit
          </button>
        </div>
        <div className="instruction"></div>
      </div>
    </section>
  );
};

export default Booking;
