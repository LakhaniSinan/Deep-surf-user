import { ENDPOINTS } from "../endpoints";
import Api from "../index";

const addToWaitList = (payload) => {
  return Api(ENDPOINTS.ADD_WAITLIST.ADD_TO_WAITLIST, payload, "post");
};

export default addToWaitList;
