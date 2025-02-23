const BudgetStatusCard = ({ title, amount, percentage, color }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <h3 className="text-xs font-medium text-gray-700">{title}</h3>
      <div className="w-3/4 bg-gray-200 rounded-full h-3 relative">
        <div
          className="h-3 rounded-full flex items-center justify-center text-xs text-white"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        >
          {amount}
        </div>
      </div>
    </div>
  );
};

export default BudgetStatusCard;
