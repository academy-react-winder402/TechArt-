import { createSlice } from "@reduxjs/toolkit";

const newsCategory = createSlice({
  name: "newsCategory",
  initialState: {
    Id: null,
    CategoryName: "",
  },

  reducers: {
    handleFilterNews: (state, action) => {
      state.Id = action.payload.Id;
      state.CategoryName = action.payload.CategoryName;
    },
  },
});

export const { handleFilterNews } = newsCategory.actions;
export default newsCategory.reducer;
