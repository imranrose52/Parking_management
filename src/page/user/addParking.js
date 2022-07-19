import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Outlet } from "react-router-dom";

const AddParking = () => {
  const navigate = useNavigate();

  const [parking, setParking] = useState({
    customer_name: "",
    mobile_number: "",
    vehicle_name: "",
    vehicle_number: "",
    entry_date: "",
    slot: "",
    status: "",
  });

  const AddParking = async (e) => {
    e.preventDefault();
    try {
      const {
        customer_name,
        mobile_number,
        vehicle_name,
        vehicle_number,
        entry_date,
        slot,
        payment_status,
      } = parking;
      const response = await axios.post("/api/v1/parking", parking);
      const mydata = response.data;
      alert("submitted");
      navigate("/parking");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="content-wrapper container">
      <div className=" grid-margin stretch-card">
        <h4 className="text-center">Booking a Parking Slote</h4>
        <form className="forms-sample container">
          <div className="form-group">
            <label for="#" className="fw-bold">
              Entry Date :
            </label>
            <input
              type="date"
              className="form-control"
              placeholder="dd-mm-yy"
              onChange={(e) =>
                setParking((prev) => ({
                  ...prev,
                  entry_date: e.target.value,
                }))
              }
            />
          </div>
          <div className="form-group">
            <label for="#" className="fw-bold form-label">
              Customer Name :
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Customer name"
              onChange={(e) =>
                setParking((prev) => ({
                  ...prev,
                  customer_name: e.target.value,
                }))
              }
            />
          </div>
          <div className="form-group">
            <label for="#" className="fw-bold">
              Mobile Number :
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Mobile number"
              onChange={(e) =>
                setParking((prev) => ({
                  ...prev,
                  mobile_number: e.target.value,
                }))
              }
            />
          </div>
          <div className="form-group">
            <label for="#" className="fw-bold">
              Vehicle Name :
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Vehicle name"
              onChange={(e) =>
                setParking((prev) => ({
                  ...prev,
                  vehicle_name: e.target.value,
                }))
              }
            />
          </div>
          <div className="form-group">
            <label for="#" className="fw-bold">
              Vehicle Number :
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Vehicle number"
              onChange={(e) =>
                setParking((prev) => ({
                  ...prev,
                  vehicle_number: e.target.value,
                }))
              }
            />
          </div>

          <div className="form-group">
            <label for="#" className="fw-bold">
              Vehicle Type :
            </label>

            <select
              className="form-control"
              onChange={(e) =>
                setParking((prev) => ({
                  ...prev,
                  vehicle_name: e.target.value,
                }))
              }
            >
              <option>--Select Vehicle--</option>
              <option value="Four Wheelers">Four Wheelers</option>
              <option value="Bike">Bike</option>
              <option value="Van">Van</option>
              <option value="Auto Riksa">Auto Riksa</option>
            </select>
          </div>
        </form>

        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={AddParking}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddParking;
