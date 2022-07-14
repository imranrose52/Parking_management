import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Add Parking</h4>
            <form className="forms-sample mt-4">
              <div className="form-group">
                <label for="#" className="fw-bold form-label">
                  Customer Name :
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="customer name"
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
                <label for="#" className="fw-bold">
                  Slot :
                </label>
                {/* <input
        type="text"
        className="form-control"
        placeholder="Vehicle number"
      /> */}
                <select
                  className="form-control"
                  onChange={(e) =>
                    setParking((prev) => ({
                      ...prev,
                      slot: e.target.value,
                    }))
                  }
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </form>
          </div>
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
    </div>
  );
};

export default AddParking;
