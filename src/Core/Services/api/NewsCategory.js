import { toast } from "react-toastify";
import http from "../../interceptor/index";

export const ListNewsCategory = async () => {
  try {
    const result = await http.get(`/News/GetListNewsCategory`);

    return result;
  } catch (error) {
    toast.error(error?.message || "An error occurred");
  }
};

export const getNewsWithCategory = async (id) => {
  try {
    const result = await http.get(`/News/GetNewsWithCategory/${id}`);

    return result;
  } catch (error) {
    toast.error(error?.message || "An error occurred");
  }
};
