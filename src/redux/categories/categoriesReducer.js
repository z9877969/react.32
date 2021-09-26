import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { addIncomesCat, addCostsCat } from "./actionsCategories";

const incomesCatReducer = createReducer([], {
  [addIncomesCat]: (state, { payload }) => [...state, payload],
});

const costsCatReducer = createReducer([], {
  [addCostsCat]: (state, { payload }) => [...state, payload],
});

const categoriesReducer = combineReducers({
  incomesCat: incomesCatReducer,
  costsCat: costsCatReducer,
});

export default categoriesReducer;
