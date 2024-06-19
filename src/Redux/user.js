// userSlice.js

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
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
      const {
        fName,
        lName,
        userAbout,
        linkdinProfile,
        telegramLink,
        receiveMessageEvent,
        homeAddress,
        nationalCode,
        gender,
        birthday,
        latitude,
        longitude,
        userImage,
        token,
        profileCompletionPercentage,
        roles,
      } = action.payload;
      state.fName = fName;
      state.lName = lName;
      state.userAbout = userAbout;
      state.linkdinProfile = linkdinProfile;
      state.telegramLink = telegramLink;
      state.receiveMessageEvent = receiveMessageEvent;
      state.homeAddress = homeAddress;
      state.nationalCode = nationalCode;
      state.gender = gender;
      state.birthday = birthday;
      state.latitude = latitude;
      state.longitude = longitude;
      state.userImage = userImage;
      state.token = token;
      state.profileCompletionPercentage = profileCompletionPercentage;
      state.roles = roles;
    },
  },
});

export const { handleUser } = userSlice.actions;
export default userSlice.reducer;
