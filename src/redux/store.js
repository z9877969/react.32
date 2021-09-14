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

const persistTransactionsConfig = {
  key: "transactions",
  storage,
  // blacklist: ["incomes"],
};

const persistedTransactionsReducer = persistReducer(
  persistTransactionsConfig,
  transactions
);

const store = configureStore({
  reducer: {
    transactions: persistedTransactionsReducer,
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
