import { createAction } from "@reduxjs/toolkit";

export const addIncomes = createAction("transactions/addIncomes");
export const addCosts = createAction("transactions/addCosts");

export const getCostsRequest = createAction("auth/getCostsRequest");
export const getCostsSuccess = createAction("auth/getCostsSuccess");
export const getCostsError = createAction("auth/getCostsError");

export const getIncomesRequest = createAction("auth/getIncomesRequest");
export const getIncomesSuccess = createAction("auth/getIncomesSuccess");
export const getIncomesError = createAction("auth/getIncomesError");
