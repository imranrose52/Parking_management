import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="text-center">Parking Management System</h1>
      <NavLink to="/admin">Admin</NavLink>
      <NavLink to="/booking">Booking</NavLink>
    </div>
  );
};

export default Home;
