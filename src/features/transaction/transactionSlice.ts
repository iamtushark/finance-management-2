import { getTransactions, addTransaction } from "../../dbOperations/operations";
import { TransactionType, Transaction } from "../../dbOperations/interfaces";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "../../app/createAppSlice";
import type { AppThunk } from "../../app/store";
// import { getComments, addComment } from "../../utils/dbOperations/dbOperations";
// import { Comments } from "../../utils/dbOperations/interfaces";
// import { Rating } from '../../Interfaces/Movies/movie';

interface TransactionSliceState {
  transactions: Transaction[];
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: TransactionSliceState = {
  transactions: [
    {
      type: "Expense",
      amount: 458,
      date: new Date(),
    },
  ],
  status: "idle",
};

export const transactionSlice = createAppSlice({
  name: "transactions",
  initialState,
  reducers: create => ({
    fetchTransactions: create.asyncThunk(
      async (userId: string) => {
        const transactions = await getTransactions(userId);
        return { transactions };
      },
      {
        pending: state => {
          state.status = "loading";
        },
        fulfilled: (
          state,
          action: PayloadAction<{ transactions: Transaction[] }>,
        ) => {
          state.status = "succeeded";
          state.transactions = action.payload.transactions;
        },
        rejected: state => {
          state.status = "failed";
        },
      },
    ),
    addNewTransaction: create.asyncThunk(
      async ({
        userId,
        transaction,
      }: {
        userId: string;
        transaction: Transaction;
      }) => {
        await addTransaction(userId, transaction);
        return { transaction };
      },
      {
        pending: state => {
          state.status = "loading";
        },
        fulfilled: (
          state,
          action: PayloadAction<{
            transaction: Transaction;
          }>,
        ) => {
          state.status = "succeeded";
          state.transactions.push(action.payload.transaction);
        },
        rejected: state => {
          state.status = "failed";
        },
      },
    ),
  }),
  selectors: {
    selectTransactions: state => state.transactions,
    selectStatus: state => state.status,
  },
});

export const { fetchTransactions, addNewTransaction } =
  transactionSlice.actions;

export const { selectTransactions, selectStatus } = transactionSlice.selectors;

export default transactionSlice.reducer;
