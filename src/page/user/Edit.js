import React from "react";

const Edit = () => {
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
            <h5 className="modal-title">Edit user</h5>
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
                  User Name :
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="User Name"
                />
              </div>
              <div className="form-group">
                <label for="#" className="fw-bold">
                  Mobile Number :
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mobile Number"
                />
              </div>
              <div className="form-group">
                <label for="#" className="fw-bold">
                  Vehicle Number :
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Vehicle Number"
                />
              </div>
              <div className="form-group">
                <label for="#" className="fw-bold">
                  Vehicle Type :
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Vehicle Type"
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
