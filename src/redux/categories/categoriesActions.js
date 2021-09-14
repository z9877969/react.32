import { createAction } from "@reduxjs/toolkit";

export const addCategory = createAction(
  "categories/addCategory",
  (category, transType) => {
    return {
      payload: {
        catType: transType,
        category,
      },
    };
  }
);
