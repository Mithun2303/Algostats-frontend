import { Card } from "./ui/card";

function RecentlySolvedCard({ className }) {
  const problems = [
    { title: "Two Sum", difficulty: "Easy" },
    { title: "Add Two Numbers", difficulty: "Hard" },
    { title: "Reverse Integer", difficulty: "Medium" },
    { title: "Insert Interval", difficulty: "Medium" },
    { title: "Is Subsequence", difficulty: "Easy" },
    { title: "Two Sum", difficulty: "Easy" },
    { title: "Add Two Numbers", difficulty: "Hard" },
    { title: "Two Sum", difficulty: "Medium" },
  ];

  return (
    <Card
      className={`bg-glassbg p-8 h-80 rounded-lg text-white border-none shadow-lg mt-4 ${className}`}
    >
      <h3 className="text-2xl  font-bold text-center">Recently Solved</h3>
      <ul>
        <li className="flex justify-between font-semibold text-xl">
        <span>Title</span>
            <span>
              Difficulty
            </span>
        </li>
        {problems.map((problem, index) => (
          <li key={index} className="flex justify-between">
            <span>{problem.title}</span>
            <span
              className={`${
                problem.difficulty === "Easy"
                  ? "text-green-400"
                  : problem.difficulty === "Medium"
                    ? "text-yellow-400"
                    : "text-red-400"
              }`}
            >
              {problem.difficulty}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default RecentlySolvedCard;
