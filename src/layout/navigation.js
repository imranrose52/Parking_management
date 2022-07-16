import React from "react";
import Dashboard from "../page/dashboard";
import User from "../page/user/user";

import Vehicle from "../page/vehicle/vehicle";
import Parking from "../page/Parking/Parking";
import AddParking from "../page/user/addParking";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Routes>
        <Route path="/admin" element={<Dashboard />}>
          {/* <Route path="/user" element={<User />} /> */}
          <Route path="user" element={<AddParking />} />
          <Route path="vehicle" element={<Vehicle />} />
          <Route path="parking" element={<Parking />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Navigation;
