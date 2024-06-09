import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../Core/interceptor/index";

// Initial state of the authentication slice
const initialState = {
  phoneNumber: "",
  step: "one",
};

// Auth slice containing reducers and extra reducers for handling async thunks
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
  },
});

// Export actions
export const { setPhoneNumber, setStep } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
