export const ENDPOINTS = {
  AUTH: {
    LOGIN: "users/login",
    SIGNUP: "users/create",
    VERIFY_OTP: "users/verify-otp",
  },
  USER: {
    SET_PROFILE: "users/set-profile",
    GET_PROFILE: "users/update",
    FORGET_PASSWORD: "users/forgot-password",
    RESET_PASSWORD: "users/reset-password",
    CHANGE_PASSWORD: "users/change-password",
    SOCIAL_AUTH: "users/social-auth",
  },
  HOME: {
    HOME_DATA: "home/fetch-data",
    QUICK_CHECK: "home/quick-check",
  },
  MFTSCAN: {
    MFTSCAN_DATA: "home/mtf-scan",
  },
};
