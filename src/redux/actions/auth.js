import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const loginAction = createAsyncThunk(
  "auth/loginAsync",
  async ({ email, password, cb, err }) => {
    try {
      const { data } = await http().post("auth/login", { email, password });
      cb()
      return data.results.token;
    } catch (error) {
      err(error)
      throw error.response.data.message;
    }
  }
);
