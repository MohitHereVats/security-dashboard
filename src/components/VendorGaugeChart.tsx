import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// Mock data for the gauge chart
const gaugeData = [
  { name: "Used", value: 80 }, // 80% used
  { name: "Remaining", value: 20 }, // 20% remaining
];

const COLORS = ["#6B46C1", "#EDF2F7"]; // Purple for used, light gray for remaining

export const VendorGaugeChart: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full relative">
      <ResponsiveContainer width="100%" height={150}>
        <PieChart>
          <Pie
            data={gaugeData}
            cx="50%"
            cy="100%" 
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
            stroke="none"
          >
            {gaugeData.map((_entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
