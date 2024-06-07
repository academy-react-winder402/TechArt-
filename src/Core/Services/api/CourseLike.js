import http from "../../interceptor/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LikeCourse = async (id) => {
  try {
    const result = await http.post(`/Course/AddCourseLike?CourseId=${id}`);
    toast.success("دوره با موفقیت لایک شد");
    return result;
  } catch (error) {
    toast.error("خطا: " + error?.message);
  }
};

export const DisableLikeCourse = async (obj) => {
  try {
    const result = await http.delete(`/Course/DeleteCourseLike`, { data: obj });
    toast.success("لایک برداشته شد");
    return result;
  } catch (error) {
    toast.error("خطا: " + error?.message);
  }
};
