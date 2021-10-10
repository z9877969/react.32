import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import transactions from "./transactions/transactionsReducer";
import categories from "./categories/categoriesReducer";
import auth from "./auth/authReducer";

const transactionsPersistConfig = {
  key: "transactions",
  storage: storage,
  //   whitelist: ["incomes"],
  //   blacklist: ["incomes"],
};

const store = configureStore({
  reducer: {
    auth,
    transactions: persistReducer(transactionsPersistConfig, transactions),
    categories,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;

// const myReducer = (state = [], action) => {
//     switch (action.type) {
//       case "MyActionType":
//         return action.payload;
//       default:
//         return state;
//     }
//   };

//   // const action = {
//   //   type: "MyActionType",
//   //   payload: [321],
//   // };

//   const getAction = (arr) => ({
//     type: "MyActionType",
//     payload: arr,
//   });

//   const operation = (data) => (dispatch) => {
//     fetch().then((data) => dispatch(getAction(data)));
//   };

//   // dispatch(operation({ name: "qwe" }));

//   const fnMidlaware =
//     ({ dispatch }) =>
//     (next) =>
//     (action) => {
//       if (typeof action === "function") {
//         action(dispatch);
//       } else {
//         console.log("action :>> ", action);
//         next(action);
//       }
//     };
