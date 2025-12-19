import { ENDPOINTS } from "../endpoints";
import Api from "../index";

const refferalStats = () => {
  return Api(ENDPOINTS.REFFERAL_STATS.REFFERAL, null, "get");
};

const refferHistory = ({ page = 1, limit = 10 }) => {
  return Api(
    `${ENDPOINTS.REFFERAL_HISTORY.REFFERAL_DATA}?page=${page}&limit=${limit}`,
    null,
    "get"
  );
};

const transactionHistory = ({ page = 1, limit = 10 }) => {
  return Api(
    `${ENDPOINTS.TRANSACTION_HISTORY.TRANSACTION_DATA}?page=${page}&limit=${limit}`,
    null,
    "get"
  );
};

const requestWithdrawal = (payload) => {
  return Api(ENDPOINTS.WITHDRAW.WITHDRAW_REQUEST, payload, "post");
};

const withdrawDetails = (id) => {
  console.log("idddddddddddd");
  
  return Api(`${ENDPOINTS.WTHDRAWREQUEST.WITHDRAW_REQUEST.replace(":id" , id)}`, null, "get");
};

export {
  refferalStats,
  refferHistory,
  transactionHistory,
  requestWithdrawal,
  withdrawDetails,
};
