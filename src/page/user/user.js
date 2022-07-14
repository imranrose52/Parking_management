import React from "react";
import Add from "./add";
import Edit from "./Edit";

const User = () => {
  const userDetails = [
    {
      id: 1,
      user_name: "Baharul",
      mobile: "90998978",
      vehicle_number: "AS150668",
      vehicle_name: "alto 800",
    },
    {
      id: 2,
      user_name: "Hasan",
      mobile: "8778766546",
      vehicle_number: "AS150987",
      vehicle_name: "BMW a8",
    },
    {
      id: 3,
      user_name: "Korim",
      mobile: "778896530",
      vehicle_number: "AS150875",
      vehicle_name: "Apache 160",
    },
    {
      id: 4,
      user_name: "Nazma",
      mobile: "6678908675",
      vehicle_number: "AS15H9900",
      vehicle_name: "Hero Honda125",
    },
  ];
  return (
    <div className="content-wrapper">
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">User details</h4>
            <button
              type="button"
              class="btn btn-primary btn-icon-text"
              data-bs-toggle="modal"
              data-bs-target="#modal-user-add"
            >
              <i className="fa fa-user-plus" aria-hidden="true"></i>
              &nbsp; Add User
            </button>

            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>SI NO</th>
                    <th>User Name</th>
                    <th>Mobile (ID)</th>
                    <th>Vehicle no</th>
                    <th>Vehicle type</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {userDetails.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.user_name}</td>
                        <td>{item.mobile}</td>
                        <td>{item.vehicle_number}</td>
                        <td>{item.vehicle_name}</td>
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

      {/* use bootstrap modal--------------------> */}
      <Add />
      <Edit />
    </div>
  );
};

export default User;
