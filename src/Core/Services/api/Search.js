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
        Query: query, // اضافه کردن پارامتر جستجو
      },
    });

    // استخراج داده‌ها از courseFilterDtos
    const courses = response.data.courseFilterDtos || [];

    // فیلتر کردن داده‌ها بر اساس query
    const filteredResults = courses.filter((course) =>
      course.title.toLowerCase().includes(query.toLowerCase())
    );

    return filteredResults;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw new Error("Unable to fetch courses. Please try again later.");
  }
};
