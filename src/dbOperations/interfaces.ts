export interface User {
  username: string;
  password: string;
  name: string;
  email: string;
}

export type TransactionType = "Expense" | "Income";

export interface Transaction {
  type: TransactionType;
  amount: number;
  date: Date;
}

export interface DBTransactions {
  [userId: string]: Transaction[];
}

export interface Budget {
  [category: string]: {
    amountSet: number;
    amountSpent: number;
  };
}

export interface DBBudgets {
  [userId: string]: Budget;
}

export interface DBUsers {
  [userId: string]: User;
}
