// src/redux/authSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  phoneNumber: "",
  verificationCode: "",
  registerStep: "PhoneRegister",
  email: "",
  password: "",
};

export const sendPhoneNumber = createAsyncThunk(
  "auth/sendPhoneNumber",
  async (phoneNumber, thunkAPI) => {
    const response = await axios.post("/Sign/SendVerifyMessage", {
      phoneNumber,
    });
    return response.data;
  }
);

export const sendVerificationCode = createAsyncThunk(
  "auth/sendVerificationCode",
  async ({ phoneNumber, verifyCode }, thunkAPI) => {
    const response = await axios.post("/Sign/SendVerifyMessage", {
      phoneNumber,
      verifyCode,
    });
    return response.data;
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password, phoneNumber }, thunkAPI) => {
    const response = await axios.post("/Sign/Register", {
      email,
      password,
      phoneNumber,
    });
    return response.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setPhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
    setVerificationCode(state, action) {
      state.verificationCode = action.payload;
    },
    setRegisterStep(state, action) {
      state.registerStep = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendPhoneNumber.fulfilled, (state, action) => {
        state.registerStep = "PhoneConfirm";
      })
      .addCase(sendVerificationCode.fulfilled, (state, action) => {
        state.registerStep = "PasswordEmail";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.registerStep = "Complete";
      });
  },
});

export const {
  setPhoneNumber,
  setVerificationCode,
  setRegisterStep,
  setEmail,
  setPassword,
} = authSlice.actions;

export default authSlice.reducer;
