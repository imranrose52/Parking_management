import React from "react";
import { deleteParking } from "../../store/slice/parking-slice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const Delete = ({ data: parking }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="modal fade"
      tabindex="-1"
      id="modal-user-delete"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Delete</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <h5>Are You sure ?</h5>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                dispatch(deleteParking(parking._id))
                  .unwrap()
                  .then((r) => {
                    toast.warn("Deleted Successfuly...", { type: "success" });
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

export default Delete;
