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
  id
) => {
  try {
    const params = {
      PageNumber: PageNumber || undefined,
      Query: Query || undefined,
      RowsOfPage: RowsOfPage || 8,
      SortingCol: SortingCol || "cost",
      SortType: SortType || "DESC",
      TechCount: TechCount || 0,
      ListTech: ListTech || undefined,
      CostDown: CostDown || undefined,
      CostUp: CostUp || undefined,
      courseLevelId: id || undefined,
    };

    const result = await http.get("/Home/GetCoursesWithPagination", { params });

    return result;
  } catch (error) {
    console.error("Error fetching courses:", error);

    toast.error("Error: " + error?.message);

    if (error.response) {
      throw new Error(
        error.response.message ||
          "Unable to fetch courses. Please try again later."
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
