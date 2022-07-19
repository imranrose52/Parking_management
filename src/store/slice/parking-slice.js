import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import rootClient from "../../config/rootClient";

const initialState = {
  is_loading: false,
  error_message: false,
  parking_count: 0,
  parkings: [],
  parking: {
    customer_name: "",
    vehicle_number: "",
    vehicle_name: "",
    mobile_number: "",
    entry_date: "",
  },
};

// get all Parking------------------------
export const getAll = createAsyncThunk("parking-get-all", async () => {
  let response = await rootClient.get("/api/v1/admin/parking");

  return response.data.parking;
});

// get all Parking total count------------------------
export const getTotalCount = createAsyncThunk(
  "parking-total-count",
  async () => {
    let response = await rootClient.get("/api/v1/admin/parkingCount");

    return response.data.count;
  }
);

// create driver--------------------
export const createParking = createAsyncThunk(
  "parking-create-new",
  async (body, { rejectWithValue }) => {
    try {
      let response = await rootClient.post("/api/v1/admin/parking", body);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// delete Parking---------------
export const deleteParking = createAsyncThunk("parking-delete", async (id) => {
  let response = await rootClient.delete(`/api/v1/admin/parking/${id}`);

  return id;
});

// update parking------------
export const updateParking = createAsyncThunk(
  "parking-update",
  async (data) => {
    console.log(data);
    let response = await rootClient.put(
      `/api/v1/admin/parking/${data._id}`,
      data
    );

    return data;
  }
);

const parkingSlice = createSlice({
  name: "parking",
  initialState,
  reducers: {
    getParking(state, action) {
      state.parking = state.parkings.find(
        (item) => item._id === action.payload
      );
    },
    setCustomer_name(state, action) {
      state.parking.customer_name = action.payload;
    },
    setMobile_number(state, action) {
      state.parking.mobile_number = action.payload;
    },
    setVehicle_number(state, action) {
      state.parking.vehicle_number = action.payload;
    },
    setVehicle_name(state, action) {
      state.parking.vehicle_name = action.payload;
    },
    setEntry_date(state, action) {
      state.parking.entry_date = action.payload;
    },
  },
  extraReducers: {
    // get all parking--------
    [getAll.fulfilled]: (state, action) => {
      state.parkings = action.payload;
      state.is_loading = false;
    },
    [getAll.pending]: (state, action) => {
      state.is_loading = true;
    },
    [getTotalCount.fulfilled]: (state, action) => {
      state.parking_count = action.payload;
    },

    // create parking-----
    [createParking.fulfilled]: (state, action) => {
      state.parkings = action.payload;
    },
    [createParking.rejected]: (state, action) => {
      state.error_message = "Something is Wrong !!..";
    },

    // update parking------------
    [updateParking.fulfilled]: (state, action) => {
      const updatedData = action.payload;
      state.parkings = state.parkings.map((item) =>
        item._id === updatedData._id ? updatedData : item
      );
      state.parking = updatedData;
    },

    // delete------------
    [deleteParking.fulfilled]: (state, { payload: id }) => {
      state.parkings = state.parkings.filter((item) => item._id !== id);
    },
  },
});
export const {
  getParking,
  setCustomer_name,
  setMobile_number,
  setVehicle_name,
  setEntry_date,
  setVehicle_number,
} = parkingSlice.actions;
export default parkingSlice.reducer;
