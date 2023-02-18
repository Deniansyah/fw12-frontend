import { createSlice } from "@reduxjs/toolkit";

import { loginAction } from "../actions/auth";

const initialState = {
  token: null,
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // login: (state, action) => {
    //   const { email, password } = action.payload;
    //   if (email === "admin@mail.com" && password === "admin") {
    //     state.token = "sometoken";
    //   }
    // }
    logout: (state, action) => {
      return initialState;
    },
  },
  extraReducers: (build) => {
    build.addCase(loginAction.fulfilled, (state, { payload }) => {
      state.token = payload;
    });
  },
});

export const {
  // login,
  logout,
} = authReducer.actions;

export default authReducer.reducer;
