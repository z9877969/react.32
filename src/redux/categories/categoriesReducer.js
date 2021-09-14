import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { addCategory } from "./categoriesActions";

const incomesCategoryReducer = createReducer([], {
  [addCategory]: (state, { payload }) =>
    payload.transType === "incomes" ? [...state, payload.input] : state,
});

const costsCategoryReducer = createReducer([], {
  [addCategory]: (state, { payload }) => 
  payload.transType === "costs" ? [...state, payload.input] : state,
});

export default combineReducers({
  incomes: incomesCategoryReducer,
  costs: costsCategoryReducer,
});
