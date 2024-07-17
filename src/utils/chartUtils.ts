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


export function processTransactionsForSingleLineChart(transactions: Transaction[]): { dates: Date[]; amounts: number[] } {
	// Initialize variables to track lowest and highest dates
	let lowestDate = new Date();
	let highestDate = new Date(0); // Initialize with the earliest possible date

	// Iterate through transactions to find lowest and highest dates
	transactions.forEach(transaction => {
		if (transaction.date < lowestDate) {
			lowestDate = transaction.date;
		}
		if (transaction.date > highestDate) {
			highestDate = transaction.date;
		}
	});

	// Generate array of dates between lowestDate and highestDate
	const datesArray: Date[] = [];
	let currentDate = new Date(lowestDate.setHours(0,0,0));
	while (currentDate <= highestDate) {
		datesArray.push(new Date(currentDate));
		currentDate.setDate(currentDate.getDate() + 1);
	}

	// Create array to store aggregated amounts by date
	const amountsArray: number[] = [];
	datesArray.forEach(date => {
		const amountOnDate = transactions
			.filter(transaction => transaction.date.toDateString() === date.toDateString())
			.reduce((totalAmount, transaction) => totalAmount + transaction.amount, 0);
		amountsArray.push(amountOnDate);
	});

	return { dates: datesArray, amounts: amountsArray };
}