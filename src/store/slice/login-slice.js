import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isloading: false,
  login: false,
  errorMessage: null,
  user: {},
};

export const login = createAsyncThunk("user-login", async (user) => {
  const response = await axios.post("/api/v1/login", user);
  console.log(response.data.user);
  return response.data;
});

export const logout = createAsyncThunk("user-logout", async () => {
  let response = await axios.post("/api/v1/logout");
  return response.data.success;
});

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {},

  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.login = true;
      state.user = action.payload.user;
    },
    [login.rejected]: (state, action) => {
      state.isloading = false;
      state.errorMessage = "Wrong email and password ";
    },
    [login.pending]: (state) => {
      state.isloading = true;
    },
    // logout ---------------------------------------------
    [logout.fulfilled]: (state, action) => {
      state.login = false;
    },
    [logout.rejected]: (state, action) => {
      state.isloading = false;
    },
    [logout.pending]: (state) => {
      state.isloading = true;
    },
  },
});

export default userSlice.reducer;
