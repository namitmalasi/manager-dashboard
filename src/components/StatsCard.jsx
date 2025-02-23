const StatsCard = ({ title, value, color, icon }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center w-40 relative">
      <div className={`absolute top-3 left-3 text-3xl ${color}`}>{icon}</div>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-gray-500 text-sm">{title}</p>
    </div>
  );
};

export default StatsCard;
