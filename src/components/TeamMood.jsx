const teamMembers = [
  { id: 1, name: "Andrea", role: "UX Junior", mood: "😊" },
  { id: 2, name: "Alvaro", role: "Back-end Developer", mood: "😎" },
  { id: 3, name: "Juan", role: "UX Senior", mood: "🙂" },
  { id: 4, name: "Jose", role: "Marketing", mood: "😐" },
  { id: 5, name: "Maria", role: "UX Junior", mood: "😕" },
];

const TeamMood = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full">
      <h2 className="text-lg font-semibold mb-2">Team Mood</h2>
      <ul className="space-y-3">
        {teamMembers.map((member) => (
          <li
            key={member.id}
            className="flex items-center justify-between border-b pb-2"
          >
            <div>
              <p className="text-sm font-medium">{member.name}</p>
              <p className="text-xs text-gray-500">{member.role}</p>
            </div>
            <span className="text-2xl">{member.mood}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamMood;
