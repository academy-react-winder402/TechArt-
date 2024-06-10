import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { searchCourses } from "../Core/Services/api/Search";

// async thunk برای جستجوی دوره‌ها
export const fetchSearchCourses = createAsyncThunk(
  "search/fetchSearchCourses",
  async (query, thunkAPI) => {
    if (!query || typeof query !== "string") {
      return thunkAPI.rejectWithValue("Invalid search query");
    }

    try {
      const response = await searchCourses(query);
      return response;
    } catch (error) {
      const errorMessage = error.response?.data || "Failed to fetch courses";
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

// ایجاد search slice
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
        state.error = action.payload || "Failed to fetch courses";
      });
  },
});

export default searchSlice.reducer;
