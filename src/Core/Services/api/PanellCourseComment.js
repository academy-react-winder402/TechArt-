import http from "../../interceptor/index";

export const MyCommentCourse = async () => {
  try {
    const result = await http.get(`/SharePanel/GetMyCoursesComments`);
    return result;
  } catch (error) {
    null;
  }
};
