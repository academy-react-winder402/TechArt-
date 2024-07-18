import http from "../../interceptor/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CoursesAPI = async (
  PageNumber,
  Query,
  RowsOfPage,
  SortingCol,
  SortType,
  TechCount,
  ListTech,
  CostDown,
  CostUp,
  LevelName // اضافه کردن LevelName به پارامترها
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
      LevelName: LevelName ? LevelName : undefined, // اضافه کردن LevelName به پارامترها
    };

    const result = await http.get("/Home/GetCoursesWithPagination", { params });

    return result; // فرض بر این است که داده‌ها در result.data قرار دارند
  } catch (error) {
    console.error("Error fetching courses:", error);
    toast.error("Error: " + error?.message);

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
