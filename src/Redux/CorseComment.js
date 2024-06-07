import { createSlice } from "@reduxjs/toolkit";

const commentDetail = createSlice({
  name: "commentDetail",
  initialState: {
    title: "",
    describe: "",
    commentId: "",
    courseId: "",
  },

  reducers: {
    handleComment: (state, action) => {
      state.title = action.payload.title;
      state.describe = action.payload.describe;
      state.commentId = action.payload.commentId;
      state.courseId = action.payload.courseId;
    },
  },
});

export const { handleComment } = commentDetail.actions;
export default commentDetail.reducer;
