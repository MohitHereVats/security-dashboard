import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";

type ChartData = {
  name: string;
  lower: number; // Solid part of the bar
  upper: number; // Shady/transparent part on top
};

// Mock data for the stacked bar chart (representing average and peak/range)
const barChartData: ChartData[] = [
  { name: "Jan", lower: 28, upper: 45 }, // Example: avg 28, max 73 (28 + 45)
  { name: "Feb", lower: 38, upper: 58 },
  { name: "Mar", lower: 20, upper: 35 },
  { name: "Apr", lower: 32, upper: 48 },
  { name: "May", lower: 18, upper: 38 },
  { name: "Jun", lower: 35, upper: 55 },
  { name: "Jul", lower: 28, upper: 48 },
  { name: "Aug", lower: 30, upper: 50 },
  { name: "Sep", lower: 28, upper: 48 },
  { name: "Oct", lower: 32, upper: 53 },
  { name: "Nov", lower: 36, upper: 58 },
  { name: "Dec", lower: 25, upper: 45 },
];

export const VendorBarChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart
        data={barChartData}
        margin={{ top: 20, right: 0, left: 50, bottom: 30 }}
      >
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#A0AEC0", fontSize: 12 }}
        >
          <Label value="Month" position="bottom" offset={15} fill="#4A5568" />
        </XAxis>
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#A0AEC0", fontSize: 12 }}
          domain={[0, 100]}
          label={{
            value: "Security rating",
            angle: -90,
            position: "insideLeft",
            fill: "#4A5568",
            style: { textAnchor: "middle" },
          }}
        />
        <Tooltip
          cursor={{ fill: "#F5F3FF" }}
          contentStyle={{
            backgroundColor: "#1A202C",
            border: "none",
            borderRadius: "4px",
          }}
          itemStyle={{ color: "#fff" }}
          labelStyle={{ color: "#A0AEC0" }}
          formatter={(value: number, name: string, props: any) => {
            if (name === "lower") {
              // Calculate total rating for tooltip, assuming 'upper' is difference
              const totalRating = props.payload.lower + props.payload.upper;
              return [`Total: ${totalRating}`, "Security rating"];
            }
            return null; // Hide the 'upper' tooltip item
          }}
        />
        {/* Solid lower part of the bar */}
        <Bar
          dataKey="lower"
          stackId="a"
          fill="#6B46C1"
          radius={[0, 0, 4, 4]}
          barSize={16}
        />
        {/* Shady upper part of the bar */}
        <Bar
          dataKey="upper"
          stackId="a"
          fill="url(#colorShade)"
          radius={[4, 4, 0, 0]}
          barSize={16}
        />

        {/* Define the gradient for the shady effect */}
        <defs>
          <linearGradient id="colorShade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6B46C1" stopOpacity={0.4} />
            <stop offset="100%" stopColor="#6B46C1" stopOpacity={0.1} />
          </linearGradient>
        </defs>
      </BarChart>
    </ResponsiveContainer>
  );
};
