import http from "../../interceptor/index";

export const CourseDetails = async (id) => {
  try {
    const result = await http.get(`/Home/GetCourseDetails?CourseId=${id}`);
    return result.data;
  } catch (error) {
    alert("Error : " + error?.message);
    throw error;
  }
};
