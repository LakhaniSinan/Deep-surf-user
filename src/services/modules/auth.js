import { ENDPOINTS } from "../endpoints";
import Api from "../index";

const signUp = (payload) => {
  return Api(ENDPOINTS.AUTH.SIGNUP, payload, "post");
};
const login = (payload) => {
  return Api(ENDPOINTS.AUTH.LOGIN, payload, "post");
};

const verifyOtp = (payload) => {
  return Api(ENDPOINTS.AUTH.VERIFY_OTP, payload, "post");
};

export { signUp, login, verifyOtp };
