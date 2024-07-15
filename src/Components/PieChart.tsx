import { PieChart } from '@mui/x-charts/PieChart';


// Data format to be sent as prop
// const data = [
// 	{ value: 10, label: 'series A' },
// 	{ value: 15, label: 'series B' },
// 	{ value: 20, label: 'series C' },
// ];

const expenseGraphColors = [
	'#FF0000', // Red
	'#FF6347', // Tomato
	'#FF4500', // Orange Red
	'#FFD700', // Gold
	'#FFA500', // Orange
	'#FF8C00', // Dark Orange
	'#B22222', // Firebrick
	'#DC143C', // Crimson
	'#8B0000', // Dark Red
	'#FF1493', // Deep Pink
	'#FF69B4', // Hot Pink
	'#DB7093', // Pale Violet Red
	'#CD5C5C', // Indian Red
	'#F08080', // Light Coral
	'#E9967A'  // Dark Salmon
];

const incomeGraphColors = [
	'#008000', // Green
	'#00FF00', // Lime
	'#9ACD32',  // Yellow Green
	'#3CB371', // Medium Sea Green
	'#2E8B57', // Sea Green
	'#006400', // Dark Green
	'#32CD32', // Lime Green
];



interface PieChartProps {
	type: "income" | "expense",
	data: Array<{ value: number, label: string }>
}


export default function PieActiveArc({ type, data }: PieChartProps) {
	return (
		<PieChart
			colors={type === "income" ? incomeGraphColors : expenseGraphColors}
			series={[
				{
					data,
					cornerRadius: 4,
					highlightScope: { faded: 'global', highlighted: 'item' },
					faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
				},
			]}
			height={200}
		/>
	);
}