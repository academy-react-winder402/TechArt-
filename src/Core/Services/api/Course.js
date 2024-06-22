import http from "../../interceptor/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CoursesAPI = async (
  PageNumber,
  RowsOfPage,
  SortingCol,
  SortType,
  Query,
  TechCount,
  ListTech,
  CostDown,
  CostUp
) => {
  try {
    const params = {
      PageNumber: PageNumber ? PageNumber : undefined,
      Query: Query ? Query : undefined,
      RowsOfPage: RowsOfPage ? RowsOfPage : 8,
      SortingCol: SortingCol ? SortingCol : "cost",
      SortType: SortType ? SortType : "DESC",
      TechCount: TechCount ? TechCount : 0,
      ListTech: ListTech ? ListTech : undefined,
      CostDown: CostDown ? CostDown : undefined,
      CostUp: CostUp ? CostUp : undefined,
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
