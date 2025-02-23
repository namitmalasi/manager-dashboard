import BudgetStatusCard from "./BudgetStatusCard";

const projectBudgets = [
  {
    project: "Insurance App",
    totalAmount: "$50,000",
    profitability: "20%",
    hours: [
      {
        title: "Actual Hours",
        amount: "120h",
        percentage: 60,
        color: "#3b82f6",
      }, // Blue
      { title: "Hours Sold", amount: "100h", percentage: 50, color: "#22c55e" }, // Green
      {
        title: "Hours Over Budget",
        amount: "20h",
        percentage: 20,
        color: "#ef4444",
      }, // Red
    ],
  },
  {
    project: "VR Website",
    totalAmount: "$75,000",
    profitability: "25%",
    hours: [
      {
        title: "Actual Hours",
        amount: "140h",
        percentage: 70,
        color: "#3b82f6",
      },
      { title: "Hours Sold", amount: "110h", percentage: 60, color: "#22c55e" },
      {
        title: "Hours Over Budget",
        amount: "30h",
        percentage: 30,
        color: "#ef4444",
      },
    ],
  },
  {
    project: "Neo",
    totalAmount: "$40,000",
    profitability: "18%",
    hours: [
      {
        title: "Actual Hours",
        amount: "100h",
        percentage: 50,
        color: "#3b82f6",
      },
      { title: "Hours Sold", amount: "90h", percentage: 45, color: "#22c55e" },
      {
        title: "Hours Over Budget",
        amount: "15h",
        percentage: 15,
        color: "#ef4444",
      },
    ],
  },
];

const BudgetStatus = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full">
      <h2 className="text-lg font-semibold mb-4">Budget Status</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projectBudgets.map((project, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md">
            {/* Project Title */}
            <h3 className="text-md font-semibold mb-2">{project.project}</h3>

            {/* Total Amount & Profitability */}
            <div className="flex justify-between text-sm text-gray-700 mb-2">
              <span>
                Total Amount: <strong>{project.totalAmount}</strong>
              </span>
              <span>
                Profitability: <strong>{project.profitability}</strong>
              </span>
            </div>

            {/* Hours Progress Bars */}
            <div className="space-y-2">
              {project.hours.map((hour, idx) => (
                <BudgetStatusCard key={idx} {...hour} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetStatus;
