import React from "react";

const Add = () => {
  return (
    <div>
      <div
        className="modal fade"
        tabindex="-1"
        id="modal-vehicle-add"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add User</h5>
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
                  <label for="#" className="fw-bold form-label">Vehicle Number :</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Vehicle Number"
                  />
                </div>
                <div className="form-group">
                  <label for="#" className="fw-bold">Vehicle Name :</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Vehicle Name"
                  />
                </div>
                <div className="form-group">
                  <label for="#" className="fw-bold">Owner Name :</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Owner name"
                  />
                </div>
                <div className="form-group">
                  <label for="#" className="fw-bold">Entry Date :</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Entry Date"
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
    </div>
  );
};

export default Add;
