import { ENDPOINTS } from "../endpoints";
import Api from "../index";

const setProfile = (payload) => {
  return Api(ENDPOINTS.USER.SET_PROFILE, payload, "put");
};

const getProfile = (payload, id) => {
  console.log("paylaodsssssssss" , payload);
  
  return Api(
    `${ENDPOINTS.USER.GET_PROFILE.replace(":id", id)}`,
    payload,
    "put"
  );
};

export { setProfile, getProfile };
