import http from "../../interceptor/index";

export const ArticleData = async (id) => {
  try {
    const result = await http.get(`/News/${id}`);
    return result.data; //
  } catch (error) {
    alert("خطا: " + error?.message);
    throw error;
  }
};
