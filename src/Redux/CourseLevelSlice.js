import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  selectedLevel: null,
};

// Create the slice
const courseLevelSlice = createSlice({
  name: "courseLevel",
  initialState,
  reducers: {
    setCourseLevel: (state, action) => {
      state.selectedLevel = action.payload;
    },
    clearCourseLevel: (state) => {
      state.selectedLevel = null;
    },
  },
});

// Export actions
export const { setCourseLevel, clearCourseLevel } = courseLevelSlice.actions;

// Export reducer
export default courseLevelSlice.reducer;

// Selector for easier access to the state
export const selectSelectedLevel = (state) => state.courseLevel.selectedLevel;
