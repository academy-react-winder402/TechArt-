import http from "../../interceptor/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CoursesAPI = async (
  PageNumber = 1,
  RowsOfPage = 8,
  SortingCol = "cost",
  SortType = "DESC",
  Query = undefined,
  TechCount = 0,
  ListTech = undefined,
  CostDown = undefined,
  CostUp = undefined
) => {
  try {
    const params = {
      PageNumber,
      RowsOfPage,
      SortingCol,
      SortType,
      TechCount,
      ListTech,
      CostDown,
      CostUp,
    };

    if (Query) {
      params.Query = Query;
    }

    const result = await http.get("/Home/GetCoursesWithPagination", { params });

    // بررسی موجود بودن ویژگی courseFilterDtos در پاسخ

    return result;
  } catch (error) {
    console.error("Error fetching courses:", error);
    toast.error("Error: " + error?.message);

    // بازگرداندن خطای مناسب
    if (error.response) {
      throw new Error(
        error.response || "Unable to fetch courses. Please try again later."
      );
    } else if (error.request) {
      throw new Error(
        "No response received from the server. Please check your network connection."
      );
    } else {
      throw new Error("An unexpected error occurred. Please try again later.");
    }
  }
};
