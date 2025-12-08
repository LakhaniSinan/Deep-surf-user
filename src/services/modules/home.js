import { ENDPOINTS } from "../endpoints";
import Api from "../index";
// {    home   Api   }
const getHomeData = () => {
  return Api(ENDPOINTS.HOME.HOME_DATA, null, "GET");
};

// {    getMarketOutLook   Api   }

const getMarketOutLook = () => {
  return Api(ENDPOINTS.MARKETOUTLOOK.MARKET_OUT_LOOK, null, "GET");
};

// {    Dashboard secrhing Api   }

const getCoinQuickCheck = (ticker) => {
  const url = `${ENDPOINTS.HOME.QUICK_CHECK}?ticker=${ticker}`;

  return Api(url, null, "GET");
};
// {   proAnylysisData Api   }

const proAnylysisData = (query) => {
  return Api(`${ENDPOINTS.PROANALYSIS.GET}?symbol=${query}`, null, "get");
};
// {   aiTools Api   }

const aiToolsData = (ticker) => {
  return Api(`${ENDPOINTS.AITOOLS.GET}?ticker=${ticker}`, null, "get");
};

// {   getFaqData Api   }

const getFaqData = () => {
  return Api(ENDPOINTS.FAQDATA.FAQ_DATA, null, "get");
};

export {
  getHomeData,
  getCoinQuickCheck,
  getMarketOutLook,
  getFaqData,
  proAnylysisData,
  aiToolsData,
};
