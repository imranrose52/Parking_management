import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home_main">
      <div className="home_page">
        <h1 className="text-center">Parking Management System of Amtron</h1>

        {/* <NavLink to="/booking">Booking</NavLink> */}
        <div className="online_booking">
          <button onClick={() => navigate("/booking")} className="botton btn">
            Online Booking
          </button>
        </div>
      </div>
      <div className="about">
        <h4 className="text-primary">Developed by ____</h4>
        <h3 className="ms-2">Abul Bahar Ahmed</h3>
      </div>
    </div>
  );
};

export default Home;
