import http from "../../interceptor/index";

export const searchCourses = async (query) => {
  try {
    const response = await http.get("/Home/GetCoursesWithPagination", {
      params: {
        PageNumber: 1,
        RowsOfPage: 10,
        SortingCol: "Active",
        SortType: "DESC",
        TechCount: 0,
      },
    });

    // فیلتر کردن داده‌ها از response.data
    const filteredResults = response.data.filter((course) =>
      course.name.toLowerCase().includes(query.toLowerCase())
    );

    return filteredResults;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
