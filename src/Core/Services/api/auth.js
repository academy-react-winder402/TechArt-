import axios from "axios";

// مرحله ۱: فراخوانی تابع loginAPI
export const loginAPI = async (user) => {
  try {
    const response = await axios.post("/Sign/Login", user);
    return response.data; // فرض شده است که response.data شامل داده‌های مربوطه از سمت سرور است
  } catch (error) {
    return false;
  }
};

// مرحله ۲: فراخوانی تابع registerAPI
export const registerAPI = async (phoneNumber) => {
  try {
    const response = await axios.post(
      "/Sign/SendVerifyMessage",
      { phoneNumber },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer null",
        },
      }
    );
    return response.data; // فرض شده است که response.data شامل داده‌های مربوطه از سمت سرور است
  } catch (error) {
    return false;
  }
};

// مرحله ۳: فراخوانی تابع verifyMessageAPI
export const verifyMessageAPI = async (phoneNumber, verifyCode) => {
  try {
    const response = await axios.post(
      "/Sign/VerifyMessage",
      { phoneNumber, verifyCode },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer null",
        },
      }
    );
    return response.data; // فرض شده است که response.data شامل داده‌های مربوطه از سمت سرور است
  } catch (error) {
    return false;
  }
};

// تابع اضافی برای ثبت‌نام پس از تایید
export const signUpAPI = async (password, gmail, phoneNumber) => {
  try {
    const response = await axios.post(
      "/Sign/Register",
      { password, gmail, phoneNumber },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer null",
        },
      }
    );
    return response.data; // فرض شده است که response.data شامل داده‌های مربوطه از سمت سرور است
  } catch (error) {
    return false;
  }
};
