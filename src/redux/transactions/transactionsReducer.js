import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { userLogout } from "../auth/authActions";
import { addCosts, addIncomes } from "./transactionsActions";

const iS = {
  incomes: [],
  costs: [],
};

const incomesReducer = createReducer(iS.incomes, {
  [addIncomes]: (state, action) => {
    const newTransactions = [...state, action.payload];
    return newTransactions;
  },
  [userLogout]: () => iS.incomes,
});

const costsReducer = createReducer(iS.costs, {
  [addCosts]: (state, { payload }) => {
    const newTransactions = [...state, payload];
    return newTransactions;
  },
  [userLogout]: () => iS.costs,
});

const transactionsReducer = combineReducers({
  incomes: incomesReducer,
  costs: costsReducer,
});

export default transactionsReducer;
