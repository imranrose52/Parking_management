import React from "react";

const Add = () => {
  return (
    <div>
      <div
        className="modal fade"
        tabindex="-1"
        id="modal-user-add"
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
                  <label for="#" className="fw-bold form-label">Customer Name :</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="customer name"
                  />
                </div>
                <div className="form-group">
                  <label for="#" className="fw-bold">Mobile Number :</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mobile number"
                  />
                </div>
                <div className="form-group">
                  <label for="#" className="fw-bold">Vehicle Name :</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Vehicle name"
                  />
                </div>
                <div className="form-group">
                  <label for="#" className="fw-bold">Vehicle Number :</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Vehicle number"
                  />
                </div>
                <div className="form-group">
                  <label for="#" className="fw-bold">Slot :</label>
                  {/* <input
                    type="text"
                    className="form-control"
                    placeholder="Vehicle number"
                  /> */}
                  <select className="form-control">
                    <option>slot_1</option>
                    <option>slot_2</option>
                  </select>
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
