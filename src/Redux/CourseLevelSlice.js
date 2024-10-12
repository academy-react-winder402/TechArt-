import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  selectedLevelId: null,
};

// Create the slice
const courseLevelSlice = createSlice({
  name: "courseLevel",
  initialState,
  reducers: {
    setCourseLevel: (state, action) => {
      state.selectedLevelId = action.payload; // ذخیره فقط ID سطح انتخاب شده
    },
    clearCourseLevel: (state) => {
      state.selectedLevelId = null;
    },
  },
});

// Export actions
export const { setCourseLevel, clearCourseLevel } = courseLevelSlice.actions;

// Export reducer
export default courseLevelSlice.reducer;

// Selector for easier access to the state
export const selectSelectedLevelId = (state) =>
  state.courseLevel.selectedLevelId;
