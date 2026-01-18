import { ENDPOINTS } from "../endpoints";
import Api from "../index";

const getUserNotification = ({ page = 1, limit = 20 }) => {
  return Api(
    `${ENDPOINTS.USERNOTIFICATION.USER_NOTIFICATION}?page=${page}&limit=${limit}`,
    null,
    "get"
  );
};

export default getUserNotification;
