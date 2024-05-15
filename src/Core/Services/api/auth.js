import http from "../interceptor";

export const loginAPI = async (user) => {
  try {
    const response = await http.post("/Sign/Login", user);

    return response;
  } catch (error) {
    return false;
  }
};

export const registerAPI = async (phoneNumber) => {
  try {
    const response = await http.post(
      "/Sign/SendVerifyMessage",
      { phoneNumber },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer null",
        },
      }
    );

    return response;
  } catch (error) {
    return false;
  }
};

export const verifyMessageAPI = async (phoneNumber, verifyCode) => {
  try {
    const response = await http.post(
      "/Sign/VerifyMessage",
      { phoneNumber, verifyCode },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer null",
        },
      }
    );

    return response;
  } catch (error) {
    return false;
  }
};
export const signUpAPI = async (password, gmail, phoneNumber) => {
  try {
    const response = await http.post(
      "/Sign/Register",
      { password, gmail, phoneNumber },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer null",
        },
      }
    );

    return response;
  } catch (error) {
    return false;
  }
};
