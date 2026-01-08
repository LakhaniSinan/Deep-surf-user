import { ENDPOINTS } from "../endpoints";
import Api from "../index";

const getCalculator = (payload) => {
  return Api(ENDPOINTS.CALCULATORAPI.CALCULATOR_API, payload, "post");
};

const exchangeSupportApi = () => {
  return Api(ENDPOINTS.EXCHANGESUPPORT.EXCHANGE_SUPPORT, null, "get");
};

const exchangeMarketApi = ({ pair }) => {
  return Api(
    `${ENDPOINTS.EXCHANGEMARKET.EXCHANGE_MARKET}/${pair}/price`,
    null,
    "get"
  );
};
const exchangeData = () => {
  return Api(ENDPOINTS.EXCHANGEDATA.EXCHANGE_DATA, null, "get");
};
const exchangeAtrValue = ({ tf, len }) => {
  return Api(
    `${ENDPOINTS.EXCHNAGEARTVALUE.EXCHNAGE_ATR_VALUE}?tf=${tf}&len=${len}`,
    null,
    "get"
  );
};

const simulateApi = (payload) => {
  return Api(ENDPOINTS.SIMULATEAPI.SIMULATE_API, payload, "post");
};
export {
  exchangeSupportApi,
  exchangeMarketApi,
  exchangeData,
  exchangeAtrValue,
  getCalculator,
  simulateApi,
};
