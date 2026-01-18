import { ENDPOINTS } from "../endpoints";
import Api from "../index";

const getPaymentHistory = () => {
  return Api(ENDPOINTS.PAYMENTHISTORY.PAYMENT_HISTORY, null, "get");
};
const getPaymentSubscription = () => {
  return Api(ENDPOINTS.PAYMENTHISTORY.PAYMENT_SUBSCRIPTION, null, "get");
};
export { getPaymentHistory , getPaymentSubscription};
