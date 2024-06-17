import http from "../../interceptor/index";

export const TopCourse = async (count = 5) => {
  // Default value of 5
  try {
    const response = await http.get(`/Home/GetCoursesTop?Count=${count}`);
    return response;
  } catch (error) {
    console.error("Error fetching top courses:", error?.message);
    // Optionally return a default value or rethrow the error
    return { error: error?.message };
  }
};
