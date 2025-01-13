// src/features/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phoneNumber: "",
  step: "one",
  isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")) || false,
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
      localStorage.setItem("isAuthenticated", true); // ذخیره وضعیت ورود
    },
    logout(state) {
      state.isAuthenticated = false;
      localStorage.removeItem("isAuthenticated"); // حذف وضعیت ورود
    },
  },
});

// Export actions
export const { setPhoneNumber, setStep, login, logout } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
