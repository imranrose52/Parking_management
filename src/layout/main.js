import React from "react";

import Dashboard from "../page/dashboard";
import Header from "../page/header";
import Leftside from "./left-side";
import Navigation from "./navigation";

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
            <Navigation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
