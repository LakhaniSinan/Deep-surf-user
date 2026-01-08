import { Language } from "@mui/icons-material";
import { ENDPOINTS } from "../endpoints";
import Api from "../index";
// {    home   Api   }
const getHomeData = ({ language }) => {
  const url = `${ENDPOINTS.HOME.HOME_DATA}?language=${language}`;
  return Api(url, null, "GET");
};

// {    getMarketOutLook   Api   }

const getMarketOutLook = ({ language }) => {
  return Api(
    `${ENDPOINTS.MARKETOUTLOOK.MARKET_OUT_LOOK}?language=${language}`,
    null,
    "get"
  );
};

// {    Dashboard secrhing Api   }

const getCoinQuickCheck = ({ ticker, language }) => {
  const url = `${ENDPOINTS.HOME.QUICK_CHECK}?ticker=${ticker}&language=${language}`;
  return Api(url, null, "GET");
};

// {   proAnylysisData Api   }

const proAnylysisData = ({ ticker, language }) => {
  return Api(
    `${ENDPOINTS.PROANALYSIS.GET}?symbol=${ticker}&language=${language}`,
    null,
    "get"
  );
};

// {   aiTools Api   }

const aiToolsData = ({ ticker, language }) => {
  return Api(
    `${ENDPOINTS.AITOOLS.GET}?ticker=${ticker}&language=${language}`,
    null,
    "get"
  );
};

// {   getFaqData Api   }

const getFaqData = () => {
  return Api(ENDPOINTS.FAQDATA.FAQ_DATA, null, "get");
};
const updateUser = (payload) => {
  return Api(ENDPOINTS.HOME.UPDATE_USER, payload, "put");
};

export {
  getHomeData,
  getCoinQuickCheck,
  getMarketOutLook,
  getFaqData,
  proAnylysisData,
  aiToolsData,
  updateUser,
};
