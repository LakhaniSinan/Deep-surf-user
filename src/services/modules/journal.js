import { ENDPOINTS } from "../endpoints";
import Api from "../index";

const journalAlert = () => {
  return Api(ENDPOINTS.JOURNALAPI.JOURNAL_API, null, "get");
};
const getDropdownApi = () => {
  return Api(ENDPOINTS.JOURNALDROWPDOWN.JOURNAL_DROWPDOWN_API, null, "get");
};
const getCreateAlertApi = (payload) => {
  return Api(
    ENDPOINTS.CREATEJOURNALALERT.CREATE_JOURNAL_ALERT_API,
    payload,
    "post"
  );
};
const updateJournalAlert = (id, payload) => {
  return Api(
    ENDPOINTS.JOURNALALERTBYID.JOURNAL_ALERT_BY_ID.replace(":id", id),
    payload,
    "put"
  );
};
const deleteJournalAlertById = (id) => {
  console.log("ffrfrfrfrhfucnmvvvvvvvvvvvvvvv", id);
  return Api(
    ENDPOINTS.JOURNALDELETEBYID.JOURNAL_DELETE_BY_ID.replace(":id", id),
    null,
    "Delete"
  );
};
const jounralSearchApi = (query) => {
  return Api(`${ENDPOINTS.JOUTNALSEARCHAPI.JOURNAL_SEARCH_API}?query=${query}`);
};
// Accept coin as a parameter
const journalLiveCoin = (coin) => {
  return Api(`${ENDPOINTS.JOUTNALSEARCHAPI.LIVE_COINS}${coin}`, null, "get");
};

export {
  journalAlert,
  getDropdownApi,
  getCreateAlertApi,
  updateJournalAlert,
  deleteJournalAlertById,
  jounralSearchApi,
  journalLiveCoin,
};
