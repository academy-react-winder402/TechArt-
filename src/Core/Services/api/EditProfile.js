import http from "../../interceptor/index";

export const EditProfile = async (obj) => {
  try {
    const result = await http.put(`/SharePanel/UpdateProfileInfo`, obj);

    return result;
  } catch (error) {
    alert("Error : " + error?.message);
  }
};
