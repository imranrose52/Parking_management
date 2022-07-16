import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header_nav">
      <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid d-flex ">
          <a className="navbar-brand text-light mx-5" href="#">
            <h2>Online Parking Booking </h2>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item ">
                <NavLink
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/booking"
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                {/* <a className="nav-link" href="#">
                  Admin
                </a> */}
                <NavLink className="nav-link text-light" to="/admin">
                  Admin
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
