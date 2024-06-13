import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import http from "../../interceptor/index";

export const UserInfo = async () => {
  try {
    const result = await http.get(`/SharePanel/GetProfileInfo`);
    return result;
  } catch (error) {
    toast.error(error?.message);
  }
};
