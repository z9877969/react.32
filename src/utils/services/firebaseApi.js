import axios from "axios";

// register - ?key=[API_KEY]
// login - https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

const API_KEY = "AIzaSyDc8MYd3sZcwYx1_D9_7ur7YeFN5WxBZ5Y";
const endPoints = {
  login: "accounts:signInWithPassword",
  register: "accounts:signUp",
  refresh: "accounts:lookup",
};

const baseUrl = {
  DB: "https://test-project-86606-default-rtdb.firebaseio.com/",
  AUTH: "https://identitytoolkit.googleapis.com/v1/",
};

const setBaseUrl = (url) => (axios.defaults.baseURL = url);

// "https://<DATABASE_NAME>.firebaseio.com/users/ada/name.json?auth=<ID_TOKEN>"

export const userRegisterApi = (userData) => {
  setBaseUrl(baseUrl.AUTH);
  axios.defaults.params = {
    key: API_KEY,
  };

  return axios
    .post(endPoints.register, {
      ...userData,
      returnSecureToken: true,
    })
    .then(({ data }) => data)
    .catch((err) => {
      throw err;
    });
};

export const userLoginApi = (userData) => {
  setBaseUrl(baseUrl.AUTH);
  axios.defaults.params = {
    key: API_KEY,
  };
  return axios
    .post(endPoints.login, {
      ...userData,
      returnSecureToken: true,
    })
    .then(({ data }) => data)
    .catch((err) => {
      throw err;
    });
};

export const userRefreshApi = (idToken) => {
  setBaseUrl(baseUrl.AUTH);
  axios.defaults.params = {
    key: API_KEY,
  };
  return axios
    .post(endPoints.refresh, { idToken })
    .then(({ data }) => {
      const { email, localId } = data.users[0];
      return { email, localId };
    })
    .catch((err) => {
      throw err;
    });
};

export const getTransactionsApi = ({ transType, idToken, localId }) => {
  setBaseUrl(baseUrl.DB);
  axios.defaults.params = {
    auth: idToken,
  };

  return axios
    .get(`/users/${localId}/transactions/${transType}.json`)
    .then(({ data }) => data)
    .catch((err) => {
      throw err;
    });
};
