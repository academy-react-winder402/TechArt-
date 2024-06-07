import http from "../../interceptor/index";

export const category = async () => {
  try {
    const result = await http.get(`/Home/GetTechnologies`);

    return result;
  } catch (error) {
    alert("Error : " + error?.message);
  }
};
