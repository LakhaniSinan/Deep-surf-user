import axios from "axios";

export let baseUrl = import.meta.env.VITE_BASE_URL;

console.log(baseUrl, "sdjhsajhasjhdasjhhjdsajhdasjhdjsha");

const api = async (path, params, method, isMultipart = false) => {
  const storedData = JSON.parse(localStorage.getItem("auth-storage"));
  const token = storedData?.state?.token;

  let options;
  options = {
    headers: {
      "Content-Type": isMultipart ? "multipart/form-data" : "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    method: method,
    ...(params && { data: isMultipart ? params : JSON.stringify(params) }),
  };

  return axios(baseUrl + path, options)
    .then((response) => {
      return response;
    })
    .catch(async (error) => {
      return error.response;
    });
};

export default api;
