// src/features/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phoneNumber: "",
  step: "one",
  isAuthenticated: false, // وضعیت ورود
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setPhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
    setStep(state, action) {
      state.step = action.payload;
    },
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// Export actions
export const { setPhoneNumber, setStep, login, logout } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
