import { ENDPOINTS } from "../endpoints";
import Api from "../index";

const getPaymentHistory = ({ language }) => {
  return Api(
    `${ENDPOINTS.PAYMENTHISTORY.PAYMENT_HISTORY}?language=${language}`,
    null,
    "get",
  );
};
const getPaymentSubscription = () => {
  return Api(
    `${ENDPOINTS.PAYMENTHISTORY.PAYMENT_SUBSCRIPTION}?language=${language}`,
    null,
    "get",
  );
};
export { getPaymentHistory, getPaymentSubscription };
