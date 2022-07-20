import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Leftside = () => {
  return (
    <div>
      <nav className="left-side bg-dark">
        <ul>
          <li>
            <NavLink className="nav-link text-light" to="">
              <i class="fa fa-home"></i>
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="nav-link text-light" to="user">
              <i className="fa fa-user"></i>
              <span>Booking </span>
            </NavLink>
          </li>

          <li>
            <NavLink className="nav-link text-light" to="/admin/parking">
              <i className="fa fa-car"></i>
              <span>Parking details</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link text-light" to="vehicle">
              <i className="fa fa-car"></i>
              <span>Vehicle details</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link text-light" to="report">
              <i className="fa fa-car"></i>
              <span>Day Wise Report</span>
            </NavLink>
          </li>
          {/* 
          <li>
            <NavLink className="nav-link text-light" to="#">
              <i className="fa fa-credit-card"></i>
              <span>Payment details</span>
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Leftside;
