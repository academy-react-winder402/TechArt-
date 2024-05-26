// src/api/news.js
import http from "../../interceptor/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const News = async (
  PageNumber = 1,
  RowsOfPage = 3,
  SortingCol = "insertDate",
  SortType = "DESC",
  Query = undefined
) => {
  try {
    const result = await http.get(
      `/News?PageNumber=${PageNumber}&RowsOfPage=${RowsOfPage}&SortingCol=${SortingCol}&SortType=${SortType}${
        Query ? `&Query=${Query}` : ""
      }`
    );
    return result.data;
  } catch (error) {
    toast.error("Error: " + error?.message);
  }
};
