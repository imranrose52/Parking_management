import React from "react";
import {
  setCustomer_name,
  setMobile_number,
  setVehicle_number,
  setVehicle_name,
  setEntry_date,
  updateParking,
} from "../../store/slice/parking-slice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const Edit = ({ data: parking }) => {
  const dispatch = useDispatch();
  const update_parking = useSelector((state) => state.parking.parking);
  return (
    <div
      className="modal fade"
      tabindex="-1"
      id="modal-user-edit"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit User</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form className="forms-sample">
              <div className="form-group">
                <label for="#" className="fw-bold form-label">
                  Customer Name :
                </label>
                <input
                  type="text"
                  value={parking.customer_name}
                  onChange={(e) => dispatch(setCustomer_name(e.target.value))}
                  className="form-control"
                  placeholder="customer name"
                />
              </div>
              <div className="form-group">
                <label for="#" className="fw-bold">
                  Mobile Number :
                </label>
                <input
                  type="text"
                  value={parking.mobile_number}
                  onChange={(e) => dispatch(setMobile_number(e.target.value))}
                  className="form-control"
                  placeholder="Mobile number"
                />
              </div>
              <div className="form-group">
                <label for="#" className="fw-bold">
                  Vehicle Name :
                </label>
                <input
                  type="text"
                  value={parking.vehicle_name}
                  onChange={(e) => dispatch(setVehicle_name(e.target.value))}
                  className="form-control"
                  placeholder="Vehicle name"
                />
              </div>
              <div className="form-group">
                <label for="#" className="fw-bold">
                  Vehicle Number :
                </label>
                <input
                  type="text"
                  value={parking.vehicle_number}
                  onChange={(e) => dispatch(setVehicle_number(e.target.value))}
                  className="form-control"
                  placeholder="Vehicle number"
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={() => {
                dispatch(updateParking(update_parking))
                  .unwrap()
                  .then((r) => {
                    toast.warn("Updated Successfuly...", { type: "success" });
                  })
                  .catch((e) => {
                    toast.warn("Something Wrong !", { type: "error" });
                  });
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
