import http from "../../interceptor/index";

export const MyCoursesPanel = async () => {
  try {
    const result = await http.get(
      `/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=LastUpdate&Query=`
    );

    return result;
  } catch (error) {
    alert("Error : " + error?.message);
  }
};
