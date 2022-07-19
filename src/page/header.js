import React from "react";
import { logout } from "../store/slice/login-slice";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="header">
      <div className="mx-5 text-light">
        <a href="/" className="nav-link fw-bold text-light">
          Admin
        </a>
      </div>
      <div>
        <div className="dropdown ">
          <button
            className="btn  dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa fa-user fw-bold"></i>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => dispatch(logout())}
              >
                logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
