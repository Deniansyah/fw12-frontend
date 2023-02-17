import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
}

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
  extraReducers: (build) => {},
});

export default authReducer.reducer