import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  is_loading: false,
  error_message: false,
  parkings: [],
  parking: {},
};

// get all Parking------------------------
export const getAll = createAsyncThunk("parking-get-all", async () => {
  let response = await axios.get("/api/v1/admin/parking");

  return response.data.parking;
});

// create driver--------------------
export const createParking = createAsyncThunk(
  "parking-create-new",
  async (body, { rejectWithValue }) => {
    try {
      let response = await axios.post("/api/v1/admin/parking", body);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// delete Parking---------------
export const deleteParking = createAsyncThunk("parking-delete", async (id) => {
  let response = await axios.delete(`api/v1/parking/${id}`);

  return id;
});

// update parking------------
export const updateParking = createAsyncThunk(
  "parking-update",
  async (data) => {
    console.log(data);
    let response = await axios.put(`api/v1/parking/${data._id}`, data);

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

export default parkingSlice.reducer;
