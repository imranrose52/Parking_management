import React, { useEffect } from "react";
import { getTotalCount } from "../../store/slice/parking-slice";
import { useDispatch, useSelector } from "react-redux";

const Hero = () => {
  const dispatch = useDispatch();
  const { parking_count } = useSelector((state) => state.parking);
  useEffect(() => {
    dispatch(getTotalCount());
  }, []);
  return (
    <div className="hero">
      <div className="hero_sub container mt-3">
        <div className="hero_title">
          <h1>
            {parking_count >= 200
              ? "No more Parking Available here"
              : `Parking Available for ${200 - parking_count} Vehicle`}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
