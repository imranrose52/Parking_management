import React from "react";

import Dashboard from "../page/dashboard";
import Header from "../page/header";
import Leftside from "./left-side";
import Navigation from "./navigation";
import { Outlet } from "react-router-dom";
import Footer from "../page/Booking_system/Footer";

const Main = () => {
  return (
    <div className="container-fluid">
      <Header />
      <div className="row">
        <div className="col-2">
          <Leftside />
        </div>
        <div className="col-9">
          <div className="mx-4 mt-3">
            {/* <Navigation /> */}
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
