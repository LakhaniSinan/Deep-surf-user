import { ENDPOINTS } from "../endpoints";
import Api from "../index";
const getChartApi = (symbol, interval) => {
  return Api(ENDPOINTS.CHARTAPI.CHART_API(symbol, interval), null, "get");
};

export default getChartApi;
