import { BarChart } from '@mui/x-charts/BarChart';

interface DualBarChartProps {
  BudgetArray: number[];
  ExpenseArray: number[];
  dates: Array<Date>;
}

const highlightScope = {
  highlighted: 'series',
  faded: 'global',
} as const;


export default function DualBarChart({
  BudgetArray,
  ExpenseArray,
  dates,
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
      xAxis={[{ scaleType: "band",data: dates.map(date => date.getDate()) }]}
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
