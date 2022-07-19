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
        <div className="col-lg-2 col-md-2 col-2">
          <Leftside />
        </div>
        <div className="col-lg-10 col-md-10 col-10">
          <div className="">
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
