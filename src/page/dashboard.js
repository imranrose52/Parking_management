import React from "react";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="content-wrapper dashboard-content">
      <h2>Dashboard</h2>
      <div className="card-name container">
        <div className="col-lg-3 col-6 ">
          <div className="small-box bg-primary">
            <div className="inner">
              <h3 className="mx-4 text-light">100</h3>
              <p className="mx-4 text-light">Total Parking</p>
            </div>
            <div className="icon">
              <i className="fa fa-user mx-3 text-light"></i>
            </div>

            <NavLink
              className="small-box-footer nav-link text-light text-center"
              to="#"
            >
              {" "}
              more details{" "}
            </NavLink>
          </div>
        </div>
        <div className="col-lg-3 col-6 ">
          <div className="small-box bg-info">
            <div className="inner">
              <h3 className="mx-4 text-light">100</h3>
              <p className="mx-4 text-light">Booking Slot</p>
            </div>
            <div className="icon">
              <i className="fa fa-user mx-3 text-light"></i>
            </div>

            <NavLink
              className="small-box-footer nav-link text-light text-center"
              to="#"
            >
              {" "}
              more details{" "}
            </NavLink>
          </div>
        </div>
        <div className="col-lg-3 col-6 ">
          <div className="small-box bg-success">
            <div className="inner">
              <h3 className="mx-4 text-light">50</h3>
              <p className="mx-4 text-light">Available Slot</p>
            </div>
            <div className="icon">
              <i className="fa fa-user mx-3 text-light"></i>
            </div>

            <NavLink
              className="small-box-footer nav-link text-light text-center"
              to="#"
            >
              {" "}
              more details{" "}
            </NavLink>
          </div>
        </div>
  
      </div>
    </div>
  );
};

export default Dashboard;
