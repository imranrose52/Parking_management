import React, { useEffect } from "react";
import { getTotalCount, count_By_date } from "../../store/slice/parking-slice";
import { useDispatch, useSelector } from "react-redux";

const Hero = () => {
  const dispatch = useDispatch();
  const { parking_count, parking_count_by_date } = useSelector(
    (state) => state.parking
  );

  const todayDate = new Date().toISOString().slice(0, 10);
  console.log(todayDate);

  useEffect(() => {
    dispatch(getTotalCount());
    dispatch(count_By_date());
  }, []);

  const getdata = parking_count_by_date.filter((i) => i._id === todayDate);
  console.log(getdata);
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
