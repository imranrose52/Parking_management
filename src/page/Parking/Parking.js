import React, { useEffect, useState } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../store/slice/parking-slice";

const Parking = () => {
  const dispatch = useDispatch();
  const { parkings } = useSelector((state) => state.parking);
  console.log(parkings);

  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <div className="content-wrapper">
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Parking details</h4>
            {/* <button
              type="button"
              class="btn btn-primary btn-icon-text"
              data-bs-toggle="modal"
              data-bs-target="#modal-user-add"
            >
              <i className="fa fa-user-plus" aria-hidden="true"></i>
              &nbsp; Add User
            </button> */}

            <div className="table-responsive mt-5">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>SI NO</th>
                    <th>Customer Name</th>
                    <th>Mobile (ID)</th>
                    <th>Vehicle Number</th>
                    <th>Vehicle Type</th>

                    <th>Status</th>
                    <th>Entry date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {parkings.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.customer_name}</td>
                        <td>{item.mobile_number}</td>
                        <td>{item.vehicle_number}</td>
                        <td>{item.vehicle_name}</td>

                        <td>{item.payment_status}</td>
                        <td>{item.entry_date}</td>
                        <td>
                          <div>
                            <i className="fa fa-eye mx-2"></i>
                            <i
                              className="fa fa-edit mx-2"
                              data-bs-toggle="modal"
                              data-bs-target="#modal-user-edit"
                            ></i>
                            <i className="fa fa-trash mx-2"></i>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parking;
