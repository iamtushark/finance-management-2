import { LineChart } from "@mui/x-charts/LineChart";
import {
  lineElementClasses,
  markElementClasses,
} from "@mui/x-charts/LineChart";

interface SingleLineChartProps {
  label: string;
  data: number[];
  dates: Date[];
}

export default function SingleLineChart({
  label,
  data,
  dates,
}: SingleLineChartProps) {
  const newDates = dates.map(date =>
    date.toLocaleDateString("en-US")?.toString(),
  );
  return (
    <LineChart
      xAxis={[
        {
          data: newDates,
          scaleType: "point",
        },
      ]}
      series={[
        {
          label: label,
          data: data,
          showMark: false,
        },
      ]}
      width={500}
      height={300}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          strokeWidth: 2,
        },
        [`& .${markElementClasses.root}`]: {
          scale: "0.6",
          fill: "#fff",
          strokeWidth: 2,
        },
      }}
    />
  );
}
