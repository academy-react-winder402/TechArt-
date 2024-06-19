import http from "../../interceptor/index";

export const EditProfileApi = async (obj) => {
  try {
    const result = await http.put(`/SharePanel/UpdateProfileInfo`, obj);

    return result;
  } catch (error) {
    alert("Error : " + error?.message);
  }
};
