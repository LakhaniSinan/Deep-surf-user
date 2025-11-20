import { ENDPOINTS } from "../endpoints";
import Api from "../index";

const setProfile = (payload) => {
  return Api(ENDPOINTS.USER.SET_PROFILE, payload, "put");
};


const getProfile = (payload) => {
  return Api(ENDPOINTS.USER.GET_PROFILE, payload, "put");
};

export { setProfile, getProfile };