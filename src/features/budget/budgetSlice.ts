import type { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "../../app/createAppSlice";
import type { AppThunk } from "../../app/store";

import { Budget } from "../../dbOperations/interfaces";
import { expensesCategory } from "../../Constants/categories";

// for the db operations
import { setCategoryBudget as setDbCategoryBudget } from "../../dbOperations/operations";

export interface budgetSliceState {
  status: "idle" | "loading" | "succeeded" | "failed";
  budget: Budget;
}

// initiating the empty initialState object
const initialState: budgetSliceState = {
  budget: {},
  status: "idle",
};

// populating the empty initial state object
Object.keys(expensesCategory).forEach(category => {
  initialState.budget[category] = { amountSet: 0, amountSpent: 0 };
});

// If you are not using async thunks you can use the standalone `createSlice`.
export const budgetSlice = createAppSlice({
  name: "budget",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: create => ({
    setBudget: create.reducer((state, action: PayloadAction<Budget>) => {
      state.budget = action.payload;
    }),

    //
    setCategoryBudget: create.asyncThunk(
      async ({
        userId,
        category,
        categoryBudget,
      }: {
        userId: string;
        category: string;
        categoryBudget: Budget;
      }) => {
        const { amountSet, amountSpent } = categoryBudget[category];
        await setDbCategoryBudget(userId, category, amountSet, amountSpent);
        return { userId, category, amountSet, amountSpent };
      },
      {
        pending: state => {
          state.status = "loading";
        },
        fulfilled: (
          state,
          action: PayloadAction<{
            userId: string;
            category: string;
            amountSet: number;
            amountSpent: number;
          }>,
        ) => {
          const { userId, category, amountSet, amountSpent } = action.payload;
          state.budget[category] = {
            amountSet: amountSet,
            amountSpent: amountSpent,
          };
          state.status = "succeeded";
        },
        rejected: state => {
          state.status = "failed";
        },
      },
    ),
  }),

  selectors: {
    selectBudget: state => state.budget,
    selectCategoryBudget: (state: budgetSliceState, category: string) =>
      state.budget[category],
  },
});

// Action creators are generated for each case reducer function.
export const { setBudget, setCategoryBudget } = budgetSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectBudget, selectCategoryBudget } = budgetSlice.selectors;