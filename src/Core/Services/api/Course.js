import http from "../interceptor/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Courses = async (
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
    console.log(
      "logs..........",
      PageNumber,
      RowsOfPage,
      SortingCol,
      SortType,
      Query,
      TechCount,
      ListTech,
      CostDown,
      CostUp
    );
    const result = await http.get(
      `/Home/GetCoursesWithPagination?PageNumber=${PageNumber}&RowsOfPage=${RowsOfPage}&SortingCol=${SortingCol}&SortType=${SortType}${
        Query ? `&Query=${Query}` : ""
      }&TechCount=${TechCount}${ListTech ? `&ListTech=${ListTech}` : ""}${
        CostDown && CostUp ? `&CostDown=${CostDown}&CostUp=${CostUp}` : ""
      }`
    );
    return result;
  } catch (error) {
    toast.error("Error: " + error?.message);
  }
};
