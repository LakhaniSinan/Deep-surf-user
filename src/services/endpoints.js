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
    UPDATE_USER: "users/update",
  },

  PROANALYSIS: {
    GET: "home/pro-analytics",
  },

  AITOOLS: {
    GET: "home/ai-tools",
  },

  MARKETOUTLOOK: {
    MARKET_OUT_LOOK: "home/market-outlook",
    WHALES_TRACKER: "whales/",
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

  CREATE_CLIENT: {
    GET_ALL_CLIENT: "client/create",
  },

  REFFERAL_STATS: {
    REFFERAL: "referrals/stats",
  },

  REFFERAL_HISTORY: {
    REFFERAL_DATA: "referrals/history",
  },
  TRANSACTION_HISTORY: {
    TRANSACTION_DATA: "referrals/transactions",
  },
  WITHDRAW: {
    WITHDRAW_REQUEST: "referrals/withdraw",
  },

  WTHDRAWREQUEST: {
    WITHDRAW_REQUEST: "referrals/withdrawal/:id",
  },
  WITHDRAWALOPTION: {
    WITHDRAW_OPTION: "referrals/withdrawal-options",
  },
  EXCHANGESUPPORT: {
    EXCHANGE_SUPPORT: "exchange/supported",
  },
  EXCHANGEMARKET: {
    EXCHANGE_MARKET: "exchange/market/Binance Futures",
  },
  EXCHANGEDATA: {
    EXCHANGE_DATA: "exchange/Binance Futures/pair/BTCUSDT/meta",
  },
  EXCHNAGEARTVALUE: {
    EXCHNAGE_ATR_VALUE: "exchange/analytics/Binance Futures/BTCUSDT/atr",
  },
  CALCULATORAPI: {
    CALCULATOR_API: "calculations/calculate-position",
  },
  SIMULATEAPI: {
    SIMULATE_API: "home/simulate-whatIf",
  },
  JOURNALAPI: {
    JOURNAL_API: "journal/alerts",
  },
  JOURNALDROWPDOWN: {
    JOURNAL_DROWPDOWN_API: "journal/dropdowns",
  },
  CREATEJOURNALALERT: {
    CREATE_JOURNAL_ALERT_API: "journal/alerts",
  },
  JOURNALALERTBYID: {
    JOURNAL_ALERT_BY_ID: "journal/alerts/:id",
  },
  JOURNALDELETEBYID: {
    JOURNAL_DELETE_BY_ID: "journal/alerts/:id",
  },
  JOUTNALSEARCHAPI: {
    JOURNAL_SEARCH_API: "coins/search",
    LIVE_COINS: "coins/price/",
  },
  PAYMENTHISTORY: {
    PAYMENT_HISTORY: "payments/history",
    PAYMENT_SUBSCRIPTION: "payments/my-subscription",
  },
  USERNOTIFICATION: {
    USER_NOTIFICATION: "user-notifications/",
  },
  CHARTAPI: {
    CHART_API: (symbol, interval) =>
      `chart/overview?symbol=${symbol}&interval=${interval}`,
  },
  WIDGETS: {
    FETCH_ALL: "widgets/catalog",
    ADD_WIDGET: "widgets/add",
    REMOVE_WIDGET: "widgets",
    FETCH_BY_USER: "widgets/user",
  },
};
