import { createSlice } from "@reduxjs/toolkit";

const filterNews = createSlice({
  name: "filterNews",
  initialState: {
    RowsOfPage: 3,
    SortingCol: "insertDate",
    SortType: "DESC",
    Query: undefined,
  },

  reducers: {
    handleFilterNewsPage: (state, action) => {
      state.RowsOfPage = action.payload.RowsOfPage;
      state.SortingCol = action.payload.SortingCol;
      state.SortType = action.payload.SortType;
      state.Query = action.payload.Query;
    },
  },
});

export const { handleFilterNewsPage } = filterNews.actions;
export default filterNews.reducer;
