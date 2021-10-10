import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  userLoginSuccess,
  userLogout,
  userRefreshSuccess,
  userRegisterSuccess,
} from "./authActions";

const iS = {
  email: "",
  localId: "",
  idToken: null,
  refreshToken: null,
};

const userReducer = createReducer(iS, {
  [userLoginSuccess]: (_, { payload }) => payload,
  [userRegisterSuccess]: (_, { payload }) => payload,
  [userRefreshSuccess]: (state, { payload }) => ({ ...state, ...payload }),
  [userLogout]: () => iS,
});

const isAuthReducer = createReducer(false, {
  [userLoginSuccess]: () => true,
  [userRegisterSuccess]: () => true,
  [userLogout]: () => false,
  [userRefreshSuccess]: () => true,
});

const userPersistConfig = {
  key: "tokens",
  storage,
  whitelist: ["idToken"],
};

const authReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  isAuth: isAuthReducer,
});

export default authReducer;
