import { Transaction, Budget } from "../dbOperations/interfaces";


export function convertBudgetDataToList(budgetData: Budget): { value: number; label: string }[] {
	return Object.entries(budgetData)
		.filter(([_, value]) => value.amountSet !== 0) // Filter out entries where amountSet is 0
		.map(([key, value]) => ({
			value: value.amountSet,
			label: `${key.toUpperCase()}`,
		}));
}

export const groupAndSumByCategory = (transactions: Transaction[]) => {
	const groupedData: { [key: string]: number } = transactions.reduce((acc, transaction) => {
		if (!acc[transaction.category]) {
			acc[transaction.category] = 0;
		}
		acc[transaction.category] += transaction.amount;
		return acc;
	}, {} as { [key: string]: number });

	const data = Object.keys(groupedData).map(category => ({
		label: category,
		value: groupedData[category]
	}));

	return data;
};