import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

import filterCourse from "./filterCourse";
import newsCategory from "./newsCategory";
import user from "./user";
import filterNews from "./filterNews";
import searchSlice from "./SearchSlice";

const userPersist = persistReducer(
  {
    key: "user",
    storage,
  },
  user
);

const rootReducer = combineReducers({
  user: userPersist,
  filterCourse,
  newsCategory,
  filterNews,
  searchSlice: searchSlice,
});

export default rootReducer;
