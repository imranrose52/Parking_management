import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Leftside = () => {
  return (
    <div>
      <nav className="left-side bg-dark">
        <ul>
          <li>
            <NavLink className="nav-link text-light" to="/admin/dashboard">
              <i class="fa fa-home"></i>
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="nav-link text-light" to="/admin/user">
              <i className="fa fa-user"></i>
              <span>User details</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link text-light" to="/admin/vehicle">
              <i className="fa fa-car"></i>
              <span>Vehicle details</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link text-light" to="/admin/parking">
              <i className="fa fa-car"></i>
              <span>Parking details</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="nav-link text-light" to="#">
              <i className="fa fa-credit-card"></i>
              <span>Payment details</span>
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </nav>
    </div>
  );
};

export default Leftside;
