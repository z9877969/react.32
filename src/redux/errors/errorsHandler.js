import { userLogout } from "../auth/authActions";
import { getCostsError } from "../transactions/transactionsActions";

const getErrorWithStatus = (err) => {
  err.status = +err.message.slice(-3);
  return err;
};

export const getError =
  ({ error, cb, errorType }) =>
  (dispatch) => {
    const newError = getErrorWithStatus(error);
    if (newError.status === 401) {
      dispatch(refreshOperation(cb));
    }

    switch (errorType) {
      case "getCosts":
        dispatch(getCostsError(newError.message));
        break;
      case "getIncomes":
        dispatch(getIncomesError(newError.message));
        break;
      default:
        return;
    }
  };

//  операция должна находиться среди
//  других операций авторизации
const refreshOperation = (cb) => (dispatch) => {
  dispatch(refreshRequest());

//   функция которая выполняет запрос на бекенд с 
//   рефреш-токеном для получения обновленного токена
  tokenRefreshApi()
    .then((data) => dispatch(refreshSuccess(data)))
    .then(() => dispatch(cb()))
    .catch((err) => dispatch(userLogout()));
};
