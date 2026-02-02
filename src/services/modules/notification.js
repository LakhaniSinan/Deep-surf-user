import { ENDPOINTS } from "../endpoints";
import Api from "../index";

const getUserNotification = ({ page = 1, limit = 20, language }) => {
  return Api(
    `${ENDPOINTS.USERNOTIFICATION.USER_NOTIFICATION}?page=${page}&limit=${limit}&language=${language}`,
    null,
    "get",
  );
};

export default getUserNotification;
