import { ENDPOINTS } from "../endpoints";
import Api from "../index";

const getReferralCode = (payload) => {
  return Api(ENDPOINTS.CREATE_CLIENT.GET_ALL_CLIENT, payload, "post");
};

export default getReferralCode;
