import http from "../../interceptor/index";

export const AddCourseFavorite = async (obj) => {
  try {
    const result = await http.post(`/Course/AddCourseFavorite`, obj);

    return result;
  } catch (error) {
    alert("Error : " + error?.message);
  }
};
