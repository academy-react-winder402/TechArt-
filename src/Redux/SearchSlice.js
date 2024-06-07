import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { searchCourses } from "../Core/Services/api/Search";

export const fetchSearchCourses = createAsyncThunk(
  "search/fetchSearchCourses",
  async (query, thunkAPI) => {
    try {
      const response = await searchCourses(query);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    loading: false,
    courses: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      })
      .addCase(fetchSearchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default searchSlice;
