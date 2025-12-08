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

  PROANALYSIS: {
    GET: "home/pro-analytics",
  },

  AITOOLS: {
    GET: "home/ai-tools",
  },

  MARKETOUTLOOK: {
    MARKET_OUT_LOOK: "home/market-outlook",
  },
  LIQUIDATIONMAP: {
    LIQUIDATION_MAP: "home/liquidation-map",
  },
  MFTDATA: {
    MFT_SCAN_DATA: "home/mtf-scan",
  },
  HEATMAPDATA: {
    HEAT_MAP_DATA: "home/heatmap",
  },
  FAQDATA: {
    FAQ_DATA: "faqs",
  },
  ADD_WAITLIST: {
    ADD_TO_WAITLIST: "waitlist/join",
  },
};
