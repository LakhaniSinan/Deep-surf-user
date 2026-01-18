import { ENDPOINTS } from "../endpoints";
import Api from "../index";

const fetchWidgets = (payload) => {
    return Api(ENDPOINTS.WIDGETS.FETCH_ALL, null, "get");
};
const addWidget = (id) => {
    let payload = {
        widgetId: id
    }
    return Api(ENDPOINTS.WIDGETS.ADD_WIDGET, payload, "post");
};
const removeWidget = (payload) => {
    return Api(`${ENDPOINTS.WIDGETS.REMOVE_WIDGET}/${payload}`, null, "delete");
};


export { fetchWidgets, addWidget, removeWidget };
