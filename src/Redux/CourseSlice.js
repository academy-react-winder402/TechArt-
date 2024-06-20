// slices/courseSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  describe: "",
  imageAddress: "",
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourseDetails: (state, action) => {
      state.describe = action.payload.describe;
      state.imageAddress = action.payload.imageAddress;
    },
  },
});

export const { setCourseDetails } = courseSlice.actions;

export default courseSlice.reducer;
