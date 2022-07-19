import React, { useEffect, useState } from "react";
import axios from "axios";
import Add from "./add";
import Edit from "./Edit";

const Vehicle = () => {
  const [vehicle, setVehicle] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/api/v1/admin/parking");
        const mydata = response.data.parking;

        setVehicle(mydata);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  const vehicleDetails = [
    {
      id: 1,
      vehicle_number: "AS15M9087",
      vehicle_name: "alto 800",
      owner_name: "Imran",
      entry_date: "16/05/2022",
    },
    {
      id: 2,
      vehicle_number: "AS15M987",
      vehicle_name: "Maruti suzuki",
      owner_name: "Hasan",
      entry_date: "19/5/2022",
    },
    {
      id: 3,
      vehicle_number: "AS13M9989",
      vehicle_name: "BMW 09",
      owner_name: "Ab Bhai",
      entry_date: "13/05/2022",
    },
    {
      id: 4,
      vehicle_number: "AS15M4215",
      vehicle_name: "Pulsar 220",
      owner_name: "Nazma",
      entry_date: "09/05/2022",
    },
  ];
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
                    <th scope="col">Vehicle number</th>
                    <th scope="col">Vehicle name</th>
                    <th scope="col">Owner name</th>
                    <th scope="col">Entry date</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {vehicle.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.vehicle_number}</td>
                        <td>{item.vehicle_name}</td>
                        <td>{item.customer_name}</td>
                        <td>{item.entry_date}</td>
                        <td>
                          <div>
                            <i className="fa fa-eye mx-2"></i>
                            {/* <i
                              className="fa fa-edit mx-2"
                              data-bs-toggle="modal"
                              data-bs-target="#modal-vehicle-edit"
                            ></i> */}
                            {/* <i className="fa fa-trash mx-2"></i> */}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Add />
      <Edit />
    </div>
  );
};

export default Vehicle;
