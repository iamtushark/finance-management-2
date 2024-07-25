import { BarChart } from '@mui/x-charts/BarChart';

interface DualBarChartProps {
  BudgetArray: number[];
  ExpenseArray: number[];
  categories: Array<string>;
}

const highlightScope = {
  highlighted: 'series',
  faded: 'global',
} as const;

export default function DualBarChart({
  BudgetArray,
  ExpenseArray,
  categories,
}: DualBarChartProps) {
  return (
    <BarChart
      height={500}
      series={[
        {
          label: 'Budget',
          data: BudgetArray,
        },
        {
          label: 'Expense',
          data: ExpenseArray,
        },
      ].map((s) => ({ ...s, highlightScope }))}
      xAxis={[{ scaleType: "band", data: categories }]}
      // sx={{
      //   '& .MuiBarElement-series-budget': {
      //     fill: '#4caf50',
      //   },
      //   '& .MuiBarElement-series-expense': {
      //     fill: '#f44336',
      //   },
      // }}
      width={500}
      skipAnimation={true}
    />
  );
}
