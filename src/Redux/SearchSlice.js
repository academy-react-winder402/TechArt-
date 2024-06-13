// SearchSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { searchCourses } from "../Core/Services/api/Search";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    loading: false,
    courses: [],
    error: null,
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    fetchSearchCoursesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSearchCoursesSuccess: (state, action) => {
      state.loading = false;
      state.courses = action.payload;
    },
    fetchSearchCoursesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to fetch courses";
    },
  },
});

export const {
  setQuery,
  fetchSearchCoursesStart,
  fetchSearchCoursesSuccess,
  fetchSearchCoursesFailure,
} = searchSlice.actions;

export const fetchSearchCourses = (query) => async (dispatch) => {
  if (!query || typeof query !== "string") {
    dispatch(fetchSearchCoursesFailure("Invalid search query"));
    return;
  }

  dispatch(fetchSearchCoursesStart());

  try {
    const response = await searchCourses(query);
    dispatch(fetchSearchCoursesSuccess(response));
  } catch (error) {
    const errorMessage = error.message || "Failed to fetch courses";
    dispatch(fetchSearchCoursesFailure(errorMessage));
  }
};

export default searchSlice.reducer;
