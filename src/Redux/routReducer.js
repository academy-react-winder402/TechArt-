import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import profileImage from "./feature/profileImage";
// import reserveId from "./feature/reserveId";
// import commentDetail from "./feature/commentDetail";
// import CommentNews from "./feature/CommentNews";
// import paletteTheme from "./feature/palleteTheme";
import filterCourse from "./filterCourse";
import newsCategory from "./newsCategory";
import user from "./user";
import filterNews from "./filterNews";
const userPersist = persistReducer(
  {
    key: "user",
    storage,
  },
  user
);

const rootReducer = {
  user: userPersist,
  filterCourse: filterCourse,
  newsCategory: newsCategory,
  filterNews: filterNews,
  // profileImage: profileImage,
  // reserveId: reserveId,
  // commentDetail: commentDetail,
  // CommentNews: CommentNews,
  // paletteTheme: paletteTheme,
};

export default rootReducer;
