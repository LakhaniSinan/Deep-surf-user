import { ENDPOINTS } from "../endpoints";
import Api from "../index";

const getCalculator = (payload) => {
  return Api(ENDPOINTS.CALCULATOR_API.CALCULATOR, payload, "post");
};

export default getCalculator;
