import React from "react";
import Dashboard from "../page/dashboard";
import User from "../page/user/user";

import Vehicle from "../page/vehicle/vehicle";
import Parking from "../page/Parking/Parking";
import AddParking from "../page/user/addParking";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Routes>
        <Route path="/" index element={<Dashboard />} />
        {/* <Route path="/user" element={<User />} /> */}
        <Route path="/admin/user" element={<AddParking />} />
        <Route path="/admin/vehicle" element={<Vehicle />} />
        <Route path="/admin/parking" element={<Parking />} />
      </Routes>
    </div>
  );
};

export default Navigation;
