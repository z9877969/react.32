import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { addCosts, addIncomes } from "./transactionsActions";

// const setCostsToLs = costs => localStorage.setItem("costs",JSON.stringify )

const costsReducer = createReducer([], {
  [addCosts]: (state, { payload }) => [...state, payload],
});

const incomesReducer = createReducer([], {
  [addIncomes]: (state, { payload }) => [...state, payload],
});

const transactionsReducer = combineReducers({
  incomes: incomesReducer,
  costs: costsReducer,
});

export default transactionsReducer;
