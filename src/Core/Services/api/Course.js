import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Initialize react-toastify

export const mainCourses = async (
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
    const result = await axios.get(
      `/Home/GetCoursesWithPagination?PageNumber=${PageNumber}&RowsOfPage=${RowsOfPage}&SortingCol=${SortingCol}&SortType=${SortType}${
        Query ? `&Query=${Query}` : ""
      }&TechCount=${TechCount}${ListTech ? `&ListTech=${ListTech}` : ""}${
        CostDown && CostUp ? `&CostDown=${CostDown}&CostUp=${CostUp}` : ""
      }`
    );
    console.log("API Response:", result.data); // بررسی داده‌ها در کنسول
    return result.data;
  } catch (error) {
    toast.error("Error : " + error?.message);
  }
};
