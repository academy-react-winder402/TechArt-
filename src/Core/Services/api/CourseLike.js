import http from "../../interceptor/index";

export const LikeCourse = async (CourseId) => {
  const params = { CourseId: CourseId ? CourseId : undefined };

  try {
    const result = await http.post(`/Course/AddCourseLike`, null, { params });
    return result;
  } catch (error) {
    const errorMessage = error?.response?.message || "خطا در لایک کردن دوره";
    throw new Error(errorMessage);
  }
};

export const DisableLikeCourse = async (CourseId) => {
  const params = { CourseId: CourseId ? CourseId : undefined };

  try {
    const result = await http.delete(`/Course/DeleteCourseLike`, { params });
    return result;
  } catch (error) {
    const errorMessage = error?.response?.message || "خطا در برداشتن لایک";
    throw new Error(errorMessage);
  }
};
