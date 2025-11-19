import { ENDPOINTS } from "../endpoints";
import Api from "../index";

const setProfile = (payload) => {
  return Api(ENDPOINTS.USER.SET_PROFILE, payload, "PUT");
};

export { setProfile };
