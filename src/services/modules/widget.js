import { ENDPOINTS } from "../endpoints";
import Api from "../index";

const fetchWidgets = (search) => {
  return Api(`${ENDPOINTS.WIDGETS.FETCH_ALL}?search=${search}`, null, "get");
};
const fetchuserWidgets = (payload) => {
  return Api(ENDPOINTS.WIDGETS.FETCH_BY_USER, null, "get");
};

const addWidget = (id) => {
  let payload = {
    widgetId: id,
  };
  return Api(ENDPOINTS.WIDGETS.ADD_WIDGET, payload, "post");
};
const removeWidget = (payload) => {
  return Api(`${ENDPOINTS.WIDGETS.REMOVE_WIDGET}/${payload}`, null, "delete");
};
const fetchWidgit = () => {
  return Api(
    `${ENDPOINTS.WIDGETS.FETCH_ALL_WIDGET}`,
    null,
    "get",
  );
};

export { fetchuserWidgets, fetchWidgets, addWidget, removeWidget, fetchWidgit };
