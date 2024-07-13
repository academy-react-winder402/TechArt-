import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedLevelId: null,
};

const courseLevelSlice = createSlice({
  name: "filterCourse",
  initialState,
  reducers: {
    setCourseLevel: (state, action) => {
      state.selectedLevelId = action.payload;
    },
  },
});

export const { setCourseLevel } = courseLevelSlice.actions;
export default courseLevelSlice.reducer;
