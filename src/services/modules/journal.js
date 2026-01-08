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
  return Api(
    ENDPOINTS.JOURNALDELETEBYID.JOURNAL_DELETE_BY_ID.replace(":id", id),
    "Delete"
  );
};
export {
  journalAlert,
  getDropdownApi,
  getCreateAlertApi,
  updateJournalAlert,
  deleteJournalAlertById,
};
