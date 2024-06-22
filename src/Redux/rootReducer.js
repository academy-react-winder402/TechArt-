import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

import filterCourse from "./filterCourse";
import newsCategory from "./newsCategory";
import user from "./user";
import filterNews from "./filterNews";
import authSlice from "./authSlice";
import searchSlice from "./SearchSlice";
import CourseSlice from "./CourseSlice";
import commentDetailReducer from "./CorseComment"; // import کردن reducer مربوط به commentDetail

// import { thunk } from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "user"], // state های مربوط به auth و user را ذخیره کن
};

const userPersist = persistReducer(
  {
    key: "user",
    storage,
  },
  user
);

const authPersist = persistReducer(
  {
    key: "auth",
    storage,
  },
  authSlice
);

const rootReducer = combineReducers({
  auth: authPersist,
  user: userPersist,
  filterCourse,
  newsCategory,
  filterNews,
  search: searchSlice,
  course: CourseSlice,
  commentDetail: commentDetailReducer, // اضافه کردن reducer مربوط به commentDetail
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
