import { createSlice } from "@reduxjs/toolkit";

const profileImage = createSlice({
  name: "profileImage",
  initialState: {
    Id: null,
  },

  reducers: {
    handleProfileImage: (state, action) => {
      state.Id = action.payload.Id;
    },
  },
});

export const { handleProfileImage } = profileImage.actions;
export default profileImage.reducer;
