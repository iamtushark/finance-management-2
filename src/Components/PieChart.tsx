import React from "react";
import { PieChart } from "@mui/x-charts";
import { Box } from "@mui/material";

const expenseGraphColors = [
  "#FF0000", // Red
  "#FF6347", // Tomato
  "#FFD700", // Gold
  "#FFA500", // Orange
  "#FF8C00", // Dark Orange
  "#B22222", // Firebrick
  "#DC143C", // Crimson
  "#8B0000", // Dark Red
  "#FF4500", // Orange Red
  "#FF1493", // Deep Pink
  "#FF69B4", // Hot Pink
  "#DB7093", // Pale Violet Red
  "#CD5C5C", // Indian Red
  "#F08080", // Light Coral
  "#E9967A", // Dark Salmon
];

const incomeGraphColors = [
  "#008000", // Green
  "#00FF00", // Lime
  "#9ACD32", // Yellow Green
  "#3CB371", // Medium Sea Green
  "#2E8B57", // Sea Green
  "#006400", // Dark Green
  "#32CD32", // Lime Green
];

interface PieChartProps {
  type: "income" | "expense";
  data: Array<{ value: number; label: string }>;
}

export default function PieActiveArc({ type, data }: PieChartProps) {
  const colors = type === "income" ? incomeGraphColors : expenseGraphColors;

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
      <PieChart
        colors={colors}
        series={[
          {
            data,
            cornerRadius: 4,
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          },
        ]}
        sx={{
          "& .MuiPieChart-root": {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },
          "& .MuiPieChart-legend": {
            marginTop: "16px",
            textAlign: "center",
          },
        }}
        height={300}
      />
    </Box>
  );
}
