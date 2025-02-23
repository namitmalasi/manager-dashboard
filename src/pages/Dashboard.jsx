import StatsCard from "../components/StatsCard";
import { CheckCircle, Clock, AlertTriangle, Users, Folder } from "lucide-react";
import RevenueChart from "../components/RevenueChart";
import BudgetPieChart from "../components/BudgetPieChart";
import TeamMood from "../components/TeamMood";
import BudgetStatus from "../components/BudgetStatus";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Projects",
      value: 5,
      color: "text-blue-500",
      icon: <Folder />,
    },
    {
      title: "Completed",
      value: 1,
      color: "text-green-500",
      icon: <CheckCircle />,
    },
    { title: "Ongoing", value: 3, color: "text-yellow-500", icon: <Clock /> },
    {
      title: "Delayed",
      value: 1,
      color: "text-red-500",
      icon: <AlertTriangle />,
    },
    { title: "Employees", value: 5, color: "text-indigo-500", icon: <Users /> },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <RevenueChart />
          <BudgetPieChart />
        </div>
        <TeamMood />
      </div>

      <div className="w-full">
        <BudgetStatus />
      </div>
    </div>
  );
};

export default Dashboard;
