import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { getTotalCount } from "../store/slice/parking-slice";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { parking_count } = useSelector((state) => state.parking);
  console.log(parking_count);

  useEffect(() => {
    dispatch(getTotalCount());
  }, [parking_count]);
  return (
    <div className="content-wrapper dashboard-content">
      <h2>Dashboard</h2>
      <div className="card-name container">
        <div className="col-lg-3 col-6 ">
          <div className="small-box bg-primary">
            <div className="inner">
              <h3 className="mx-4 text-light">{parking_count}</h3>
              <p className="mx-4 text-light">Total Parking</p>
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
              <h3 className="mx-4 text-light">200</h3>
              <p className="mx-4 text-light">Booking Slot</p>
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
              <h3 className="mx-4 text-light">
                {parking_count >= 200 ? "0" : 200 - parking_count}
              </h3>
              <p className="mx-4 text-light">Available Slot</p>
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
