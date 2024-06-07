import http from "../../interceptor/index";

export const courseLevel = async () => {
  try {
    const result = await http.get(`/CourseLevel/GetAllCourseLevel`);

    return result;
  } catch (error) {
    alert("Error : " + error?.message);
  }
};
