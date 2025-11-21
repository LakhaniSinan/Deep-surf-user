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

const forgetPassword = (payload) => {
  return Api(ENDPOINTS.AUTH.FORGOT_PASSWORD, payload, "post");
};

const resetPassword = (payload) => {
  return Api(ENDPOINTS.USER.FORGET_PASSWORD, payload, "put");
};

const changePassword = (payload) => {
  return Api(ENDPOINTS.USER.CHANGE_PASSWORD, payload, "put");
};

export {
  signUp,
  login,
  verifyOtp,
  forgetPassword,
  resetPassword,
  changePassword,
};
