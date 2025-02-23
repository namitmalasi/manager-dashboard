import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "19 June", revenue: 1000 },
  { date: "20 June", revenue: 2500 },
  { date: "21 June", revenue: 2300 },
  { date: "22 June", revenue: 3100 },
  { date: "23 June", revenue: 4000 },
  { date: "24 June", revenue: 6000 },
  { date: "25 June", revenue: 6800 },
];

const RevenueChart = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full h-64">
      <h2 className="text-lg font-semibold mb-2">Total Revenue</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#22c55e"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
