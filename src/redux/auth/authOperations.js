import {
  userRegisterApi,
  userLoginApi,
  userRefreshApi,
  getTransactionsApi,
} from "../../utils/services/firebaseApi";
import { getError } from "../errors/errorsHandler";
import {
  getCostsRequest,
  getCostsSuccess,
} from "../transactions/transactionsActions";
import {
  userLoginError,
  userLoginRequest,
  userLoginSuccess,
  userRefreshError,
  userRefreshRequest,
  userRefreshSuccess,
  userRegisterError,
  userRegisterRequest,
  userRegisterSuccess,
} from "./authActions";

export const userRegister = (userData) => (dispatch) => {
  dispatch(userRegisterRequest());

  userRegisterApi(userData)
    .then(({ expiresToken, kind, ...rest }) =>
      dispatch(userRegisterSuccess(rest))
    )
    .catch((err) => dispatch(userRegisterError(err.message)));
};

export const userLogin = (userData) => (dispatch) => {
  dispatch(userLoginRequest());

  userLoginApi(userData)
    .then(({ expiresToken, kind, ...rest }) => dispatch(userLoginSuccess(rest)))
    .catch((err) => dispatch(userLoginError(err.message)));
};

export const userRefresh = () => (dispatch, getState) => {
  dispatch(userRefreshRequest());

  const { idToken } = getState().auth.user;

  userRefreshApi(idToken)
    .then((data) => dispatch(userRefreshSuccess(data)))
    .catch((err) => dispatch(userRefreshError(err.message)));
};

export const getCosts = () => (dispatch, getState) => {
  dispatch(getCostsRequest());

  const { idToken, localId } = getState().auth.user;

  getTransactionsApi({ transType: "costs", idToken, localId })
    .then((data) => dispatch(getCostsSuccess(data)))
    .catch((err) =>
      dispatch(
        getError({
          error: err,
          cb: getCosts,
          errorType: "getCosts",
        })
      )
    );
};
