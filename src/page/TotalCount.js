import React, { useEffect } from "react";
import { count_By_date } from "../store/slice/parking-slice";
import { useDispatch, useSelector } from "react-redux";

const TotalCount = () => {
  const dispatch = useDispatch();
  const { parking_count_by_date } = useSelector((state) => state.parking);
  useEffect(() => {
    dispatch(count_By_date());
  }, []);
  return (
    <div className="content-wrapper">
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Vehicle Information</h4>

            <div className="table-responsive mt-5">
              <table className="table table-striped table-bordered">
                <thead className="">
                  <tr>
                    <th scope="col">SI NO</th>
                    <th scope="col">Total Booking</th>

                    <th scope="col">Date </th>
                  </tr>
                </thead>
                <tbody>
                  {parking_count_by_date.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.count}</td>
                        <td>{item._id}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalCount;
