import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// تعریف وضعیت اولیه
const initialState = {
  query: undefined,
  courses: [],
  loading: false,
  error: null,
};

// ایجاد slice برای جستجو
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

// صدور اعمال و reducer
export const { setQuery } = searchSlice.actions;
export default searchSlice.reducer;
