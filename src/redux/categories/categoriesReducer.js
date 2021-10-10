import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { userLogout } from "../auth/authActions";
import { addIncomesCat, addCostsCat } from "./actionsCategories";

const incomesCatReducer = createReducer([], {
  [addIncomesCat]: (state, { payload }) => [...state, payload],
  [userLogout]: () => []
});

const costsCatReducer = createReducer([], {
  [addCostsCat]: (state, { payload }) => [...state, payload],
  [userLogout]: () => []
});

const categoriesReducer = combineReducers({
  incomesCat: incomesCatReducer,
  costsCat: costsCatReducer,
});

export default categoriesReducer;
