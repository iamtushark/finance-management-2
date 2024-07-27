import { Box } from '@mui/material';
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "75%",
        height: "75%",
        backgroundColor: "#f5f5f5",
        borderRadius: "20px",
        border: "1px solid #e0e0e0",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        },
        overflow: "visible", // Ensure overflow is handled correctly
      }}
    >
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
      width={500}
      skipAnimation={true}
      sx={{
        "& .MuiBarElement-series-budget": {
          fill: "#4caf50", // Budget color
          transition: "fill 0.3s ease",
        },
        "& .MuiBarElement-series-expense": {
          fill: "#f44336", // Expense color
          transition: "fill 0.3s ease",
        },
        "& .MuiBarChart-root": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    />
    </Box>
  );
}
