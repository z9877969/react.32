import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { addCosts, addIncomes } from "./transactionsActions";

// const incomesReducer = createReducer([], {
//   ["transactions/addIncomes"]: (state, action) => {
//     return [...state, action.payload];
//   },
// });

const setToLS = (key, data) => localStorage.setItem(key, JSON.stringify(data));
const getFronLS = (key) => JSON.parse(localStorage.getItem(key));

const iS = {
  //   incomes: getFronLS("incomes") || [],
  //   costs: getFronLS("costs") || [],
  incomes: [],
  costs: [],
};

const incomesReducer = createReducer(iS.incomes, {
  [addIncomes]: (state, action) => {
    const newTransactions = [...state, action.payload];
    // setToLS("incomes", newTransactions);
    return newTransactions;
  },
  //   [remaveIncomes]: (state, { payload }) =>
  //     state.filter(({ id }) => id !== payload),
});

const costsReducer = createReducer(iS.costs, {
  [addCosts]: (state, { payload }) => {
    const newTransactions = [...state, payload];
    // setToLS("costs", newTransactions);
    return newTransactions;
  },
});

const transactionsReducer = combineReducers({
  incomes: incomesReducer,
  costs: costsReducer,
});

export default transactionsReducer;
// state: {
//     transactions: {
//         incomes: [],
//         costs: []
//     }
// }
