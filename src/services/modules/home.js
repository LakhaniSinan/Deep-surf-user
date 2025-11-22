import { ENDPOINTS } from "../endpoints";
import Api from "../index";

const getHomeData = () => {
  return Api(ENDPOINTS.HOME.HOME_DATA, null, "GET");
};

const getMftScanData = (payload) => {
  return Api(ENDPOINTS.MFTSCAN.MFTSCAN_DATA, payload, "POST");
};

const getCoinQuickCheck = (ticker) => {
  const url = `${ENDPOINTS.HOME.QUICK_CHECK}?ticker=${ticker}`;

  return Api(url, null, "GET");
};

export { getHomeData, getMftScanData, getCoinQuickCheck };
