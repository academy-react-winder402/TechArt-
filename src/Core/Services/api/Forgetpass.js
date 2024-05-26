import http from "../interceptor/index";

// ForgetPassStep1

export const ForgetPassStep1 = async (obj) => {
  try {
    const result = await http.post(`/Sign/ForgetPassword`, obj);

    return result;
  } catch (error) {
    alert("Error : " + error?.message);
  }
};

// ForgetPassStep2

export const ForgetPassStep2 = async (ConfigValue) => {
  try {
    const result = await http.get(`/Sign/Reset/${ConfigValue}`);

    return result;
  } catch (error) {
    alert("Error : " + error?.message);
  }
};

// ForgetPassStep3

export const ForgetPassStep3 = async (obj) => {
  try {
    const result = await http.post(`/Sign/Reset`, obj);

    return result;
  } catch (error) {
    alert("Error : " + error?.message);
  }
};
