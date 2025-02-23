import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Under Budget", value: 48, color: "#22c55e" }, // Green
  { name: "On Budget", value: 33, color: "#3b82f6" }, // Blue
  { name: "Over Budget", value: 19, color: "#ef4444" }, // Red
];

const BudgetPieChart = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full h-64">
      <h2 className="text-lg font-semibold mb-2">Budget</h2>
      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BudgetPieChart;
