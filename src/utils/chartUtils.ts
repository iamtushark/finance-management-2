interface BudgetData {
	[key: string]: { amountSet: number; amountSpent: number };
}

export function convertBudgetDataToList(budgetData: BudgetData): { value: number; label: string }[] {
	return Object.entries(budgetData)
		.filter(([_, value]) => value.amountSet !== 0) // Filter out entries where amountSet is 0
		.map(([key, value]) => ({
			value: value.amountSet,
			label: `${key.toUpperCase()}`,
		}));
}