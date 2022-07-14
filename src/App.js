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

function App() {
  const { login } = useSelector((state) => state.user);

  return (
    <div>
      <Routes>
        <Route path="/*" index element={<Booking_Parking />} />
        <Route path="/admin" element={login ? <Main /> : <Login />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </div>
  );
}

export default App;
