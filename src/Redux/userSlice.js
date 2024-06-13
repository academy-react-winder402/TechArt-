// userSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../Core/interceptor/index";

// ایجاد اکشن async برای دریافت اطلاعات کاربر
export const fetchUserInfo = createAsyncThunk(
  "user/fetchUserInfo",
  async () => {
    const response = await http.get(`/SharePanel/GetProfileInfo`);
    return response.data;
  }
);

// ایجاد اکشن async برای آپدیت اطلاعات کاربر
export const updateUserInfo = createAsyncThunk(
  "user/updateUserInfo",
  async (updatedUserInfo) => {
    const response = await http.put(
      `/SharePanel/UpdateProfileInfo`,
      updatedUserInfo
    );
    return response.data;
  }
);

const initialState = {
  userInfo: {
    username: "",
    userAbout: "",
    fName: "",
    lName: "",
    email: "",
    phoneNumber: "",
    homeAddress: "",
    city: "",
    region: "",
    postalCode: "",
  },
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // اینجا ممکن است اگر نیاز دارید اکشن‌های جدید دیگری را اضافه کنید
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
  extraReducers: {
    [fetchUserInfo.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchUserInfo.fulfilled]: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    [fetchUserInfo.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [updateUserInfo.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [updateUserInfo.fulfilled]: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    [updateUserInfo.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export const { setUserInfo, setLoading, setError } = userSlice.actions;

export default userSlice.reducer;
