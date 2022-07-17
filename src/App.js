import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";

import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.css";

import Main from "./layout/main";
import Leftside from "./layout/left-side";
import Login from "./page/login/login";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Booking_Parking from "./layout/Booking_Parking";
import View from "./page/Booking_system/View";
import Navigation from "./layout/navigation";
import AddParking from "./page/user/addParking";
import Dashboard from "./page/dashboard";
import Home from "./page/Home";
import Vehicle from "./page/vehicle/vehicle";
import Parking from "./page/Parking/Parking";

function App() {
  const { login } = useSelector((state) => state.user);

  return (
    <div>
      <Routes>
        {/* <Route path="/" index element={<Booking_Parking />} />
        <Route path="/admin/" element={login ? <Main /> : <Login />}></Route>
        <Route path="/view" element={<View />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/admin/" element={login ? <Main /> : <Login />}>
          <Route path="" index element={<Dashboard />} />
          <Route path="user" element={<AddParking />} />
          <Route path="vehicle" element={<Vehicle />} />
          <Route path="parking" element={<Parking />} />
        </Route>
        <Route path="/booking" element={<Booking_Parking />} />
        <Route path="/view/:name" element={<View />} />
      </Routes>
    </div>
  );
}

export default App;
