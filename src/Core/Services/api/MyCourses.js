import http from "../../interceptor/index";

export const MyCoursesPanel = async ({
  PageNumber,
  RowsOfPage,
  SortingCol,
  SortType,
  Query,
}) => {
  const params = {
    PageNumber: PageNumber ? PageNumber : undefined,
    RowsOfPage: RowsOfPage ? RowsOfPage : undefined,
    SortingCol: SortingCol ? SortingCol : undefined,
    SortType: SortType ? SortType : undefined,
    Query: Query ? Query : undefined,
  };

  try {
    const response = await http.get(`/SharePanel/GetMyCourses`, {
      params,
    });

    return response;
  } catch (error) {
    alert("Error: " + (error?.message || error));
    throw error; // re-throw the error if you want to handle it further up the chain
  }
};
