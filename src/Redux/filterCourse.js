import { createSlice } from "@reduxjs/toolkit";

const filterCourse = createSlice({
  name: "filterCourse",
  initialState: {
    RowsOfPage: 8,
    SortingCol: "cost",
    SortType: "DESC",
    Query: undefined,
    TechCount: 0,
    ListTech: undefined,
    CostDown: undefined,
    CostUp: undefined,
  },

  reducers: {
    handleRowsOfPage: (state, action) => {
      state.RowsOfPage = action.payload.RowsOfPage;
    },
    handleSortingCol: (state, action) => {
      state.SortingCol = action.payload.SortingCol;
    },
    handleSortType: (state, action) => {
      state.SortType = action.payload.SortType;
    },
    handleQuery: (state, action) => {
      state.Query = action.payload.Query;
    },
    handleTechCount: (state, action) => {
      state.TechCount = action.payload.TechCount;
    },
    handleListTech: (state, action) => {
      state.ListTech = action.payload.ListTech;
    },
    handleCostDown: (state, action) => {
      state.CostDown = action.payload.CostDown;
    },
    handleCostUp: (state, action) => {
      state.CostUp = action.payload.CostUp;
    },
  },
});

export const {
  handleRowsOfPage,
  handleSortingCol,
  handleSortType,
  handleQuery,
  handleTechCount,
  handleListTech,
  handleCostDown,
  handleCostUp,
} = filterCourse.actions;
export default filterCourse.reducer;
