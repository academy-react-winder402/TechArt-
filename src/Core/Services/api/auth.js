import http from "../../interceptor/index";

// Login API call
export const loginAPI = async (user) => {
  try {
    const response = await http.post("/Sign/Login", user);
    return response.data; // Assuming response data is needed
  } catch (error) {
    console.error("Login API Error: ", error);
    return { success: false, message: error.message || "Login failed" };
  }
};

// Register API call
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
    return response.data; // Assuming response data is needed
  } catch (error) {
    console.error("Register API Error: ", error);
    return { success: false, message: error.message || "Registration failed" };
  }
};

// Verify Message API call
export const verifyMessageAPI = async (obj) => {
  try {
    const response = await http.post("/Sign/VerifyMessage");
    return response.data; // Assuming response data is needed
  } catch (error) {
    console.error("Verify Message API Error: ", error);
    return { success: false, message: error.message || "Verification failed" };
  }
};

// Sign Up API call
export const signUpAPI = async (obj) => {
  try {
    const response = await http.post("/Sign/Register");
    return response.data; // Assuming response data is needed
  } catch (error) {
    console.error("Sign Up API Error: ", error);
    return { success: false, message: error.message || "Sign up failed" };
  }
};
