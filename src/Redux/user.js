import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    fName: "",
    lName: "",
    userAbout: "",
    linkdinProfile: "",
    telegramLink: "",
    receiveMessageEvent: false,
    homeAddress: "",
    nationalCode: "",
    gender: true,
    birthday: "",
    latitude: "",
    longitude: "",
    userImage: "",
    token: "",
    profileCompletionPercentage: "",
    roles: "",
  },

  reducers: {
    handleUser: (state, action) => {
      state.fName = action.payload.fName;
      state.lName = action.payload.lName;
      state.userAbout = action.payload.userAbout;
      state.linkdinProfile = action.payload.linkdinProfile;
      state.telegramLink = action.payload.telegramLink;
      state.receiveMessageEvent = action.payload.receiveMessageEvent;
      state.homeAddress = action.payload.homeAddress;
      state.nationalCode = action.payload.nationalCode;
      state.gender = action.payload.gender;
      state.birthday = action.payload.birthday;
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
      state.userImage = action.payload.userImage;
      state.token = action.payload.token;
      state.profileCompletionPercentage =
        action.payload.profileCompletionPercentage;
      state.roles = action.payload.roles;
    },
  },
});

export const { handleUser } = user.actions;
export default user.reducer;
