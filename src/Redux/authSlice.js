import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../Core/interceptor/index";

// Initial state of the authentication slice
const initialState = {
  phoneNumber: "",
  verificationCode: "",
  registerStep: "PhoneRegister",
  email: "",
  password: "",
  token: null,
  loading: false,
  error: null,
};

// Async thunk to send phone number for verification
export const sendPhoneNumber = createAsyncThunk(
  "auth/sendPhoneNumber",
  async (phoneNumber, thunkAPI) => {
    try {
      const response = await http.post("/Sign/SendVerifyMessage", {
        phoneNumber,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to send verification code
export const sendVerificationCode = createAsyncThunk(
  "auth/sendVerificationCode",
  async ({ phoneNumber, verificationCode }, thunkAPI) => {
    try {
      const response = await http.post("/Sign/VerifyCode", {
        phoneNumber,
        verificationCode,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to register user
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password, phoneNumber }, thunkAPI) => {
    try {
      const response = await http.post("/Sign/Register", {
        email,
        password,
        phoneNumber,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Auth slice containing reducers and extra reducers for handling async thunks
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
    resetAuthState(state) {
      state.phoneNumber = "";
      state.verificationCode = "";
      state.email = "";
      state.password = "";
      state.token = null;
      state.registerStep = "PhoneRegister";
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle sendPhoneNumber
      .addCase(sendPhoneNumber.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendPhoneNumber.fulfilled, (state, action) => {
        state.registerStep = "PhoneConfirm";
        state.loading = false;
      })
      .addCase(sendPhoneNumber.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Handle sendVerificationCode
      .addCase(sendVerificationCode.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendVerificationCode.fulfilled, (state, action) => {
        state.registerStep = "PasswordEmail";
        state.loading = false;
      })
      .addCase(sendVerificationCode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Handle registerUser
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.registerStep = "Complete";
        state.token = action.payload.token; // ذخیره توکن
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export actions
export const {
  setPhoneNumber,
  setVerificationCode,
  setRegisterStep,
  setEmail,
  setPassword,
  resetAuthState,
} = authSlice.actions;

// Export reducer
export default authSlice.reducer;
