// Search.js

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

    // بررسی موجود بودن ویژگی courseFilterDtos در پاسخ
    const courses =
      response.data && response.data.courseFilterDtos
        ? response.data.courseFilterDtos
        : [];

    // فیلتر کردن داده‌ها بر اساس query
    const filteredResults = courses.filter((course) =>
      course.title.toLowerCase().includes(query.toLowerCase())
    );

    return filteredResults;
  } catch (error) {
    console.error("Error fetching courses:", error);

    // بازگرداندن خطای مناسب
    if (error.response) {
      throw new Error(
        error.response.data ||
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
